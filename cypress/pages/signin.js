/// <reference types='cypress'/>
/// <reference types='../support/commands.d.ts'/>

class SignIn {
   /**
    * Opens the Sign In page for the user
    */
   open() {
      cy.visit('/login')
   }

   /**
    * Logins user to the conduit app with valid credentials
    * @param {string} username
    * @param {string} password
    */
   login(username, password) {
      cy.get('input[placeholder="Email"]').type(username)
      cy.get('input[placeholder="Password"]').type(password)
      cy.get('button.btn-primary').click()
   }
}

class SignInVerify {
   /**
    * Verifies that Sign in page is indeed displayed
    */
   pageIsOpen() {
      cy.get('h1')
         .should('be.visible')
         .and('have.text', 'Sign in')
      cy.get('p.text-xs-center a').as('needAccount')
      cy.get('@needAccount')
         .should('have.text', 'Need an account?')
         .and('have.attr', 'href', '/register')
         .and('have.css', 'color', 'rgb(92, 184, 92)')
   }

   /**
    * Verifies that the user has logged in by checking the
    * username tab menu
    * @param {string} username
    */
   thisUserHasLoggedIn(username) {
      cy.get('li.nav-item a').eq(3).as('userName')
      cy.get('@userName').should('contain', username)
      cy.lit('@userName')
   }
}

export const signIn = new SignIn()
export const signInVerify = new SignInVerify()
