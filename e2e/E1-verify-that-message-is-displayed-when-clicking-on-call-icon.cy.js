describe('Verify that [着信がありません] message is displayed when clicking on [Call] icon', () => {
    beforeEach('Login', () => {

      cy.viewport(1366, 768)

      cy.visit('https://prod-dev.svcall.jp')

    //Login      
      cy.get('#username')
        .type(Cypress.env('prrrr_email'));
      cy.get('#password')
        .type(Cypress.env('prrrr_password'));

      cy.get('.cf4658d39 > .c1d51edb7')
        .click()

        cy.wait(2000) 

    })
 
    context('[着信がありません] message is correctly displayed ', () => { 

         it('Clicks Icon and Verify ui', () => {

    //Click Call Icon 
      cy.get('polyline[points="16 2 16 8 22 8"]')
        .click({force: true})

      cy.wait(1000)   

    //'Verify that [着信がありません] message is displayed when clicking on [Call] icon'   
      cy.contains('着信がありません')
        .should('be.visible')

     })
    
    })

  })

