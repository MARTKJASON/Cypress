describe('Verify that Operator/ Team Manager can logout successfully', () => {
    beforeEach('Can logout successfully', () => {
      cy.visit('https://prod-dev.svcall.jp')
      
      //Login
      cy.get('#username').type(Cypress.env('prrrr_email'));
      cy.get('#password').type(Cypress.env('prrrr_password'));

      cy.get('.cf4658d39 > .c1d51edb7').click()
      cy.wait(3000)
     
      //Click profile Icon
       cy.get('[d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"]')
         .click({force: true})
       
       cy.wait(2000)
    })

   context('Validate UI and functons', () => { 

        it('Verify the Logout ui', () => {
          //verify Ui
           cy.contains('ログアウト')
             .should('exist')

        })

         it('Verify that Logout can be click' , () => {
         //Click Logout
            cy.get('button')
              .contains('ログアウト')
              .click()
      
         })

     })
   
  })