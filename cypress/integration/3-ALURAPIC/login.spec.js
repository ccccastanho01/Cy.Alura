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
/* describe('Login de ususarios alura pic', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.intercept('POST', 'https://apialurapic.herokuapp.com/user/login', { statusCode: 400 }).as('stubPost')
    })

    it.only('Login válido', () => {
        cy.login(Cypress.env('username'), Cypress.env('password'));
        cy.wait('@stubPost')
        cy.contains('a', '(Logout)').should('be.visible');
    })

    it('Login inválido', () => {
        cy.login('Gertrudes', '1267');
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password');
        });
    });
}) */