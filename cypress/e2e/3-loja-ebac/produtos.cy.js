/// <reference types="cypress" />

import { faker } from '@faker-js/faker'

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
            cy.get('.block-inner')
                // .first()
                // .last()
                .eq(2)
                .click()
    });

    it('Deve selecionar um produto da lista - Usando o Nome', () => {
        cy.get('.products > .row').contains('Argus').click()

        cy.get('#tab-title-description > a').should('contain', 'Descrição')
});

})