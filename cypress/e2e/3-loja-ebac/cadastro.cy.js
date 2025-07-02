/// <reference types="cypress" />

import { faker } from '@faker-js/faker'

describe('Funcionalidade: Cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });


    it('Não pode permitir cadastrar usuário já cadastrado', () => {
        cy.get('#reg_email').type('eva@test.com')
        cy.get('#reg_password').type('Eva.2015')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'Erro: Uma conta já está registrada com seu endereço de e-mail. Faça login.')
    });

    it('Deve completar o cadastro com sucesso', () => {
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type('Eva.2015')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.person.firstName())
        cy.get('#account_last_name').type(faker.person.lastName())

        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('exist')
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });


    it('Deve completar o cadastro com sucesso - usando variáveis', () => {
        var nome = faker.person.firstName()
        var email = faker.internet.email(nome)
        var sobrenome = faker.person.lastName()

        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type('Eva.2015')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nome)
        cy.get('#account_last_name').type(sobrenome)

        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('exist')
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });




});