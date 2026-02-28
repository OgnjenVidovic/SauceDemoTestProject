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
            //cy.get('[data-test="logout-sidebar-link"]').click();
            cy.get('#logout_sidebar_link').click({ force: true });
})

Cypress.Commands.add('allSame',()=>{
            cy.get('.inventory_item_img img').should('have.length.gt', 0) // ensuring at least one image exists
            .then(($imgs)=>{
                const br= $imgs.length;
                const sources = Cypress._.map($imgs,"src");
                let same = true;
                for( let i=0;i<br;i++){
                        if(sources[0] !== sources[i]){
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

Cypress.Commands.add('elementsExistVisible',()=>{
        cy.get("div[class='inventory_item']").should("exist").should("be.visible").should("have.length", 6);
        cy.get('[data-test="title"]').should("exist").should("be.visible").should("have.text","Products");
        cy.get('[data-test="product-sort-container"]').should("exist").should("be.visible");
        cy.get('.app_logo').should("exist").should("be.visible");
        cy.get('#react-burger-menu-btn').should("exist").should("be.visible");
        cy.get('[data-test="shopping-cart-link"]').should("exist").should("be.visible");
        cy.get('[data-test="social-linkedin"]').should("exist").should("be.visible");
        cy.get('[data-test="social-facebook"]').should("exist").should("be.visible");
        cy.get('[data-test="social-twitter"]').should("exist").should("be.visible");
        cy.get('[data-test="footer-copy"]').should("exist").should("be.visible");
})

Cypress.Commands.add('CartElementsExistVisible',()=>{
        cy.get('[data-test="checkout"]').should("exist").should("be.visible");
        cy.get('[data-test="continue-shopping"]').should("exist").should("be.visible");
        cy.get('[data-test="cart-desc-label"]').should("exist").should("be.visible");
        cy.get('[data-test="cart-quantity-label"]').should("exist").should("be.visible");
        cy.get('[data-test="title"]').should("exist").should("be.visible");
        cy.get('[data-test="social-linkedin"]').should("exist").should("be.visible");
        cy.get('[data-test="social-facebook"]').should("exist").should("be.visible");
        cy.get('[data-test="social-twitter"]').should("exist").should("be.visible");
        cy.get('[data-test="footer-copy"]').should("exist").should("be.visible");
})

Cypress.Commands.add('correctNames',()=>{
        cy.fixture("inventory.json").then((inventory)=>{
                cy.get(".inventory_item_name").then(($el)=>{
                        const br = $el.length;
                        cy.wrap(br).as('br');
                                for( let i=1;i<=br;i++){
                                        cy.get(':nth-child('+i+') > [data-test="inventory-item-description"] > .inventory_item_label > :nth-child(1)')
                                        .should('have.text', inventory[i-1].name);    
                                }
                })
        })
})

Cypress.Commands.add('correctDesc',()=>{
        cy.fixture("inventory.json").then((inventory)=>{
                cy.get(".inventory_item_desc").then(($el)=>{
                        const br = $el.length;
                        cy.wrap(br).as('br');
                                for( let i=1;i<=br;i++){
                                cy.get('.inventory_item:nth-child('+i+') .inventory_item_desc').should('have.text', inventory[i-1].desc);    
                                }
                })
        })
})



Cypress.Commands.add('correctPrices',()=>{
        cy.get('[data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]').should('have.length.gt', 0)
        cy.fixture("inventory.json").then((inventory)=>{
                cy.get('[data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]').then(($el)=>{
                        const br = $el.length;
                        cy.wrap(br).as('br');    
                                for( let i=1;i<=br;i++){
                                cy.get(':nth-child('+i+') > [data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]')
                                .should("have.contain",inventory[i-1].price);
                                }
                })
        })
})

Cypress.Commands.add('correctImages',()=>{
        cy.get('.inventory_item_img img').should('have.length.gt', 0)
        cy.fixture("inventory.json").then((inventory)=>{
                cy.get(".inventory_item_img img").then(($el)=>{
                        const br = $el.length;
                        cy.wrap(br).as('br');
                                for(let k=1;k<=br;k++){
                                cy.get('[data-test="inventory-list"] > :nth-child('+k+') > .inventory_item_img img')
                                .should('have.attr', 'src', inventory[k-1].source);
                                }
                })
        })
})

Cypress.Commands.add('AddAllToCart',()=>{
            
        cy.get(".inventory_item_name").then(($el)=>{
                const br = $el.length;
                cy.wrap(br).as('br');
                        for(let i=1;i<=br;i++){
                                cy.get(':nth-child('+i+') > [data-test="inventory-item-description"] > .pricebar > button').click();
                        }
        })
})

Cypress.Commands.add('RemoveAllFromCart',()=>{
            
        cy.get(".inventory_item_name").then(($el)=>{
                const br = $el.length;
                cy.wrap(br).as('br');

                for(let j=1;j<=br;j++){
                        cy.get(':nth-child('+j+') > [data-test="inventory-item-description"] > .pricebar > button').should("have.text","Remove");
                        cy.get(':nth-child('+j+') > [data-test="inventory-item-description"] > .pricebar > button').click();
                        cy.get(':nth-child('+j+') > [data-test="inventory-item-description"] > .pricebar > button').should("have.text","Add to cart");
                }
            
        })
})


Cypress.Commands.add('functionalCartButton',()=>{
            
        cy.get(".inventory_item_name").then(($el)=>{
            const br = $el.length;
            cy.wrap(br).as('br');
                for(let i=1;i<=br;i++){
                        cy.get(':nth-child('+i+') > [data-test="inventory-item-description"] > .pricebar > button').click()
                if(i==br){
                        cy.get(".shopping_cart_badge").should("have.text",br)
                for(let j=1;j<=br;j++){
                    cy.get(':nth-child('+j+') > [data-test="inventory-item-description"] > .pricebar > button').should("have.text","Remove");
                    cy.get(':nth-child('+j+') > [data-test="inventory-item-description"] > .pricebar > button').click();
                    cy.get(':nth-child('+j+') > [data-test="inventory-item-description"] > .pricebar > button').should("have.text","Add to cart");
                    if(j==br){
                        cy.get('[data-test="shopping-cart-link"]').should('not.have.attr', 'span')
                    }
                }
            }
        }
        })
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
                cy.get('.product_sort_container').select('za');
                cy.on('window:alert', (alertText) => {
                        expect(alertText).to.eq('Sorting is broken! This error has been reported to Backtrace.');
                });
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
                const start = Date.now();    
                cy.loginAs(data.performance_glitch.username,data.performance_glitch.password);
                cy.get('.inventory_item', { timeout: 10000 }).should('exist').then(() => {
                        const duration = Date.now() - start;
                        cy.log("UI load time: "+duration+"ms");

                        expect(duration).to.be.greaterThan(5000);
  });
            
        })
})

Cypress.Commands.add('checkSortingProductsAZ',()=>{
        
        cy.get(".inventory_item_name").then(($el)=>{
                const sortedAZ=Cypress._.map($el,"innerText");
                cy.wrap(sortedAZ).as('sortedAZ')
        })
        cy.get('@sortedAZ').then((sortedAZ) => {
                const checkAZ = [...sortedAZ].sort((a, b) => a.localeCompare(b));
                expect(sortedAZ).to.deep.equal(checkAZ);
                cy.wrap(checkAZ).as('checkAZ')
        })

        
            //sortedAZ is the state array is in after user presses the sort button
            //checkAZ is manually sorted array
})

Cypress.Commands.add('checkSortingProductsZA',()=>{
        
        cy.get(".inventory_item_name").then(($el)=>{
                const sortedZA=Cypress._.map($el,"innerText");
                //for( let i=0;i<sortedZA.length;i++){
                //    cy.log(sortedZA[i]);
                //}
                cy.wrap(sortedZA).as('sortedZA')
        })
        cy.get('@sortedZA').then((sortedZA) => {
                const checkZA = [...sortedZA].sort((a, b) => b.localeCompare(a));
                expect(sortedZA).to.deep.equal(checkZA);
                cy.wrap(checkZA).as('checkZA')
            })
})

Cypress.Commands.add('checkSortingProductsLowToHigh',()=>{
        
        cy.get('.inventory_item_price').then(($el) => {
            const extractedEl = el => parseFloat(el.innerText.slice(1));
            const sortedLowToHigh = Cypress._.map($el, extractedEl);
            cy.wrap(sortedLowToHigh).as('sortedLowToHigh');
            //for( let i=0;i<sortedLowToHigh.length;i++){
            //    cy.log(sortedLowToHigh[i]);
            //    } 
        })
        cy.get('@sortedLowToHigh').then((sortedLowToHigh)=>{
            const checkLowToHigh = [...sortedLowToHigh].sort((a, b) => a - b)
            cy.wrap(checkLowToHigh).as('checkLowToHigh');
            expect(sortedLowToHigh).to.deep.equal(checkLowToHigh)
        })
})

Cypress.Commands.add('checkSortingProductsHighToLow',()=>{
        cy.get('.inventory_item_price').then(($el) => {
            const extractedEl = el => parseFloat(el.innerText.replace('$',''));
            const sortedHighToLow = Cypress._.map($el,extractedEl);
            cy.wrap(sortedHighToLow).as('sortedHighToLow');
        })
        cy.get('@sortedHighToLow').then((sortedHighToLow)=>{
            const checkHighToLow = [...sortedHighToLow].sort((a, b) => b - a)
            cy.wrap(checkHighToLow).as('checkHighToLow');
            expect(sortedHighToLow).to.deep.equal(checkHighToLow)
        })
})

Cypress.Commands.add('checkProductNamesOnTheirPage',()=>{
        cy.fixture("inventory.json").then((inventory)=>{
                cy.get(".inventory_item_name").then($els => {
                        const br = $els.length;
                        for(let i=1;i<=br;i++){ 
                        cy.get('.inventory_item:nth-child('+i+') .inventory_item_name').click();//!!
                        cy.get('div[data-test="inventory-item-name"]').invoke('text').should("eq",inventory[i-1].name); //it's text instead of innerText with invoke
                        cy.get('#back-to-products').click();
                //cy.go('back') doesn't work because SauceDemo uses JS navigation, so clicking a title doesn’t create a real history entry
                        }
                })
        })
})

/*Cypress.Commands.add('checkProductNamesOnTheirPage1',()=>{
         cy.get(".inventory_item_name").then($els => {
            const br = $els.length;
            const names = Cypress._.map($els,"innerText");
            for(let i=1;i<=br;i++){ 
                cy.get('.inventory_item:nth-child('+i+') .inventory_item_name').click();//!!
                cy.get('div[data-test="inventory-item-name"]').invoke('text').should("eq",names[i-1]); //it's text instead of innerText with invoke
                cy.get('#back-to-products').click();
                //cy.go('back') doesn't work because SauceDemo uses JS navigation, so clicking a title doesn’t create a real history entry
            }
            
            })
})*/
//decided to scrap these because names and descriptions on inventory page might be incorrect for some users, but I'm keeping them as comments in case i need them later
/*Cypress.Commands.add('checkProductDescriptionOnTheirPage1',()=>{
        cy.get(".inventory_item_desc").then($els => {
            const br = $els.length;
            cy.wrap(br).as('br');
            const desc = Cypress._.map($els,"innerText");
                //const prices = Cypress._.map($el, el =>
                //parseFloat(el.innerText.replace('$', ''))
                //) 
            for(let i=1;i<=br;i++){ 
                cy.get('.inventory_item:nth-child('+i+') .inventory_item_name').click();//!!
                cy.get('div[data-test="inventory-item-desc"]').invoke('text').should("eq",desc[i-1]); 
                cy.get('#back-to-products').click();
                
            }
            })
              not in use but might need later
})*/

Cypress.Commands.add('checkProductDescriptionOnTheirPage',()=>{
        cy.fixture("inventory.json").then((inventory)=>{
        cy.get(".inventory_item_desc").then($els => {
            const br = $els.length;
            cy.wrap(br).as('br');
            for(let i=1;i<=br;i++){ 
                cy.get('.inventory_item:nth-child('+i+') .inventory_item_name').click();//!!
                cy.get('div[data-test="inventory-item-desc"]').invoke('text').should("eq",inventory[i-1].desc); 
                cy.get('#back-to-products').click();
            }
            })
        })
})

Cypress.Commands.add('checkProductPriceOnTheirPage',()=>{
        cy.fixture("inventory.json").then((inventory)=>{
            cy.get(".inventory_item_desc").then($els => {
                const br = $els.length;
                cy.wrap(br).as('br');
                for(let i=1;i<=br;i++){ 
                    cy.get('.inventory_item:nth-child('+i+') .inventory_item_name').click();//!!
                    cy.get('div[data-test="inventory-item-price"]').should("have.text",inventory[i-1].price); 
                    cy.get('#back-to-products').click();
                }
            })
        })
})

Cypress.Commands.add('checkAddToCartButtonOnProductPage',()=>{
        cy.get("#react-burger-menu-btn").click();
        cy.get("#reset_sidebar_link").click();
        cy.get(".inventory_item_name").then(($el)=>{
            const br = $el.length;
            cy.wrap(br).as('br');
       
            for(let i=1;i<=br;i++){
                cy.get('.inventory_item:nth-child('+i+') .inventory_item_name').click();
                cy.get('[data-test="add-to-cart"]').click();
                cy.get('#back-to-products').click();
                cy.get(':nth-child('+i+') > [data-test="inventory-item-description"] > .pricebar > button').should("have.text","Remove");                   
                    if(i==br){
                        cy.get(".shopping_cart_badge").should("have.text",br)
                    }   
            }     
            for(let j=1;j<=br;j++){
                cy.get('.inventory_item:nth-child('+j+') .inventory_item_name').click();
                cy.get('[data-test="remove"]').click();
                cy.get('#back-to-products').click();
                cy.get(':nth-child('+j+') > [data-test="inventory-item-description"] > .pricebar > button').should("have.text","Add to cart");
                    if(j==br){
                        cy.get('[data-test="shopping-cart-link"]').should('not.have.attr', 'span');
                    }
            }
        })
})

Cypress.Commands.add('resetAppStateButton',()=>{

        cy.get("#react-burger-menu-btn").click();
        cy.get("#reset_sidebar_link").click();
        cy.get("#react-burger-cross-btn").click();
        cy.get(".shopping_cart_badge").should("not.exist");

})


Cypress.Commands.add('checkSideBar',()=>{

        cy.get("#react-burger-menu-btn").click();
        cy.get("#about_sidebar_link").should("have.attr", "href").and("include", "saucelabs.com");
        cy.get("#react-burger-cross-btn").click();

        cy.get("#react-burger-menu-btn").click();
        cy.get("#inventory_sidebar_link").click();
        cy.get("#react-burger-cross-btn").click();
        cy.url().should("eq","https://www.saucedemo.com/inventory.html");
        
        cy.resetAppStateButton();

})

Cypress.Commands.add('AddAllToCartFromProductPages',()=>{
        cy.get("#react-burger-menu-btn").click();
        cy.get("#reset_sidebar_link").click();
        cy.get(".inventory_item_name").then(($el)=>{
            const br = $el.length;
            cy.wrap(br).as('br');
       
            for(let i=1;i<=br;i++){
                cy.get('.inventory_item:nth-child('+i+') .inventory_item_name').click();
                cy.get('[data-test="add-to-cart"]').click();
                cy.get('#back-to-products').click();
            }     
            
        })
})

Cypress.Commands.add('RemoveAllFromCartFromProductPages',()=>{
        cy.get(".inventory_item_name").then(($el)=>{
            const br = $el.length;
            cy.wrap(br).as('br');

            for(let j=1;j<=br;j++){
                cy.get('.inventory_item:nth-child('+j+') .inventory_item_name').click();
                cy.get('[data-test="remove"]').click();
                cy.get('#back-to-products').click();
                
            }
        })
})

Cypress.Commands.add('CheckElementsInCart',(tag, parameter)=>{
        cy.fixture('inventory.json').then((inventory) => {
            cy.get(tag).each(($el, i) => {
                cy.wrap($el).invoke('text').then((text) => {
                    expect(text).to.eq(inventory[i][parameter]);
                });
            });
        });
//'.cart_item .inventory_item_name'
//name      
})

Cypress.Commands.add('CheckOrderOfAddedElementsInCart',()=>{
        let addedOrder = [];
        cy.get('.inventory_item').then(($items) => {
            const total = $items.length;
            const randomIndexes = Cypress._.shuffle([...Array(total).keys()]);
                randomIndexes.forEach((index) => {
                        const name = $items[index].querySelector('.inventory_item_name').innerText;
                        addedOrder.push(name);
                        cy.wrap($items[index]).find('.btn_inventory').click();
                });
        });
        
        cy.get('.shopping_cart_link').click();

        cy.get('.cart_item .inventory_item_name').then(($els) => {
                const cartOrder = Cypress._.map($els, 'innerText');
                expect(cartOrder).to.deep.equal(addedOrder);
        });
})

Cypress.Commands.add('CheckOrderOfAddedElementsInCartFromItemPage',()=>{
        let addedOrder = [];
        cy.get('.inventory_item').then(($items) => {
            const total = $items.length;
            const randomIndexes = Cypress._.shuffle([...Array(total).keys()]);
                randomIndexes.forEach((index) => {
                        cy.get('.inventory_item').eq(index).find('.inventory_item_name').then(($name) => {
                                const name = $name.text();
                                addedOrder.push(name);
                                cy.wrap($name).click();
                        });
                        cy.get('.btn_inventory').click();
                        cy.get('#back-to-products').click();
                });
        });
        
        cy.get('.shopping_cart_link').click();

        cy.get('.cart_item .inventory_item_name').then(($els) => {
                const cartOrder = Cypress._.map($els, 'innerText');
                expect(cartOrder).to.deep.equal(addedOrder);
        });
})

Cypress.Commands.add('CheckRemovingFromCart',()=>{
        cy.get('div.cart_item').then(($items)=>{
            const total = $items.length; 
            const index = Cypress._.map([...Array(total).keys()]);
            index.forEach((i)=>{
                cy.wrap($items[i]).find('.item_pricebar button').click();
            })
        })
        cy.get('div.cart_item').should("not.exist");
})