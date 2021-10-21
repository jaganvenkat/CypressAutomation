/// <reference types="Cypress" />
import LoginPage from '../../pages/loginPage.js'
import DynamicPage from '../../pages/dynamicLoadingPage.js'
import InputPage from '../../pages/inputPage.js'

describe('rocketlane_assignment',()=>{

    

    it('test login with valid credential',()=>{
        const login=new LoginPage()
        
        login.doBasicAuth('admin','admin')
        login.verifyTitle('The Internet')
        login.verifyLoginSuccess('Congratulations! You must have the proper credentials.')
        
    })

    it('test dynamic loading 1 ',()=>{
        
        const dynamic=new DynamicPage()

        dynamic.vistDynamicPage('1')
        dynamic.clickStart()
        dynamic.verifyTitle('The Internet')
        dynamic.verifyWelcomeMessageVisible('Hello World!')
        
       
         
    })

    it('test dynamic loading 2',()=>{
        
        const dynamic=new DynamicPage()

        dynamic.vistDynamicPage('2')
        dynamic.clickStart()
        dynamic.verifyTitle('The Internet')
        dynamic.verifyWelcomeMessageVisible('Hello World!')
    })

    it('test input can only accept numbers',()=>{
        
        const input=new InputPage()

        input.visitInputPage()
        input.verifyTitle('The Internet')
        input.verifyInputType('number')
        
        
        
    })


})