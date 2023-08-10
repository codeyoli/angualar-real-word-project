/// <reference types='cypress'/>

class SignUp {
   /**
    * Navigates user to the Sign up or Registration page
    */
   open() {
      cy.visit('/register')
      cy.get('h1').should('be.visible').and('have.text', 'Sign up')
      cy.get('p.text-xs-center a').as('haveAnAccountLink')
      cy.get('@haveAnAccountLink')
         .should('have.attr', 'href', '/login')
         .and('have.text', 'Have an account?')
   }

   /**
    * Registers user with info provided by the arugment object.
    *
    * @param {object} info object that contain 3 keys
    *
    * - username: string
    * - email   : string
    * - password: string
    */
   fillOutInfo(info) {
      const user = info['username']
      const email = info.email
      const pass = info.password

      cy.get("input[placeholder='Username']").clear().type(user)
      cy.get("input[placeholder='Email']").clear().type(email)
      cy.get("input[placeholder='Password']").clear().type(pass)
      cy.get('button.btn-primary').click()
   }
}

class SignUpVerify {
   /**
    * Verifies the error message displayed for user sign up with existing
    * or duplicate username
    */
   duplicateUserMsg() {
      cy.get('ul.error-messages li').as('errorMsg')
      cy.get('@errorMsg')
         .eq(0)
         .should('be.visible')
         .and('contain', 'email has already been taken')

      cy.get('@errorMsg')
         .eq(1)
         .should('be.visible')
         .and('contain', 'username has already been taken')
   }
}

export const signUp = new SignUp()
export const signUpVerify = new SignUpVerify()
