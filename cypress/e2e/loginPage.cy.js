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
        cy.fixture("users.json").then((data)=>{
            cy.loginAs(data.standard.username,data.standard.password);
            cy.url().should("equal","https://www.saucedemo.com/inventory.html");
        })
        
    })

    it("login as locked out user",()=>{
         cy.fixture("users.json").then((data)=>{
            cy.loginAs(data.locked_out.username,data.locked_out.password);
            cy.get('[data-test="error"]').should("have.text","Epic sadface: Sorry, this user has been locked out.")
        })
        
    })



    it("login as problem user",()=>{
         cy.fixture("users.json").then((data)=>{
            cy.loginAs(data.problem.username,data.problem.password);
            cy.allSame();
        })
    })

    it("login as performance glitch user",()=>{
         cy.fixture("users.json").then((data)=>{
            cy.loginAs(data.performance_glitch.username,data.performance_glitch.password);

        })
    })

    it("login as error user",()=>{
         cy.fixture("users.json").then((data)=>{
            cy.loginAs(data.err.username,data.err.password);
        })
    })

    it.only("login as visual user",()=>{
         cy.fixture("users.json").then((data)=>{
            cy.loginAs(data.visual.username,data.visual.password);
            cy.get('.inventory_item_img img').first().should('have.attr', 'src', '/static/media/sl-404.168b1cce.jpg');
        })
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