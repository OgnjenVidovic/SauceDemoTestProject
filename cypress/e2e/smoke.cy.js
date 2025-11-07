describe("smoke tests",()=>{

    let userdata;
    let n=6;

    beforeEach(()=>{
        cy.visit("https://www.saucedemo.com/");
    })

    it("site loaded",()=>{
        cy.url().should("include","https://www.saucedemo.com/");
        cy.title().should("contain","Swag Labs");
    })
    it("basic elements exist and are visible",()=>{
        
        cy.get('#user-name').should("exist").should("be.visible");
        cy.get("#password").should("exist").should("be.visible");
        cy.get("#login-button").should("exist").should("be.visible");
        cy.get('[data-test="login-credentials"]').should("exist").should("be.visible");
        cy.get('[data-test="login-password"]').should("exist").should("be.visible");
        cy.fixture("usersArray.json").then((data)=>{
            data.forEach((userdata)=>{
                cy.get('[data-test="login-credentials"]').should('contain',userdata.username);
                cy.get('[data-test="login-password"]').should("contain",userdata.password);
                cy.log(userdata.username);
                cy.log(userdata.password);
            })
            
        })
    })
})