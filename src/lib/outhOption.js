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

            const collection = await connect("users");

            const existingUser = await collection.findOne({
                email: user.email
            });

            // User already exists
            if (existingUser) {
                return true;
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

            return true;
        },
    }
}
