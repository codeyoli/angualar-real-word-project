/// <reference types='cypress'/>

class Home {
   /**
    * Takes user to the home page of conduit app
    */
   open() {
      cy.visit('/')
   }

   /**
    * Clicks the Global Feed tab in home page
    */
   globalFeed() {
      cy.get('a.nav-link').eq(4).as('globalFeedButton')
      cy.get('@globalFeedButton').click()
   }

   /**
    * Clicks the Your Feed tab in home page
    */
   yourFeed() {
      cy.get('a.nav-link').contains('Your Feed').click()
   }
}

class HomeVerify {
   /**
    * Verifies that home page is indeed displayed
    */
   pageIsOpen() {
      cy.get('h1.logo-font').as('pageBanner')
      cy.get('@pageBanner')
         .should('be.visible')
         .and('have.text', 'conduit')
   }
}

export const home = new Home()
export const homeVerify = new HomeVerify()
