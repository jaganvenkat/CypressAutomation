/* eslint-disable no-undef */
/// <reference types="Cypress" />

class LoginPage{


    doBasicAuth(username,password){
    
        cy.visit('https://'+username+':'+password+'@the-internet.herokuapp.com/basic_auth')
    }

    verifyLoginSuccess(message){

        cy.get("p").should("include.text",message);
        
    }

    verifyTitle(title){

        cy.title().should('eq',title)

    }
    
    
    }

    export default LoginPage