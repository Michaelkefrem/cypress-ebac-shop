/// <reference types="cypress" />

describe('Funcionalidade Pagina de produtos', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    })

    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block.grid')
            //.first()
            //.last()
            //.eq(3)
            .contains('Abominable Hoodie')
            .click()
    })

    it('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 10

        cy.get('.product-block.grid')
            .contains('Ajax Full-Zip Sweatshirt').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', `${quantidade} × “Ajax Full-Zip Sweatshirt” foram adicionados no seu carrinho`)
    })
})
