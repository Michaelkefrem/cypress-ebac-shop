/// <reference types="cypress" />
const { faker } = require('@faker-js/faker');

describe('Funcionalidade Pré Cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('Deve completar o pré cadastro com sucesso', () => {
        const email = faker.internet.email()
        const senha = '!teste@teste$'
        const nome = faker.person.firstName()
        const sobrenome = faker.person.lastName()

        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type(senha)
        cy.get('[name="register"]').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nome)
        cy.get('#account_last_name').type(sobrenome)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')

        // Volta em "Detalhes da conta" e confere se os dados foram salvos
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').should('have.value', nome)
        cy.get('#account_last_name').should('have.value', sobrenome)
        cy.get('#account_email').should('have.value', email)
    });
});