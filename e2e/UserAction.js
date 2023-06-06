export class UserAction{
login(){
	//LOGIN CREDENTIALS
	cy.get('[name="username"]').type(Cypress.env('login_email'))
    cy.get('[name="password"]').type(Cypress.env('login_password'))
	//SUBMIT BUTTON TO LOGIN
    cy.get('[name="action"]').click()
}

logout(){
	//PROFILE ICON
	cy.get('#headlessui-menu-button-1').click()
	//LOGOUT BUTTON
	cy.get('button').contains('ログアウト').click()
}
}