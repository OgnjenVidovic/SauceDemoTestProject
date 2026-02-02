// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="Cypress"/>;


Cypress.Commands.add('loginAs',(username, password)=>{
        
        if(username != ""){
                cy.get("#user-name").type(username);      
        }
        if(password != ""){
                cy.get("#password").type(password);
        }
        
        cy.get('[data-test="login-button"]').click();
})

Cypress.Commands.add('logout',()=>{
            cy.get("#react-burger-menu-btn").click();
            cy.get('[data-test="logout-sidebar-link"]').click();
})

Cypress.Commands.add('allSame',()=>{
            cy.get('.inventory_item_img img').should('have.length.gt', 0) // ensuring at least one image exists
            .then(($imgs)=>{
                const imageSources = [];

                for( let i=0;i<$imgs.length;i++){
                let src = $imgs[i].getAttribute('src');
                imageSources.push(src);
                cy.log(src);
                }
                
                const firstImage = imageSources[0];
                let same = true;

                for (let i = 1; i < imageSources.length; i++) {
                if (imageSources[i] !== firstImage) {
                same = false;
                break;
                }
            }
             
                if (same) {
                        cy.log('All images are identical');
                } else {
                        cy.log('Not all images are identical');
                }

                expect(same).to.be.true;

            })

             
})

Cypress.Commands.add('productsVisible',()=>{
        cy.get("div[class='inventory_item']").should("exist").should("be.visible").should("have.length", 6)
})

Cypress.Commands.add('correctNames',()=>{
        cy.fixture("inventory.json").then((inventory)=>{
            for( let i=1;i<6;i++){
            cy.get(':nth-child('+i+') > [data-test="inventory-item-description"] > .inventory_item_label > :nth-child(1)').should('have.text', inventory[i-1].name);    
        }
        })
})

Cypress.Commands.add('correctPrices',()=>{
        cy.get('[data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]').should("exist").should("be.visible").should("have.length", 6)
        cy.fixture("inventory.json").then((inventory)=>{
            for( let i=1;i<6;i++){
                cy.get(':nth-child('+i+') > [data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]').should("have.contain",inventory[i-1].price);
      
        }
        })
})

Cypress.Commands.add('correctImages',()=>{
        cy.get('.inventory_item_img img').should('have.length', 6)
        cy.fixture("inventory.json").then((inventory)=>{
            for(let k=1;k<=6;k++){
            cy.get('[data-test="inventory-list"] > :nth-child('+k+') > .inventory_item_img img').should('have.attr', 'src', inventory[k-1].source);
        }
        
        })
})

Cypress.Commands.add('functionalCartButton',()=>{
                   
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

Cypress.Commands.add('loginAsStandard',()=>{
cy.fixture("users.json").then((data)=>{
            cy.loginAs(data.standard.username,data.standard.password);
                cy.url().should("equal","https://www.saucedemo.com/inventory.html");
        })
})
Cypress.Commands.add('loginAsLocked',()=>{
cy.fixture("users.json").then((data)=>{
            cy.loginAs(data.locked_out.username,data.locked_out.password);
            cy.get('[data-test="error"]').should("have.text","Epic sadface: Sorry, this user has been locked out.")
        })
})
Cypress.Commands.add('loginAsProblem',()=>{
cy.fixture("users.json").then((data)=>{
            cy.loginAs(data.problem.username,data.problem.password);
                cy.url().should("equal","https://www.saucedemo.com/inventory.html");
                cy.allSame();
        })
})
Cypress.Commands.add('loginAsError',()=>{
cy.fixture("users.json").then((data)=>{
            cy.loginAs(data.err.username,data.err.password);
        })
})
Cypress.Commands.add('loginAsVisual',()=>{
cy.fixture("users.json").then((data)=>{
            cy.loginAs(data.visual.username,data.visual.password);
                cy.url().should("equal","https://www.saucedemo.com/inventory.html");    
                        cy.get('.inventory_item_img img').first().should('have.attr', 'src', '/static/media/sl-404.168b1cce10384b857a6f.jpg');
        })
})
Cypress.Commands.add('loginAsPerformance',()=>{
cy.fixture("users.json").then((data)=>{
            cy.loginAs(data.performance_glitch.username,data.performance_glitch.password);
        })
})

Cypress.Commands.add('checkSortingProductsAZ',()=>{
        
        cy.get(".inventory_item_name").then(($el)=>{
            const sortedAZ=Cypress._.map($el,"innerText");
            //for( let i=0;i<products.length;i++){
            //    cy.log(products[i]);
            //}
            cy.wrap(sortedAZ).as('sortedAZ')
        })
        cy.get('@sortedAZ').then((sortedAZ) => {
                const checkAZ = [...sortedAZ].sort((a, b) => a.localeCompare(b));
                expect(sortedAZ,'The roducts were not sorted correctly from A to Z').to.deep.equal(checkAZ);
                cy.wrap(checkAZ).as('checkAZ')
            })

        
            //sortedAZ is the state array is in after user presses the sort button
            //checkAZ is manually sorted array
})

Cypress.Commands.add('checkSortingProductsZA',()=>{
        
        cy.get(".inventory_item_name").then(($el)=>{
            const sortedZA=Cypress._.map($el,"innerText");
            //for( let i=0;i<products.length;i++){
            //    cy.log(products[i]);
            //}
            cy.wrap(sortedZA).as('sortedZA')
        })
        cy.get('@sortedZA').then((sortedZA) => {
                const checkZA = [...sortedZA].sort((a, b) => b.localeCompare(a));
                expect(sortedZA,'The roducts were not sorted correctly from Z to A').to.deep.equal(checkZA);
                cy.wrap(checkZA).as('checkZA')
            })
            //sortedAZ is the state array is in after user presses the sort button
            //checkAZ is manually sorted array
})


