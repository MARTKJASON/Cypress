import {UserAction} from './UserAction.js'
/// <reference types="cypress" />

describe('Login User Account', () => {
  beforeEach(() => {
    cy.visit('https://prod-dev.svcall.jp/')
})
    it('should logged in', () => {
		const userAction = new UserAction()

		userAction.login()
    
  })
})