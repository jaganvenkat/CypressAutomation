/* eslint-disable no-undef */
class DynamicPage{


vistDynamicPage(pagenumber){
    cy.visit("https://the-internet.herokuapp.com/dynamic_loading/"+pagenumber);
}

verifyTitle(title){

    cy.title().should('eq',title)

}

clickStart(){
    cy.get("button").click();
}

verifyWelcomeMessageVisible(message){
        
    cy.get("div[id='finish']").should("include.text",message).should('be.visible')  

}


}

export default DynamicPage