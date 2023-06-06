import {UserAction} from './UserAction.js'

/// <reference types="cypress" />



describe('Logout User Account',()=>{
	before(()=>{
		cy.visit('https://prod-dev.svcall.jp/')
	})

	it('should logged in', () => {
    	const userAction = new UserAction()
		userAction.login()
		cy.wait(1000)
		userAction.logout()
  	})	
})


















