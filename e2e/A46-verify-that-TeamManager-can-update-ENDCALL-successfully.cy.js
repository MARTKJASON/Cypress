describe('Verify that Team Manager can update End Call successfully', () => {
  beforeEach('Login', () => {
    cy.viewport(1366, 768)
    cy.visit('https://prod-dev.svcall.jp')  
  //login    
    cy.get('#username').type(Cypress.env('prrrr_email'));
    cy.get('#password').type(Cypress.env('prrrr_password'));
    cy.get('[name="action"]')
      .click()
      .wait(3000)
    //Click drop down icon (beside Team Name)
    cy.get('#headlessui-menu-button-2 > .flex')
      .click()
    //Click Setting  
    cy.get('ul > li ')
      .click()
    //Click End Call Tab 
    cy.contains('通話終了')
      .click()
    //Check the Show Button
    cy.get('[type="checkbox"]')
      .check({force: true})
  })

  context('Test with show button & link button - Test with 3 questions survey - Text maximum characters', () => {

    it('-Test The End call setup UI ', function() {
    //Verify the END CALL tab UI
      cy.contains('通話終了')
        .should('exist')
    //Verify That リンクボタン (link button)  is correctly displayed. 
      cy.contains('リンクボタン')
        .should('exist')
    //Verify That   通話終了した際の説明を設定します。 (Set the explanation when the call ends.) is correctly displayed. 
      cy.contains('通話終了した際の説明を設定します。')   
        .should('exist')
    //Verify that リンクボタンを表示  is correctly displayed.  (Show link button )
      cy.get('.ml-2')
        .should('contain', 'リンクボタンを表示')  
    //Verify that リンクボタンの説明（最大40文字）(Link button description (maximum 40 characters)) is correctly displayed 
      cy.contains('リンクボタンの説明（最大40文字）')
        .should('exist')
    //Verify that リンクボタン説明を入力する (Enter link button description) exist in  Link button  
      cy.get('[name="button_end_content"]')
        .invoke('attr', 'placeholder')
        .should('contain', 'リンクボタン説明を入力する')
    //Verify that リンクボタンのラベル (link button label) is correctly displayed   
      cy.contains('リンクボタンのラベル')
        .should('exist')
    // Verify that ラベルを入力する (enter a label) exist in Link Button Label   
      cy.get('[name="button_end_label"]')
        .invoke('attr', 'placeholder')
        .should('contain', 'ラベルを入力する')
    //Verify that リンクのURL (URL of the link)  is correctly displayed     
      cy.contains('リンクのURL')
        .should('exist')  
    //Verify that https:// exist in リンクのURL  
      cy.get('[name="button_end_url"]')
        .invoke('attr', 'placeholder')
        .should('contain','https://')
    //Verify that アンケート項目　※全くそう思わない 〜 とてもそう思う の5段階評価 is correctly displayed (Questionnaire items *Rated on a 5-point scale from Strongly Disagree to Strongly Agree)
      cy.get(':nth-child(6) > .font-normal') 
        .should('contain', 'アンケート項目　※全くそう思わない 〜 とてもそう思う の5段階評価')
        .should('exist') 
    //Verify that アンケート項目１を入力する  (Enter Questionnaire Item 1) is exist in Question 1   
      cy.get('[name="question_1"]')
        .invoke('attr', 'placeholder')
        .should('contain', 'アンケート項目１を入力する')
    //Verify that アンケート項目２を入力する  (Enter Questionnaire Item 2) is exist in Question 2  
      cy.get('[name="question_2"]') 
        .invoke('attr', 'placeholder')
        .should('contain', 'アンケート項目２を入力する')
    //Verify that Question 3 is view only / disabled
      cy.get('[name="question_3"]')  
        .should('be.disabled')
    //Verify that ありがとうございました  (thank you very much) is displayed correctly   
      cy.contains('ありがとうございました')
        .should('exist')
    //Verify if メッセージログを表示  (Show message log)   is correctly displayed 
      cy.contains('メッセージログを表示')
        .should('exist')

    })


    it('-Test the maximum characters', () => {

      const inputField = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ae';
        //Link button description (maximum 40 characters)
      cy.get('[name="button_end_content"]')     
        .type(inputField)
        .invoke('val')                         // change subject to input's value
        .should('have.length', 40);            // assert the length property is 40  
        //link button label
      cy.get('[name="button_end_label"]')     
        .type(inputField)
        .invoke('val')                         // change subject to input's value
        .should('have.length', 20);            // assert the length property is 20  
      //Questionnaire items *Rated on a 5-point scale from Strongly Disagree to Strongly Agree   
      cy.get('[name="question_1"]')            
        .type(inputField)
        .invoke('val')                         // change subject to input's value
        .should('have.length', 30);            // assert the length property is 30  
      //Question 2   
      cy.get('[name="question_2"]')           
        .type(inputField)
        .invoke('val')                         // change subject to input's value
        .should('have.length', 30);            // assert the length property is 30  


      })

    it('-Test Input Field if showlink button is unchecked', () => {
    //Uncheck the Show Button Checkbox
      cy.get('[type="checkbox"]')
        .uncheck({force: true}) 
    //Verify if the input box of Link button Description is disabled
      cy.get('[name="button_end_content"]')
        .should('be.disabled') 
    //Verify if the input box of Link button Label is disabled     
      cy.get('[name="button_end_label"]')
        .should('be.disabled') 
    //Verify if the input box of Link button Label is disabled     
      cy.get('[name="button_end_url"]')
        .should('be.disabled')     
    //Verify if the Question 1 is not disabled
      cy.get('[name="question_1"]')
        .should('not.be.disabled')       
    //Verify if the Question 2 is not disabled
      cy.get('[name="question_2"]')
        .should('not.be.disabled')   
    //Verify if the Question 3 is still disabled
      cy.get('[name="question_3"]')
        .should('be.disabled')   
    //Verify if  ありがとうございました (thank you very much) is displayed correctly
      cy.contains('ありがとうございました')
        .should('exist')

      })

      it('-Test The End call setup functions', function() {
        //Type link button
        cy.get('[name="button_end_content"]')
          .clear()
          .type('My test Link Btn')
        //Verify that The Link button (My test Link Btn) is the same in the preview
        cy.get('.whitespace-pre-wrap')
          .should('contain', 'My test Link Btn')    
        // Type link button label
        cy.get('[name="button_end_label"]')
          .clear()
          .type('Link button Label')  
        //Verify that link button label (Link button Label) is the same in the preview  
        cy.get('.line-clamp-2')
          .should('contain', 'Link button Label')
        // Type the Link URL
        cy.get('[name="button_end_url"]')
          .clear()
          .type('Google.com')
        //type Question 1
        cy.get('[name="question_1"]')
          .clear()
          .type('This is 30 a characters Lorem?')
        //type Question 2
        cy.get('[name="question_2"]')
          .clear()
          .type('Question test 2?')
        //Click ubmit
        cy.get('button[type="submit"]')
          .click() 
        cy.wait(1000)
        //Verify the 保存しました。 (Saved.) will pop up after saving  
        cy.get('.Toastify')
          .contains('保存しました。')
          .should('exist')

      })

  })

  
})


