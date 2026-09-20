import { signInUser } from "@/actions/auth";
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
import { connect } from "./dbConnect";
export const authOptions = {
    secret: process.env.NEXTAUTH_SECRET,

    // session: {
    //     strategy: "jwt",
    // },
    providers: [
        CredentialsProvider({

            name: 'Credentials',

            credentials: {
                // username: { label: "Username", type: "text", placeholder: "jsmith" },
                // password: { label: "Password", type: "password" }

            },

            async authorize(credentials, req) {
                //? send credentials in signinUser
                const user = await signInUser(credentials)
                // console.log(user);
                if (!user) {
                    return null
                }
                return { ...user }

            }


        }),
        //?Google Provider.
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })


    ],

    callbacks: {
        async signIn({ user, account }) {
            console.log(user);
            const collection = await connect("users");

            const existingUser = await collection.findOne({
                email: user.email, provider: account.provider
            });

            // User already exists
            if (existingUser) {
                return true
            }

            const newUser = {
                name: user.name,
                email: user.email,
                image: user.image,
                provider: account.provider,
                role: "user",
                createdAt: new Date()
            };

            await collection.insertOne(newUser);

            return true
        },

        // async redirect({ url, baseUrl }) {
        //     // return baseUrl
        // },

        async session({ session, user, token }) {
            session.role = token?.role
            session.email = token?.email
            return session
        },

        async jwt({ token, user, account }) {
            if (user) {
                if (account?.provider === "google") {

                    const collection = await connect("users");

                    const dbUser = await collection.findOne({
                        email: user.email
                    });

                    token.role = dbUser?.role;
                    token.email = dbUser?.email;

                } else {
                    token.role = user?.role;
                    token.email = user?.email;
                }
            }

            return token;
        }
    }
}
