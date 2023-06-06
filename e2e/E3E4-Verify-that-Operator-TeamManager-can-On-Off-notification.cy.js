describe('Verify that Operator/ Team Manager can hear volume when customer is calling  - On - off notification', () => {
    beforeEach('Can Turn on notif', () => {

      cy.viewport(1366, 768)
      cy.visit('https://prod-dev.svcall.jp')   
      cy.get('#username').type(Cypress.env('prrrr_email'));
      cy.get('#password').type(Cypress.env('prrrr_password'));
      cy.get('.cf4658d39 > .c1d51edb7').click()
      cy.wait(3000)
    })
    
  context('User can Turn on and off notification ', function() {

       it('Can Turn On / off notification', function() {
         //Click Icon to turn ON
         cy.get('[d="M13.73 21a2 2 0 0 1-3.46 0"]')
           .click({force: true})

        })

       it('Can Turn Off / on notification', () => {
          //Click Icon to Turn Off
         cy.get('[d="M13.73 21a2 2 0 0 1-3.46 0"]')
           .click({force: true})

         })

 })

})