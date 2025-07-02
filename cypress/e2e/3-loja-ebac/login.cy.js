/// <reference types="cypress" />

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('eva@test.com')
        cy.get('#password').type('Eva.2015')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, eva (não é eva? Sair)')
    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('eva@teste.com')
        cy.get('#password').type('Eva.2015')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('exist')
    });

    it('Deve exibir uma mensagem de errro ao inserir senha inválida', () => {
        cy.get('#username').type('eva@test.com')
        cy.get('#password').type('Eva.0000')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('exist')
        cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida para o e-mail eva@test.com está incorreta. Perdeu a senha?')
    });
})