describe('home page module tests', () => {
   it('[A]testing to see hoem page', () => {
      cy.visit('/')
   })

   it('[B]testing to see login page', () => {
      cy.visit('/login')
   })

   it('[C]testing to see sign up', () => {
      cy.visit('/register')
   })
})

context('fronted test', () => {
   describe('user registration module tests', () => {
      it('[E]testing to see hoem page', () => {
         cy.visit('/')
      })

      it('[F]testing to see login page', () => {
         cy.visit('/login')
      })
   })

   it('[G]testing to see sign up', () => {
      cy.visit('/register')
   })
})
