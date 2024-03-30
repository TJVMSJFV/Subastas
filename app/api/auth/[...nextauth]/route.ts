import { PrismaAdapter } from '@next-auth/prisma-adapter';
import NextAuth, { AuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';

import db from '@/lib/prisma-db';

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(db),
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID as string,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    // }),
    // GithubProvider({
    //   clientId: process.env.GITHUB_CLIENT_ID as string,
    //   clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    // }),
    Credentials({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials,req) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Invalid Credentials!');
        }

        const collector = await db.collector.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!collector || !collector?.password) {
          throw new Error('Invalid Credentials!');
        }

        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          collector.password
        );

        if (!isCorrectPassword) {
          throw new Error('Invalid Credentials!');
        }

        return {
          ...collector,
          id: collector.docId,
        };
      },
    }),
  ],
  pages: {
    signIn: '/',
  },
  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: 'jwt',
  },
  secret: process.env.SECRET,
};

export default NextAuth(authOptions);
