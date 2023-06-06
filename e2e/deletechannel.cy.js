describe('Delete Channel', () => {
    it('passes', () => {
      cy.visit('https://prod-dev.svcall.jp')
      
      cy.get('#username').type(Cypress.env('prrrr_email'));
      cy.get('#password').type(Cypress.env('prrrr_password'));
      cy.get('.cf4658d39 > .c1d51edb7').click()
      cy.wait(3000)

      cy.get('tbody > :nth-child(1) > :nth-child(9)').click()
      cy.get('tbody button:nth-child(2)').click({force: true})
      cy.get('.flex.items-center.gap-x-3.relative.justify-end :last-child').click()

    })
  })
  