import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import Credentials from 'next-auth/providers/credentials';

import { dbUser } from '../../../database';
import { IUser } from '../../../interfaces/user';

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    
    // ...add more providers here
    Credentials({
      name: 'Custom Login',
      credentials: {
        email: { label: 'Correo:', type: 'email', placeholder: 'correo@google.com'  },
        password: { label: 'Contraseña:', type: 'password', placeholder: 'Contraseña'  },
      },
      async authorize(credentials, req) {
  
        //  return { name: 'Juan', correo: 'juan@google.com', role: 'admin' };
        return await dbUser.checkUserEmailPassword( credentials!.email, credentials!.password );
      }
    }),


    GithubProvider({
      clientId: "asdf",
      clientSecret: "asdf",
    }),


  ],

  // Custom Pages
  pages: {
    signIn: '/auth/login',
     error: '/auth/login',
    newUser: '/auth/register'
  },

  // Callbacks
  jwt: {
    // secret: process.env.JWT_SECRET_SEED, // deprecated
  },
  
  session: {
    maxAge: 2592000, /// 30d
    strategy: 'jwt',
    updateAge: 86400, // cada día
  },


  callbacks: {

    async jwt({ token, account, user }) {
      // console.log({ token, account, user });

      if ( account ) {
        token.accessToken = account.access_token;

        switch( account.type ) {

          case 'oauth': 
            token.user = await dbUser.oAUthToDbUser( user?.email || '', user?.name || '' );
          break;

          case 'credentials':
            token.user = user;
          break;
        }

      }

      return token;
    },


    async session({ session, token, user }){
      // console.log({ session, token, user });
  
      session.user = token.user as any;

      return session;
    }
    

  }

});