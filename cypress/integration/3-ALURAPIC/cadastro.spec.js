describe('Tela Cadastros', () =>{

    beforeEach (() => {
        cy.visit('/')
    })
    it('Verifica Mensagem de Validação', ()=>{

        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
    
        })
        
    it('Verifica mensagem de e-mail inválido', ()=>{
    
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="email"]').type('caio');
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');  
    
        })
    
        it('Verifica mensagem de senha com menos de 8 caracteres', ()=>{
    
            cy.contains('a', 'Register now').click();
            cy.contains('button', 'Register').click();
            cy.get('input[formcontrolname="password"]').type('123');
            cy.contains('button', 'Register').click();
            cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');  
    
            })
    
    it('Verifica mensagem de nome do usuário com menos de 2 caracteres', () => {
            cy.contains('a', 'Register now').click()
            cy.get('input[formcontrolname=userName]').type('C{enter}')
            cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible') 
    
            })
    
    const usuarios = require('../../fixtures/usuarios.json');
    usuarios.forEach(usuario => {
        
    it(`Registra novo usuário ${usuario.userName} `, () => {
            cy.contains('a', 'Register now').click();
            cy.contains('button', 'Register').click();
            cy.get('input[formcontrolname="email"]').type(usuario.email);
            cy.get('input[formcontrolname="fullName"]').type(usuario.fullName);
            cy.get('input[formcontrolname="userName"]').type(usuario.userName);
            cy.get('input[formcontrolname="password"]').type(usuario.password);
            cy.contains('button', 'Register').click();
                })
            })   
})

    