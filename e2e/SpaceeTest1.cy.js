describe('Breadcrumb Test ', () => {
  beforeEach(() => {
    cy.viewport(1366, 768)

  })

  it('TOP', () => {

    cy.visit('https://dev-room-d4l5i7eivj68.spacee.jp/search')
    cy.get('.breadcrumb')
      .contains('Home').should('exist')
    cy.get('.breadcrumb')
      .contains('全国').should('exist')


  })	
  it('route', () => {

    cy.visit('https://dev-room-d4l5i7eivj68.spacee.jp/lines/11302/listings')
    cy.get('.breadcrumb')
      .contains('Home').should('exist')
    cy.get('.breadcrumb')
      .contains('全国').should('exist')
      cy.get('.breadcrumb')
      .contains('都道府県から探す').should('exist')
    cy.get('.breadcrumb')
      .contains('沿線から探す').should('exist')
      cy.get('.breadcrumb')
      .contains('JR山手線').should('exist')  


  })	
  // it('Route + facility', () => {

  //   cy.visit('https://dev-room-d4l5i7eivj68.spacee.jp/lines/11302/listings?equipment_id%5B%5D=7')
  //   cy.get('.breadcrumb')
  //     .contains('Home').should('exist')
  //   cy.get('.breadcrumb')
  //     .contains('全国').should('exist')
  //     cy.get('.breadcrumb')
  //     .contains('都道府県から探す').should('exist')
  //   cy.get('.breadcrumb')
  //     .contains('沿線から探す').should('exist')
  //     cy.get('.breadcrumb')
  //     .contains('JR山手線').should('exist')  


  // })	
    

})