
describe('Verify that admin can update Team successfully', () => {
  beforeEach(() => {
    cy.viewport(1366, 768)
    // Login
    cy.visit('https://admin.prod-dev.svcall.jp/home')
    cy.contains('ログイン').click()
    cy.get('#username').type(Cypress.env('prrrr_admin_email'))
    cy.get('#password').type(Cypress.env('prrrr_password'))
    cy.get('button[type="submit"]')
    .click()
    // Going to specific company in admin
    cy.get(':nth-child(56) > :nth-child(10) > a > .btn')
    .click()
    // Going to Team settings 
    cy.get('.list-unstyled > :nth-child(2) > a')
    .click()
    // Going to edit team settings page
    cy.get(':nth-child(1) > :nth-child(3) > .col-sm-5 > .btn')
    .click()
  })

  context('Update Team name', () => {
    it('Verify UI in edit team settings page',function (){
      // Verify if title text is displayed
      cy.get('.text-center')
      .should('contain','チームの編集')
      // Verify if team name label is displayed
      cy.get('[for=team_name]')
      .should('contain','チーム名')
      // Verify if team name input field is present and have value "Test"
      cy.get('[name="team[name]"]')
      .should('exist')
      .should('have.value','Test')
      // verify cancel button is present
      cy.get('.d-flex > :nth-child(1) > .btn')
       .should('contain', 'キャンセル')
      // verify save button is present
      cy.get(':nth-child(2) > .btn')
       .should('contain', '作成')
    })

    it('Verify validation in edit team settings page',function (){
      // Empty team name
      cy.get('[name="team[name]"]')
      .clear()
      //submit
      cy.contains('作成')
      .click()
      // Verify validation error is displayed
      cy.get('#error_explanation > ul > li')
      .should('contain','チーム名は空欄になっていけません。')
      .should('have.css','color', 'rgb(255, 0, 0)')
    })

    it('Can update team name',function (){
      // Update team name
      cy.get('[name="team[name]"]')
      .type(" Update")
      //submit
      cy.contains('作成')
      .click()
      // Verify if Team name is updated (by adding "Update")
      cy.get('.col-sm-6')
      .should('contain','Test Update')
      // Verify if success banner is present
      cy.get('.alert')
      .should('contain','チームの更新に成功しました。')
      .should('have.css','background-color', 'rgb(209, 231, 221)')
    })
  })

  context('Reset changes made', () => {
    it('Reset',function (){
      // Clear and input back team name "Test"
      cy.get('[name="team[name]"]')
      .clear()
      .type("Test")
      //submit
      cy.contains('作成')
      .click()
      // Verify if Team name is reset back to "Test"
      cy.get('.col-sm-6')
      .should('contain','Test')
      // Verify if success banner is present
      cy.get('.alert')
      .should('contain','チームの更新に成功しました。')
      .should('have.css','background-color', 'rgb(209, 231, 221)')
    })
  })
})


