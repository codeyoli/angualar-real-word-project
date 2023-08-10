/// <reference types='cypress'/>

import { pg } from '../pages/pg'

describe('Regression tests', () => {
   it('user can see the home page', () => {
      pg.home.open()
      pg.homeVerify.pageIsOpen()
      pg.home.globalFeed()
   })

   it('user can visit sign in page', () => {
      pg.signIn.open()
      pg.signInVerify.pageIsOpen()
      pg.signIn.login('yasunaz1990@gmail.com', 'pubg!max')
      pg.signInVerify.thisUserHasLoggedIn('yasunaz1990')
   })
})

describe.only('Register test cases', () => {
   beforeEach('visit sign up page', () => {
      pg.signUp.open()
   })

   it('verify user can register', () => {
      pg.signUp.fillOutInfo({
         username: Cypress.env('username'),
         email: Cypress.env('email'),
         password: Cypress.env('password'),
      })
   })

   it('verify user cannot sign up with existing username', () => {
      pg.signUp.fillOutInfo({
         username: Cypress.env('username'),
         email: Cypress.env('email'),
         password: Cypress.env('password'),
      })
      pg.signUpVerify.duplicateUserMsg()
   })
})
