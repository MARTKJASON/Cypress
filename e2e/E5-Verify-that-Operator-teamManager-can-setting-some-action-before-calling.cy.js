describe('Verify that Operator/ Team Manager can setting some actions before calling - mic - audio - video', () => {
    beforeEach('Login', () => {
      
      cy.viewport(1366, 768)
      cy.visit('https://prod-dev.svcall.jp')
        
    //login
      cy.get('#username').type(Cypress.env('prrrr_email'));
      cy.get('#password').type(Cypress.env('prrrr_password'));
      cy.get('.cf4658d39 > .c1d51edb7').click()
      cy.wait(3000)

     // Click setting icon
      cy.get('[d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"]')
        .click({force:true})


    })
    
context('validate UI and Functionality', function() {
  


    it('Operator/ Team Manager can setting some actions before calling', function() {


      //Select mic 
      cy.get('select')
       .eq(0)
       .select('Fake Audio Input 1') 

      cy.wait(2000)

      //Select mic  
      cy.get('select')
       .eq(0)
       .select('Fake Default Audio Input')
      
      
     // mic test - record - play
    // Verify that button is clickable
     cy.get('button > span')
       .contains('マイクのテスト')
       .click()
       .click()
       .should('not.be.disabled')
    
     cy.wait(9000)

     // Verify that audio button is not disabled
     cy.get('button > span')
       .contains('再生中')
       .click()
       .should('not.be.disabled')
     
    
    
    //Test Audio
    cy.get('button > span')
      .contains('スピーカーのテスト')
      .click()

    // Verify that Speaker Test button is not disabled
      .should('not.be.disabled')

    cy.wait(2000)

    // Click Video tab
    cy.get('button')
      .contains('ビデオ')
      .click()
    
    //check  HIGH RESOLUTION
    cy.get('[type="checkbox"]')
      .check('高解像度')
       .should('be.checked')

    cy.wait(2000)
    
    //uncheck  HIGH RESOLUTION
    cy.get('[type="checkbox"]')
      .uncheck('高解像度')
      .should('not.be.checked')
    
    
     // CHECK MIRROR MY VIDEO 
    cy.get('[type="checkbox"]')
      .uncheck('マイビデオをミラーリング')
      .should('not.be.checked')

    cy.wait(2000)

     // UNCHECK MIRROR MY VIDEO 
    cy.get('[type="checkbox"]')
      .check('マイビデオをミラーリング')
      .should('be.checked')

       })

    })

  })