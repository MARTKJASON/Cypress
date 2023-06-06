describe('Verify that Operator/ Team Manager can navigate to [Manual] page successfully', () => {
    beforeEach('Login', () => {
      cy.visit('https://prod-dev.svcall.jp')
      
      //Login
      cy.get('#username').type(Cypress.env('prrrr_email'));
      cy.get('#password').type(Cypress.env('prrrr_password'));

      cy.get('.cf4658d39 > .c1d51edb7').click()
      cy.wait(3000)

      cy.get('[d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"]')
        .click({force: true})
    })
    
    context('Validate UI and functons', () => { 
    
     //Verify that Ui
       it('Verify the UI', function() {
      
         cy.contains('マニュアル')
           .should('exist')

      })

       it('Verify if the Manual button can be click', function() {

    //  Verify functionality of the the UI
        cy.get('a[href*="bdda65632ada42d8b07a7ccf7a3ec3d9"]')
          .should('not.be.disabled')
          .click()

       })

     })
    
  })