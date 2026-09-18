import { authOptions } from "@/lib/outhOption"
import NextAuth from "next-auth"




const handler = NextAuth(authOptions)
export {handler as GET,handler as POST}