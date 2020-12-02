/// <reference types="Cypress" />

it('should visit comic list page', () => {
  cy.visit('http://localhost:4200/comics');
  cy.get('.mat-card-title');
  cy.get('.mat-card-image')
    .should('be.visible')
    .and(($img) => {
      // "naturalWidth" and "naturalHeight" are set when the image loads
      expect($img[0].naturalWidth).to.be.greaterThan(0)
    })
});
