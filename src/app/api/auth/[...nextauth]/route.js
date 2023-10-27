import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
import User from "../../../../../models/users";
import { connectDB } from "@/utils/mongoose";
import bcrypt from "bcryptjs";

const NEXTAUTH_SECRET = "R2SBypNexU1tZ0bp0w6FbubovGXiIKd52x5yE9JBEFU=";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        const { id, password } = credentials;

        try {
          await connectDB();
          const user = await User.findOne({ id });
          if (!user) {
            return null;
          }
          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) {
            return null;
          }

          return user;
        } catch (err) {
          console.log("error", err);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      if (session?.user) session.user.role = token.role;
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },

  secret: NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
