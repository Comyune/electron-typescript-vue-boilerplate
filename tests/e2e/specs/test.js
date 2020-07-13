// https://docs.cypress.io/api/introduction/api.html

describe('Basic rendering', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'SeeWhy')
  })
})
