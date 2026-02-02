describe("inventory page tests",()=>{
    beforeEach(()=>{
        cy.visit("https://www.saucedemo.com/");
        

    })
    afterEach(()=>{
        if(cy.url() !="https://www.saucedemo.com"){
            ///inventory.html" ||  cy.url() =="https://www.saucedemo.com/cart.html" || cy.url() =="https://www.saucedemo.com/checkout-step-one.html" || cy.url() =="https://www.saucedemo.com/checkout-step-two.html" || cy.url() =="https://www.saucedemo.com/checkout-complete.html
        cy.logout();
        }
    })

    it("standard user: all products exist and are visible",()=>{
        cy.loginAsStandard();
        cy.productsVisible();
    })

    it("standard user: all products have correct names ",()=>{
        cy.loginAsStandard();
        cy.correctNames();
    })

    it("standard user: all products have correct prices ",()=>{
        cy.loginAsStandard();
        cy.correctPrices();
    })

    it('standard user: all products have correct images',()=>{
        cy.loginAsStandard();
        cy.correctImages();
    })

    it('standard user: all products have a functional "add to cart button"/"remove" button',()=>{           
        cy.loginAsStandard();
        cy.functionalCartButton();
    })

    it('standard user: dropdown menu for sorting products (option "Name(A-Z)" works correctly)',()=>{           
        cy.loginAsStandard();
        cy.get('.product_sort_container').select('az');
        cy.checkSortingProductsAZ();
    })

    it('standard user: dropdown menu for sorting products (option "Name(Z-A)" works correctly)',()=>{
        cy.loginAsStandard();
        cy.get('.product_sort_container').select('za');
        cy.checkSortingProductsZA();
    })

    it('standard user: dropdown menu for sorting products (option Price (low to high) works correctly)',()=>{
        //cy.loginAsStandard();
        //cy.get('.product_sort_container').select('lohi');
    })

    it('standard user: dropdown menu for sorting products (option Price (high to low) works correctly)',()=>{
        //cy.loginAsStandard();
        //cy.get('.product_sort_container').select('hilo');
    })
    
    


    

    
})