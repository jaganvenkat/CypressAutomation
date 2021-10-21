/* eslint-disable no-undef */
/// <reference types="Cypress" />

class InputPage{

    visitInputPage(){

        cy.visit("https://the-internet.herokuapp.com/inputs");
    }

    verifyInputType(type){

        cy.get("input").should('have.attr','type')
        .and('eq',type)
    }

    verifyTitle(title){

        cy.title().should('eq',title)

    }

}

export default InputPage