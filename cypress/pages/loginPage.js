/* eslint-disable no-undef */
/// <reference types="Cypress" />

class LoginPage{


    doBasicAuth(username,password){
    
        cy.visit('https://'+username+':'+password+'@the-internet.herokuapp.com/basic_auth')

        return this
    }

    verifyLoginSuccess(message){

        cy.get("p").should("include.text",message);
        return this
    }

    verifyTitle(title){

        cy.verifytitle(title)
        return this

    }
    
    
    }

    export default LoginPage