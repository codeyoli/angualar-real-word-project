/// <reference types='cypress'/>
/// <reference types='../support/commands.d.ts'/>

class Article {
   /**
    * Navigates to the Articles page
    */
   open() {
      cy.contains('li.nav-item', 'New Article').as('articleTab')
      cy.lit('@articleTab')
      cy.get('@articleTab').click()
   }

   /**
    * Given the article object, fills out and publishes the new article
    * on the editor page. Article object has following keys and its type
    *
    * - title: string
    * - description: string
    * - body: string
    * - tag: string
    *
    * @param {object} info article object
    *
    */
   publishArticle(info) {
      cy.get("input[formcontrolname='title']").clear().type(info.title)
      cy.get("input[formcontrolname='description']")
         .clear()
         .type(info.description)
      cy.get("textarea[formcontrolname='body']").clear().type(info.body)
      cy.get("input[placeholder='Enter tags']").type(info.tag)
      cy.get('button').contains('Publish Article').click()
      cy.get('div.banner h1', { timeout: 20000 })
         .should('be.visible')
         .and('contain', info.title)
   }

   /**
    * Given the article tile or the natural index from the top, clicks the article
    * and deltes it.
    * @param {string|number} article article title or article natural index from top to bottom
    */
   deleteArticle(article) {
      const isText = typeof article === 'string'
      const isNumber = typeof article === 'number'
      cy.visit('/')
      cy.wait(2000)
      if (isText) {
         cy.get('div.article-preview h1').contains(article).as('chosenArticle')
         cy.lit('@chosenArticle')
         cy.get('@chosenArticle').click()
      } else if (isNumber) {
         const index = article - 1
         cy.get('div.article-preview h1').eq(index).as('chosenArticle')
         cy.lit('@chosenArticle')
         cy.get('@chosenArticle').click()
      }
      // Delete Article Button
      cy.wait(1000)
      cy.get('div.article-actions button.btn-outline-danger').click()
   }
}

export const article = new Article()
