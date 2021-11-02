import { wait } from "@testing-library/dom"

/* eslint-disable no-undef */
class RocketlaneFilter{

 username_locator='#okta-signin-username'
 password_locator='#okta-signin-password'
 sigin_locator='#okta-signin-submit'
 pagetitle_locator='[data-cy="page.header.title.text"]'
 filter_locator='[data-cy="buttons.filter-button"]'
 assigneedropdown_locator='[data-cy="criteria.assignee.select"]'
 assigneeName_locator='[class=ant-list-item-meta-title]'
 noOptions_locator='.ozone-select__menu-notice'
 search_locator='.ozone-select__value-container'
 users_locator = '#react-select-2-group-0-heading'
 teams_locator = '#react-select-2-group-1-heading'
 otherusers_locator ='span[class="ant-tag ant-tag-default sc-hUhoKJ sc-hQyJzu xDlYq hMUsQc"]'
 selectuser_locator='[data-cy="criteria.assignee.select"]'
 

login_to_Rocketlane(username,password){
    cy.visit('/')
    cy.get(this.username_locator).type(username)
    cy.get(this.password_locator).type(password)
    cy.get(this.sigin_locator).click()
    cy.get(this.pagetitle_locator)

    return this
}

visitTasksPage(){
    cy.visit('tasks')
    return this
}

clickFilter(){

    cy.get(this.filter_locator).click()
    cy.wait(3000)
    return this

}

clickAssigneeDropDown(){
    cy.get(this.assigneedropdown_locator).click()

    return this
}

selectAssignee(assignee){
    cy.wrap(assignee).each((value) => {
        
        cy.contains(this.assigneeName_locator, new RegExp("^" + value + "$")).should('have.text', value).click()
    })
    

    return this

}



searchAssignee(assignee){
    cy.wrap(assignee).each((value) => {
    cy.get(this.search_locator).type(value)
})
    

    return this

}

verifyAppliedFiltersCount(count){
        
    cy.get(this.filter_locator).should('have.text',count+' filter')

    return this

}

verifyClearButtonVisible(){

    cy.wait(3000)    
    cy.contains('span',/^clear$/).should('have.text','clear')

    return this

}

clickClearButton(){

        
    cy.contains('span',/^clear$/).should('have.text','clear').click()

    return this

}

verifyFilteredTasksCount(count){
        
    cy.wait(3000)
    if(count==='1'){
        cy.get("div[class='ag-pinned-left-cols-container']").children('div').should('have.length',count)
        cy.get('[data-cy="task-grid.status-panel.tasks"]').should('have.text',count+' task')
    }else if(count==='0'){
        cy.get("div[class='ag-pinned-left-cols-container']").children('div').should('have.length','0')
        cy.get("div.sc-gqsUOu>div:nth-child(1)").should('have.text','No results found in any project').and('be.visible')
        cy.get('[data-cy="task-grid.status-panel.tasks"]').should('have.text','No tasks')
    }else{
        cy.get("div[class='ag-pinned-left-cols-container']").children('div').should('have.length',count)
        cy.get('[data-cy="task-grid.status-panel.tasks"]').should('have.text',count+' tasks')
    }
   

    return this

}


verifyInavlidUserSearchMessage(message){
    cy.get(this.noOptions_locator).should('have.text',message)
    return this
}

verifyOtherUsersCount(count){
    if(count<=3){
        count=count-2
        cy.get(this.otherusers_locator).should('be.visible').and('have.text','+ '+count+' other')
    }
    else if(count>3){

        count=count-2
        cy.get(this.otherusers_locator).should('be.visible').and('have.text','+ '+count+' others')
    }
    
    return this
}

verifySearchHeader(header){
    if(header==='Users'){
        cy.get(this.users_locator).should('have.text',header)
        cy.get(this.teams_locator).should('not.exist')
    }else if(header==='Teams'){
        cy.get(this.teams_locator).should('have.text',header)
        cy.get(this.users_locator).should('not.exist')
    }
    
    return this
}


removeUsersFromFilter(assignee){
    cy.wrap(assignee).each((value) => {
        
        cy.contains(this.assigneeName_locator, new RegExp("^" + value + "$")).should('have.text', value).click()
    })

    return this
}


}

export default RocketlaneFilter