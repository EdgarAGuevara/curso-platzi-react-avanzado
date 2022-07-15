/* global describe,it,cy */

describe('Petgram', () => {
  it('para ver si funciona', () => {
    cy.visit('/')
  })

  it('navegamos a una categoria y vemos fotos', () => {
    cy.visit('/pet/1')
    cy.get('article')
  })

  it('Si podemos navegar con la navbar a la home', () => {
    cy.visit('/pet/1')
    cy.get('nav a').first().click()
    cy.url().should('include', '/')
  })

  it('Los usuarios no registrados ven el formulario de registro e inicio de sesion al ir a favs', () => {
    cy.visit('/favs')
    cy.get('form').should('have.length', 2)
  })
})
