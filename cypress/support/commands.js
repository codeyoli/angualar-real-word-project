/// <reference types="cypress" />

Cypress.Commands.add('lit', element => {
   cy.get(element).invoke(
      'css',
      'border',
      '2px solid purple'
   )
})
