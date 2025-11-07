describe("inventory page tests",()=>{
    beforeEach(()=>{
        cy.visit("https://www.saucedemo.com/");
        cy.fixture("users.json").then((data)=>{
            cy.loginAs(data.standard.username,data.standard.password);
            cy.url().should("equal","https://www.saucedemo.com/inventory.html");
        })

    })
    afterEach(()=>{
        if(cy.url() !="https://www.saucedemo.com"){
            ///inventory.html" ||  cy.url() =="https://www.saucedemo.com/cart.html" || cy.url() =="https://www.saucedemo.com/checkout-step-one.html" || cy.url() =="https://www.saucedemo.com/checkout-step-two.html" || cy.url() =="https://www.saucedemo.com/checkout-complete.html
        cy.logout();
        }
    })
    it("all products exist and are visible",()=>{
        cy.get("div[class='inventory_item']").should("exist").should("be.visible").should("have.length", 6)
    })

     it("'all products have correct names ",()=>{

    })

    it("'all products have correct prices ",()=>{

    })

    it('all products have correct images',()=>{
         cy.get('.inventory_item_img img').should('have.length', 6)
         cy.fixture("inventory.json").then((inventory)=>{
            for(let k=1;k<=6;k++){
            cy.get('[data-test="inventory-list"] > :nth-child('+k+') > .inventory_item_img img').should('have.attr', 'src', inventory[k-1].source);
        }
        
        })
    })

    it('all products have a functional "add to cart button"/"remove" button',()=>{
        
        cy.get("a div[class='inventory_item_name ']").should("exist").should("be.visible").should("have.length", 6)
        cy.get('[data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]').should("exist").should("be.visible").should("have.length", 6)
        
        
        
        for(let i=1;i<=6;i++){
            cy.get(':nth-child('+i+') > [data-test="inventory-item-description"] > .pricebar > button').click()
            if(i==6){
                cy.get(".shopping_cart_badge").should("have.text",6)
                for(let j=1;j<=6;j++){
                    cy.get(':nth-child('+j+') > [data-test="inventory-item-description"] > .pricebar > button').should("have.text","Remove");
                    cy.get(':nth-child('+j+') > [data-test="inventory-item-description"] > .pricebar > button').click();
                    cy.get(':nth-child('+j+') > [data-test="inventory-item-description"] > .pricebar > button').should("have.text","Add to cart");
                    if(j==6){
                        cy.get('[data-test="shopping-cart-link"]').should('not.have.attr', 'span')
                    }
                }
            }
        }

    })

    
})