describe('Verify that [着信がありません] message is displayed when clicking on [Call] icon', () => {
    beforeEach('Login', () => {

      cy.viewport(1366, 768)

      cy.visit('https://admin.prod-dev.svcall.jp/home')

      cy.get('[href="/login"]').click()

    //Login      
      cy.get('[name="username"]')
        .type(Cypress.env('prrrr_admin_email'));
      cy.get('[name="password"]')
        .type(Cypress.env('prrrr_password'));

        cy.get('[name="action"]')
        .click()

    })
        
    it('should match', () => {
    // Removes the empty Spaces     
      function removeSpaces(text) {
            return text.replace('\u00A0','').trim();
          }
    //Get the company Name
        cy.get(':nth-child(56) > :nth-child(2)')
            .invoke('text')
            .then(removeSpaces)
            .as('testCompanyName')
    //Create variable     
        cy.get('@testCompanyName').then(testCompanyName => {
    //Click [i] icon to access company detail page
        cy.get(':nth-child(56) > :nth-child(10) > a > .btn')
          .click()
    //Get the company name    
        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > p')
          .invoke('text')
          .as('companyName') 
    //Create variable                 
        cy.get('@companyName').then(companyName => {

            if(companyName.includes(testCompanyName)) {
                cy.log('true')   
            }
            else{
                cy.log('false')
            }          
               
        })

    })  
              
 })
         
              
     
  
           
         
           
  
       


    })




