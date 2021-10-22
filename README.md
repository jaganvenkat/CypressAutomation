# CypressAutomation

 Project overview
 ----------------
 
 Testing framework - Mocha
  
  cypress
    1) fixtures - To store test data
    2) integration\my-tests - to write test cases
    3) pages - Contains page class
    4) plugins
    5) reports - test reports
    6) screenshots - screen shot taken upon faulures
    7) videos - video of test execution
    

 Choices made
 ------------
 
 1) Added cutom report using mochawesome
 2) Added page calssed under pages folder 
 

How to run in your laptop ?
------------------------

Install Cypress :
  npx cypress install --force

How to run testcases using cypress test runner?

1) Open Cypress test runner using below
       .\node_modules\.bin\cypress open
   This will populate Cypress test runner and shows you all test specs with play button
2) Click on play button, it will start running tests against chrome browser.


How to run testcases in cmd?

1) .\node_modules\.bin\cypress run --spec .\cypress\integration\my-tests\rocketlane_assignment.js --browser <browsername>

 
    
