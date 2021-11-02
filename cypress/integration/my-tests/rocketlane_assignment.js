/// <reference types="Cypress" />
import LoginPage from '../../pages/loginPage.js'
import DynamicPage from '../../pages/dynamicLoadingPage.js'
import InputPage from '../../pages/inputPage.js'

describe('rocketlane_assignment',()=>{

    beforeEach(function(){

        cy.fixture('example').then(function(testdata){
            this.testdata=testdata
        })
    })

    it('test login with valid credential',function(){
        const login=new LoginPage()
        
        login.doBasicAuth(this.testdata.username,this.testdata.password)
        .verifyTitle(this.testdata.title)
        .verifyLoginSuccess(this.testdata.loginsuccess)
        
    })

    


    it('test dynamic loading 1 ',function(){
        
        const dynamic=new DynamicPage()

        dynamic.vistDynamicPage('1')
        dynamic.clickStart()
        dynamic.verifyTitle(this.testdata.title)
        dynamic.verifyWelcomeMessageVisible(this.testdata.welcomemessage)
        
       
         
    })

    it('test dynamic loading 2',function(){
        
        const dynamic=new DynamicPage()

        dynamic.vistDynamicPage('2')
        dynamic.clickStart()
        dynamic.verifyTitle(this.testdata.title)
        dynamic.verifyWelcomeMessageVisible(this.testdata.welcomemessage)
    })

    it('test input can only accept numbers',function(){
        
        const input=new InputPage()

        input.visitInputPage()
        input.verifyTitle(this.testdata.title)
        input.verifyInputType('number')
        
        
        
    })

    it('test drag and drop',()=>{
        
        cy.visit('https://the-internet.herokuapp.com/drag_and_drop')

        cy.get('#column-a')
        .should('have.text','A')
        cy.get('#column-b')
        .should('have.text','B')

        //drag and drop 

        cy.get('#column-a').drag('#column-b')

        cy.get('#column-a')
        .should('have.text','B')
        cy.get('#column-b')
        .should('have.text','A')
        
        
    })


})