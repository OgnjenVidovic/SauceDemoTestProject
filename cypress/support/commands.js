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