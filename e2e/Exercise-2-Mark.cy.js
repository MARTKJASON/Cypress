let companyNumber = 0;

function formatString(text) {
  return text.toString().replace("\u00A0", "").trim();
}
//create a function that generate random number 0 or 1
function getAns() {
  return Math.floor(Math.random() * 2);
}

class Company {
  //Getting the selected company
  getCompanyName() {
    cy.get("tbody>tr")
      .eq(companyNumber)
      //within the company rows
      .within(() => {
        cy.get(":nth-child(2)").invoke("text").as("companyname");
      });
  }
  //Get the Last company
  getLastCompany() {
    cy.get("tbody>tr")
      .eq(companyNumber)

      //within the company rows
      .within(() => {
        cy.get(":nth-child()").last().invoke("text").as("lastCompany");
      });
  }

  //Get the language
  getLanguage() {
    cy.get("tbody>tr")
      .eq(companyNumber)
      .within(() => {
        cy.get(":nth-child(3)").invoke("text").as("getLanguage");
      });
  }
  //click the company to redirect to detail page
  clickCompanyName() {
    cy.get(":nth-child(10) > a > .btn").eq(companyNumber).click();
  }
  //Get the Company name Details
  getCompanyNameDetail() {
    cy.get(":nth-child(1) > :nth-child(1) > :nth-child(1) > p")
      .invoke("text")
      .as("company_nameDetail");
  }
}
//make the Company (class) into a variable
const company = new Company();

describe("Exercise if else", () => {
  beforeEach(() => {
    cy.visit("https://admin.prod-dev.svcall.jp/home");
    cy.contains("ログイン").click();
    cy.get("#username").type("jeremiah.caballero@sun-asterisk.com");
    cy.get("#password").type("P@ssword123");
    cy.get('button[type="submit"]').click();
  });
  //Hard Code row 56
  context("Verify of company name is match in company detail page", () => {
    it("Select 56th company - True outcome", function () {
      companyNumber = 55;
      cy.get("tbody>tr");
      company.getCompanyName();
      company.getLanguage();
      company.clickCompanyName();
      company.getCompanyNameDetail();

      cy.get("@company_nameDetail").then((company_nameDetail) => {
        cy.get("@companyname").then((companyName) => {
          if (company_nameDetail.includes(formatString(companyName))) {
            console.log("TRUE" + formatString(companyName));
          } else {
            console.log("FALSE" + formatString(companyName));
          }
        });
      });
    });
    // Loop test
    it("Test 11 companies (RANDOM LOOP)", function () {
      companyNumber = 0;
      //create  a variable for loop
      let loopstopper = false;
      //if the loop reaches the limit, the loop will stop
      cy.get("tbody>tr").each(() => {
        if (loopstopper) {
          return;
        }
        //Create variable
        let companyRow = companyNumber;
        company.getCompanyName();
        company.getLanguage();
        company.clickCompanyName();
        company.getCompanyNameDetail();
        //get the company deetail
        cy.get("@company_nameDetail").then((company_nameDetail) => {
          //get the company name
          cy.get("@companyname").then((companyName) => {
            //get the language
            cy.get("@getLanguage").then((getLanguage) => {
              // if the company is a japanese language and same name in the company details print true
              if (
                formatString(getLanguage).includes("Japanese") &
                (getAns() == 1)          // if the random number == 1 prints true
              ) {
                console.log(
                  companyRow +
                    " TRUE " +
                    formatString(companyName) +
                    " " +
                    formatString(getLanguage)
                );
              }
              // if the company is a english  language nor different name in the company details print false
              else {
                console.log(
                  companyRow +
                    " FALSE " +
                    formatString(companyName) +
                    " " +
                    formatString(getLanguage)
                );
              }
            });
          });
        });
        //click back button
        cy.get("#content > :nth-child(2) > .btn").click();
        //increment the companyRow and companyNumber
        companyRow++;
        companyNumber++;
        //set loop a limit
        if (companyRow == 12) {
            console.log(companyRow)
          loopstopper = true;

          
        }
      });
    });
  });
});
