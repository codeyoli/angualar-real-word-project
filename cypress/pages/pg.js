import { home, homeVerify } from './home'
import { signIn, signInVerify } from './signin'
import { signUp, signUpVerify } from './signup'
import { article } from './article'

export class pg {
   // Home page related
   static home = home
   static homeVerify = homeVerify

   // Sign In page related
   static signIn = signIn
   static signInVerify = signInVerify

   // Sign Up page related
   static signUp = signUp
   static signUpVerify = signUpVerify

   // Article page related
   static article = article
}
