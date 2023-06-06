describe('Verify that Operator/ Team Manager can navigate to [Help] page successfully', () => {
    beforeEach('Login', () => {
      cy.visit('https://prod-dev.svcall.jp')
      
      //login
      cy.get('#username').type(Cypress.env('prrrr_email'));
      cy.get('#password').type(Cypress.env('prrrr_password'));

      cy.get('.cf4658d39 > .c1d51edb7').click()
      cy.wait(3000)

      cy.get('[d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"]')
        .click({force: true})
    })
    
    context('Validate UI and functons', () => { 

         it('Verify the Help UI', () => {

           cy.contains('ログアウト')
             .should('exist')

            })

         it('Verify Help UI can be click', () => {

            cy.get('a[href*="50c7b49aeaef4544a6d3629f0662bc78"]')
              .should('be.visible')
              .click();

          })
  
     })

  })