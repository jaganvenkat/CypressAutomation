/// <reference types="Cypress" />

import RocketlaneFilter from '../../pages/rockerlane_taskspage'

describe('rocketlane_assignment2',()=>{

    const rocketlane = new RocketlaneFilter()

    beforeEach(()=>{
        cy.fixture('rocketlane_data2.json').then(function(testdata){
            this.testdata=testdata
        })
        rocketlane.login_to_Rocketlane(Cypress.config().username,Cypress.config().password)
      })


    it('verify assignee filter with different set of users',()=>{

        cy.fixture('rocketlane_data.json').then(testdata => {
        testdata.forEach(data => {

        rocketlane
        
        .visitTasksPage()
        .clickFilter()
        .clickAssigneeDropDown()
        .selectAssignee(data.users)
        .clickFilter()
        .verifyAppliedFiltersCount(data.filterCount)
        .verifyClearButtonVisible()
        .verifyFilteredTasksCount(data.tasksCount)
        .clickClearButton()

        })
    })

})

it('verify search invalid user',function(){

    
    rocketlane
    
    .visitTasksPage()
    .clickFilter()
    .clickAssigneeDropDown()
    .searchAssignee(this.testdata.invaliduser)
    .verifyInavlidUserSearchMessage(this.testdata.noOption)


})

it('verify search user only',function(){


    rocketlane
    
    .visitTasksPage()
    .clickFilter()
    .clickAssigneeDropDown()
    .searchAssignee(this.testdata.usersOnly)
    .verifySearchHeader(this.testdata.usersHeader)


})

it('verify search teams only',function(){


    rocketlane
    
    .visitTasksPage()
    .clickFilter()
    .clickAssigneeDropDown()
    .searchAssignee(this.testdata.teamsOnly)
    .verifySearchHeader(this.testdata.teamsHeader)


})

it.skip('verify other users count when user count is below 3',function(){


    rocketlane
    
    .visitTasksPage()
    .clickFilter()
    .clickAssigneeDropDown()
    .selectAssignee(this.testdata.userstoadd3)
    .clickFilter()
    .clickFilter()
    .verifyOtherUsersCount(3)


})

it.skip('verify other users count when user count is more than 3',function(){


    rocketlane
    
    .visitTasksPage()
    .clickFilter()
    .clickAssigneeDropDown()
    .selectAssignee(this.testdata.moreUsersToadd)
    .clickFilter()
    .clickFilter()
    .clickAssigneeDropDown()
    .verifyOtherUsersCount(4)


})

it.only('verify remove users from filter',function(){


    rocketlane
    
    .visitTasksPage()
    .clickFilter()
    .clickAssigneeDropDown()
    .selectAssignee(this.testdata.moreUsersToadd)
    .clickFilter()
    .clickFilter()
    .clickAssigneeDropDown()
    .removeUsersFromFilter(this.testdata.usersToremove)
    .clickFilter()

})

it('verify add users in existing filter',function(){


    rocketlane
    
    .visitTasksPage()
    .clickFilter()
    .clickAssigneeDropDown()
    .selectAssignee(this.testdata.usersToAdd2)
    .clickFilter()
    .clickFilter()
    .clickAssigneeDropDown()
    .selectAssignee(this.testdata.userstoAddExistingFilter)
    .clickFilter()

})

    
    


})

