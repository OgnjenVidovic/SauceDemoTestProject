describe("login tests",()=>{
    
    beforeEach(()=>{
        cy.visit("https://www.saucedemo.com/");
    })

    afterEach(()=>{
        if(cy.url() =="https://www.saucedemo.com/inventory.html"){
        cy.logout();
        }
        
    })

    it("login as standard user",()=>{
        cy.loginAsStandard();
    })

    it("login as locked out user",()=>{
        cy.loginAsLocked();
    })

    it("login as problem user",()=>{
        cy.loginAsProblem();
    })

    it("login as performance glitch user",()=>{ 
        cy.loginAsPerformance();
        cy.url().should("equal","https://www.saucedemo.com/inventory.html");           
    })

    it("login as error user",()=>{
        cy.loginAsError();
        cy.url().should("equal","https://www.saucedemo.com/inventory.html");    
    })

    it("login as visual user",()=>{
        cy.loginAsVisual();
    }) 

    it("login attempt with invalid credentials",()=>{
         
        cy.loginAs("test","test");
        cy.get('[data-test="error"]').should("have.text","Epic sadface: Username and password do not match any user in this service");
        
    })

    it("login attempt without username",()=>{
        cy.loginAs("","test");
        cy.get('[data-test="error"]').should("have.text","Epic sadface: Username is required");
    })

    it("login attempt without password",()=>{
        cy.loginAs("test","");
        cy.get('[data-test="error"]').should("have.text","Epic sadface: Password is required");
        
    })

})