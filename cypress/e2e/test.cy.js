

/* eslint-disable */
describe('Displayed and returned value', () => {
  it('Add small integer value', () => {
      cy.visit('localhost:8080')
      cy.get('#input').type('1000')
      cy.get('#input')
          .should('have.value', 'R$ 10,00')
      cy.get('p').should('contain', '10.00')
  })
  it('Add small decimal value', () => {
      cy.get('#input').clear()
      cy.get('#input').type('150')
      cy.get('#input')
          .should('have.value', 'R$ 1,50')
      cy.get('p').should('contain', '1.50')
  })
  it('Add medium integer value', () => {
      cy.get('#input').clear()
      cy.get('#input').type('150000')
      cy.get('#input')
          .should('have.value', 'R$ 1.500,00')
      cy.get('p').should('contain', '1500')
  })
  it('Add medium float value', () => {
      cy.get('#input').clear()
      cy.get('#input').type('150050')
      cy.get('#input')
          .should('have.value', 'R$ 1.500,50')
      cy.get('p').should('contain', '1500.50')
  })
  it('Add big integer value', () => {
      cy.get('#input').clear()
      cy.get('#input').type('450000000')
      cy.get('#input')
          .should('have.value', 'R$ 4.500.000,00')
      cy.get('p').should('contain', '4500000')
  })
  it('Add big float value', () => {
      cy.get('#input').clear()
      cy.get('#input').type('760050010')
      cy.get('#input')
          .should('have.value', 'R$ 7.600.500,10')
      cy.get('p').should('contain', '7600500.10')
  })
  it('Add non number value', () => {
      cy.get('#input').clear()
      cy.get('#input').type('abc')
      cy.get('#input')
          .should('have.value', 'R$ 0,00')
      cy.get('p').should('contain', '0.00')
  })
})