

/* eslint-disable */
describe('Displayed and returned value', () => {
  it('Add small integer value', () => {
      cy.visit('localhost:8080')
      cy.get('#input').type('1000')
      cy.get('#input')
          .should('have.value', 'R$ 0,01000')
      cy.get('p').should('contain', '0.01000')
  })
  it('Add small decimal value', () => {
      cy.get('#input').clear()
      cy.get('#input').type('150')
      cy.get('#input')
          .should('have.value', 'R$ 0,00150')
      cy.get('p').should('contain', '0.00150')
  })
  it('Add medium integer value', () => {
      cy.get('#input').clear()
      cy.get('#input').type('150000000')
      cy.get('#input')
          .should('have.value', 'R$ 1.500,00000')
      cy.get('p').should('contain', '1500.00000')
  })
  it('Add medium float value', () => {
      cy.get('#input').clear()
      cy.get('#input').type('150050000')
      cy.get('#input')
          .should('have.value', 'R$ 1.500,50000')
      cy.get('p').should('contain', '1500.50000')
  })
  it('Add big integer value', () => {
      cy.get('#input').clear()
      cy.get('#input').type('120000000000000')
      cy.get('#input')
          .should('have.value', 'R$ 1.200.000.000,00000')
      cy.get('p').should('contain', '1200000000.00000')
  })
  it('Add big float value', () => {
      cy.get('#input').clear()
      cy.get('#input').type('350000000060000')
      cy.get('#input')
          .should('have.value', 'R$ 3.500.000.000,60000')
      cy.get('p').should('contain', '3500000000.60000')
  })
  it('Add non number value', () => {
      cy.get('#input').clear()
      cy.get('#input').type('abc')
      cy.get('#input')
          .should('have.value', 'R$ 0,00000')
      cy.get('p').should('contain', '0.00000')
  })
})