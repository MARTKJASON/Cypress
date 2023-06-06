describe('Exercise if else', () => {
  context('Verify of company name is match in company detail page', () => {
    it('Check if match company name', function() {
    // Login
    cy.visit('https://admin.prod-dev.svcall.jp/home')
    cy.contains('ログイン').click()
    cy.get('#username').type(Cypress.env('prrrr_admin_email'))
    cy.get('#password').type(Cypress.env('prrrr_password'))
    cy.get('button[type="submit"]').click()

    // removing extra space when invoke text company name in company lists
    function formatString(text) {
      return text.replace('\u00A0','').trim();
    }
    // get company name
    cy.get(':nth-child(56) > :nth-child(2)')
    .invoke('text')
    .then(formatString)
    .as('companyname')
    cy.get('@companyname').then(name => {
      //going to company detail page
      cy.get(':nth-child(56) > :nth-child(10) > a > .btn').click()
      //get company name in detail page
      cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > p')
      .invoke('text')
      .as('detailname')
      cy.get('@detailname').then(nameinfo => {
        if (nameinfo.includes(name)) {
          cy.log('TRUE')
        }
        else {
          cy.log('FALSE')
        }
      })
    })
    })
  })
})


















       //get company name in left side(detail page)
        // cy.get('.name > a')
        // .invoke('text')
        // .as('detailname')
       // REMOVING element for test to WORK
       //get info name in detail page
        //cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > p > .fw-bold').invoke('remove')