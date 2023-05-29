describe('Executa Login', () =>{

    beforeEach (() => {
        cy.visit('https://alura-fotos.herokuapp.com')      
    })    
it('Faz login com sucesso', () => {
    cy.login(Cypress.env('username'), Cypress.env('password'));
    cy.contains('a', '(Logout').should('be.visible');
})
it('Login inválido', () => {
cy.login('caio', '1234');
cy.on ('window.alert', (str) => {
expect(str).to.equal('Invalid user name or password')
})
})
})