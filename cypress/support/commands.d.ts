declare namespace Cypress {
   interface Chainable<Subject> {
      /**
       * Creates highlight effect on target element
       * @param element target element
       */
      lit(element: string): Chainable<any>
   }
}
