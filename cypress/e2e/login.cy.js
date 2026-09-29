// /// <reference types="cypress" /> 

// context('Funcionalide Login', () =>{
    
//     it('Deve fazer login',() =>{
//         cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
//         cy.get('[name="username"]').type ('aluno_ebac@teste.com') 
//        cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type ('teste@teste.com')
//        cy.get('[name="login"]').click
       
//     })

//     it ('deve exibir uma mensagem de erro ao inserir usarário ou senha invalido',() =>{})
// })

/// <reference types="cypress" />

context('Funcionalidade Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    })

    afterEach(() => {
        cy.screenshot()
    })

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('[name="login"]').click()

        cy.get('.woocommerce-MyAccount-content').should('contain', 'Olá')
    })

    it('Deve exibir mensagem de erro de senha inválida', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('senha_errada')
        cy.get('[name="login"]').click()

        cy.get('.woocommerce-error').should('contain', 'está incorreta')
    })

    it('Deve exibir mensagem de erro de usuário inválido', () => {
        cy.get('#username').type('email errado')
        cy.get('#password').type('teste@teste.com')
        cy.get('[name="login"]').click()

        cy.get('.woocommerce-error').should('contain', 'não está registrado neste site')
    })
})