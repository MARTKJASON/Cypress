describe('Login and Logout Page ', () => {
    it('passes', () => {
      cy.visit('https://prod-dev.svcall.jp')
      
      cy.get('#username').type(Cypress.env('prrrr_email'));
      cy.get('#password').type(Cypress.env('prrrr_password'));
      cy.get('.cf4658d39 > .c1d51edb7').click()
      cy.wait(3000)

      // cy.get(':nth-child(1) > .text-left.truncate').click()
      // cy.wait(3000) 
      // cy.get('button[type="button"] div[class="flex items-center"]').click()
      // cy.get('#headlessui-menu-items-27').contains('チャンネル設定').click()
      // cy.wait(3000)
      // cy.get('button[type="submit"]').click()



      function getAns() {
        return Math.floor(Math.random() );
      }
      if(getAns() == 1){
        console.log("TRUE")
      }else{
        console.log("FALSE")
      }

    })
  })
  