/// <reference types='cypress'/>
/// <reference types='../support/commands.d.ts'/>

import { pg } from '../pages/pg'

describe('Article related tests', () => {
   it('verify user can submit new article', () => {
      pg.signIn.open()
      pg.signIn.login(Cypress.env('email'), Cypress.env('password'))
      pg.article.open()
      pg.article.publishArticle({
         title: 'Smoke vs Sanity',
         description: 'Articles of test differences',
         body: 'Smoke test is for build verificaiton, meanwhile sanity test is small regression test',
         tag: 'testing',
      })
      pg.article.deleteArticle('Smoke vs Sanity')
   })

   it('verify user can submit new article with fixture', () => {
      pg.signIn.open()
      pg.signIn.login(Cypress.env('email'), Cypress.env('password'))
      pg.article.open()
      cy.fixture('article.info').then(data => {
         pg.article.publishArticle({
            title: data.title,
            description: data.description,
            body: data.body,
            tag: data.tag,
         })

         pg.article.deleteArticle(data.title)
      })
   })
})
