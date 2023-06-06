
describe('Verify that admin can update Company successfully', () => {
  beforeEach(() => {
    cy.viewport(1366, 768)
    // Login
    cy.visit('https://admin.prod-dev.svcall.jp/home')
    cy.contains('ログイン').click()
    cy.get('#username').type(Cypress.env('prrrr_admin_email'))
    cy.get('#password').type(Cypress.env('prrrr_password'))
    cy.get('button[type="submit"]').click()
    // Going to specific company in admin edit page
    cy.get(':nth-child(56) > :nth-child(11) > .col-sm-5 > .btn').click()
  })
  context('Company edit', () => {
    it('Verify if Company edit UI is displayed',function (){
      //Verify if Company edit UI title text is displayed
      cy.get('h1[class="text-center"]')
        .should('contain','カンパニー編集')

      //Verify if Company name label text is displayed
      cy.get('[for="company_カンパニー名"]')
        .should('contain','カンパニー名')
      // Verify if input field for company name exist and have value "Test Roman"
      cy.get('[name="company[name]"]')
        .should('exist')
        .should('have.value','Test Roman')

      // verify language radio button if present
       // JP is selected
      cy.get('[id="company_locale_ja"]')
        .should('exist')
        .should('be.checked')
      cy.get('[id="company_locale_en"]')
        .should('exist')
        .should('not.be.checked')

      // verify company seats label text is displayed
      cy.get('[for="company_Seats数"]')
        .should('contain', 'Seats数')
      // verify company seats field is present and have value "10"
      cy.get('[name="company[seat]"]')
        .should('exist')
        .should('have.value','10')

      // verify company manager label text is displayed
      cy.get('[for="company_担当者"]')
        .should('contain', '担当者')
      // verify company manager field is present and have value "Roman"
      cy.get('[name="company[pic]"]')
        .should('exist')
        .should('have.value','Roman')

      // verify company email label text is displayed
      cy.get('[for="company_メールアドレス"]')
      // verify company email field is present and have value "roman.duetes@sun-asterisk.com"
        .should('contain', 'メールアドレス')
      cy.get('[name="company[email]"]')
        .should('exist')
        .should('have.value','roman.duetes@sun-asterisk.com')

      // verify number lmit field label text is displayed
      cy.get('[for="company_チャンネル数"]')
        .should('contain', 'チャンネル数')
      // verify number limit field is present and have value "20"
      cy.get('[name="company[limit_channel]"]')
        .should('exist')
        .should('have.value','20')

      // verify 2FA radio label text is displayed
      cy.get('[for="company_二段階認証設定有効"]')
        .should('contain', '二段階認証設定有効')
      // verify 2FA radio button is present and 2FA is OFF
      cy.get('[id="company_require_2fa_false"]')
        .should('exist')
        .should('be.checked')
      cy.get('[id="company_require_2fa_true"]')
       .should('exist')
        .should('not.be.checked')

      // verify chat setting label text is displayed
      cy.get('[for="company_チャット設定有効"]')
        .should('contain', 'チャット設定有効')
      // verify chat setting field is present and set to OFF
      cy.get('[id="company_enable_chat_false"]')
       .should('exist')
       .should('be.checked')
      cy.get('[id="company_enable_chat_true"]')
       .should('exist')
       .should('not.be.checked')

      // verify chatwoot label is displayed
      cy.get('[for="company_chatwootウェブのトークン"]')
       .should('contain', 'Chatwootウェブのトークン')
      // verify chatwoot is disabled
      cy.get('[name="company[chatwoot_web_token]"]')
       .should('be.disabled')

      // verify radio internal label text is displayed
      cy.get('[for="company_内部"]')
       .should('contain', '内部')
      // verify radio internal is present and set to ON
      cy.get('[id="company_is_internal_false"]')
       .should('exist')
       .should('not.be.checked')
      cy.get('[id="company_is_internal_true"]')
       .should('exist')
       .should('be.checked')

      // verify cancel button is present
      cy.get('.d-flex > :nth-child(1) > .btn')
       .should('contain', 'キャンセル')
      // verify save button is present
      cy.get(':nth-child(2) > .btn')
       .should('contain', '保存')
    })

    it('Can update',function (){
      
      // Update Company name 
      cy.get('[name="company[name]"]')
        .type(" Update")
      // Update Company language
      cy.get('[type="radio"]')
        .check('en')
      // Update company seat
      cy.get('[name="company[seat]"]')
        .clear()
        .type("15")
      // Update Company manager name
      cy.get('[name="company[pic]"]')
        .type(" Update")
      // Update company email
      cy.get('[name="company[email]"]')
        .clear()
        .type("roman.duetes+22@sun-asterisk.com")
      // Update company limit channel
      cy.get('[name="company[limit_channel]"]')
        .clear()
        .type("25")

      // Update and enable 2FA for company
      cy.get('[id="company_require_2fa_true"]')
        .check()

      // Update chatwoot and input chatwoot token
      cy.get('[id="company_enable_chat_true"]')
        .check()
      cy.get('[name="company[chatwoot_web_token]"]')
        .type("K243LUwcj64EHewmaMuAUVAi")

       // Update and OFF radio internal for company
       cy.get('[id="company_is_internal_false"]')
       .check()

      //submit
       cy.contains('保存').click()


      // Verify if success banner is present
      cy.get('.alert')
      .should('contain','会社の更新に成功しました。')
      .should('have.css','background-color', 'rgb(209, 231, 221)')
      // Verify if "Test Roman Update" is set for company name
      cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > p')
      .should('contain','Test Roman Update')
      // Verify if "Roman Update" is set for contact name
      cy.get(':nth-child(1) > :nth-child(2) > p')
      .should('contain','Roman Update')
      // Verify if Chat is set to ON
      cy.get(':nth-child(2) > .col-sm-4 > div > p')
      .should('contain','ON')
      // Verify if Chatwoot is set to "K243LUwcj64EHewmaMuAUVAi"
      cy.get('.col-sm-8 > div > p')
      .should('contain','K243LUwcj64EHewmaMuAUVAi')
      // Verify if 2FA is set to ON
      cy.get(':nth-child(3) > div > p')
      .should('contain','ON')
    })
  })

  context('Reset changes made', () => {
    it('Reset',function (){
      // Clear and input back "Test Roman"
      cy.get('[name="company[name]"]')
      .clear()
      .type('Test Roman')

      // Set back language to JP
      cy.get('[type="radio"]')
      .check('ja')

      // Set back company seat number to "10"
      cy.get('[name="company[seat]"]')
        .clear()
        .type("10")

      // Clear and input back "Roman"
      cy.get('input[name="company[pic]"]')
        .clear()
        .type("Roman")

      // Set back company email to "roman.duetes@sun-asterisk.com"
      cy.get('[name="company[email]"]')
        .clear()
        .type("roman.duetes@sun-asterisk.com")

      // Set back company limit channel to "20"
      cy.get('[name="company[limit_channel]"]')
        .clear()
        .type("20")
      
      // Set back 2FA to Disable or OFF
      cy.get('[id="company_require_2fa_false"]')
        .check()

      // Set back chatwoot to OFF
      cy.get('[id="company_enable_chat_false"]')
        .check()

      // Set back internal to ON
       cy.get('[id="company_is_internal_true"]')
       .check()

      //submit
      cy.contains('保存').click()

      // Verify if success banner is present
      cy.get('.alert')
      .should('contain','会社の更新に成功しました。')
      .should('have.css','background-color', 'rgb(209, 231, 221)')
      // Verify if reset to "Test Roman" for company name
      cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > p')
      .should('contain','Test Roman')
      // Verify if reset to "Roman" contact name
      cy.get(':nth-child(1) > :nth-child(2) > p')
      .should('contain','Roman')
      // Verify if Chat is reset to OFF
      cy.get(':nth-child(2) > .col-sm-4 > div > p')
      .should('contain','OFF')
      // Verify if 2FA is reset to OFF
      cy.get(':nth-child(3) > div > p')
      .should('contain','OFF')
    })
  })
  
})


