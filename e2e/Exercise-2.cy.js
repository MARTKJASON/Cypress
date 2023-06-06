var company_num = 0

class Company {
  getCompanyName()
  {   
    //Getting the selected company
    cy.get('tbody>tr').eq(company_num)
      .within(() =>{    
        cy.get(':nth-child(2)')
          .invoke('text')
          .as('companyname')
      })
  }
  clickCompanyName()
  {   
    //clicking selected company info
    cy.get(':nth-child(10) > a > .btn')
      .eq(company_num)
      .click()
  }
  getCompanyNameDetailPage()
  {
    cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > p')
      .invoke('text')
      .as('companyname_detailpage')
  }
}

function formatString(text) {
  return text.replace('\u00A0','').trim();
}


const company = new Company();


describe('Exercise if else', () => {
  beforeEach(() => {
    cy.visit('https://admin.prod-dev.svcall.jp/home')
    cy.contains('ログイン').click()
    cy.get('#username').type ("jeremiah.caballero@sun-asterisk.com")
    cy.get('#password').type("P@ssword123")
    cy.get('button[type="submit"]').click()
  })
  context('Verify of company name is match in company detail page', () => {
    it('Select 56th company - True outcome', function() {
      // hard codes the company number to be 56 
      company_num = 55 // number 55 since array starts with 0. copany number 56
      cy.get('tbody>tr')
      company.getCompanyName()
      company.clickCompanyName()
      company.getCompanyNameDetailPage()

      cy.get('@companyname_detailpage').then(companyname_detailpage => {
        cy.get('@companyname').then(companyname => {  

          function getAns() {
            return Math.floor(Math.random() * 2);
          }

          if (companyname_detailpage.includes(formatString(companyname))  & (getAns() == 1)) {
            console.log("TRUE" + formatString(companyname))
          }
          else {
            console.log("FALSE" + formatString(companyname))
          }
        })
      })
    })
    it('Select 56th company - False outcome', function() {
      // hard codes the company number to be 56 (number 55 since array starts with 0)
      company_num = 55 // number 55 since array starts with 0. copany number 56
      cy.get('tbody>tr')
      company.getCompanyName()
      company.clickCompanyName()
      company.getCompanyNameDetailPage()

      cy.get('@companyname_detailpage').then(companyname_detailpage => {
        cy.get('@companyname').then(companyname => {  
          if (companyname_detailpage.includes(formatString(companyname+'any letter to make this false'))) {
            console.log("TRUE" + formatString(++companyname+'any letter to make this false'))
          }
          else {
            console.log("FALSE" + formatString(++companyname+'any letter to make this false'))
          }
        })
      })
    })
    it.only('Challenge function - All companies loop', function() {
      // hard codes the company number to be 56
      company_num = 0
      //select all the rows in the table
      cy.get('tbody>tr')
        //loop through al lthe rows in the table
        .each((companyRow) =>{
          company.getCompanyName()
          company.clickCompanyName()
          company.getCompanyNameDetailPage()

          // compare the company name in the table and the detail page
          cy.get('@companyname_detailpage').then(companyname_detailpage => {
            cy.get('@companyname').then(companyname => {  
              if (companyname_detailpage.includes(formatString(++companyname))) {
                console.log(company_num + " TRUE " + formatString(companyname))
              }
              else {
                console.log(company_num + " FALSE " + formatString(companyname))
              }
            })
          })
          //click back button to go back to the company table
          cy.get('#content > :nth-child(2) > .btn').click()
          //increment the company_num to move to the next row in the company table
          company_num++
        })
    })
  })
})