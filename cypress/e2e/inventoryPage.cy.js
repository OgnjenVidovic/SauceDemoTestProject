describe("inventory page tests",()=>{
    beforeEach(()=>{
        cy.visit("https://www.saucedemo.com/");
        
    })

    afterEach(function (){
         if (this.currentTest.state === 'passed') {
            if(cy.url() !="https://www.saucedemo.com"){
                cy.logout();
            }
        }
    });
   
// standard user
    it("standard user: all buttons on the side bar menu work correctly",()=>{
        cy.loginAsStandard();
        cy.checkSideBar();
    })

    it.only("standard user: all elements exist and are visible",()=>{
        cy.loginAsStandard();
        cy.elementsExistVisible();
        
    })

    it("standard user: all products have correct names ",()=>{
        cy.loginAsStandard();
        cy.correctNames();
    })

    it("standard user: all products have correct description",()=>{
        cy.loginAsStandard();
        cy.correctDesc();
    })

    it("standard user: all products have correct prices ",()=>{
        cy.loginAsStandard();
        cy.correctPrices();
    })

    it('standard user: all products have correct images',()=>{
        cy.loginAsStandard();
        cy.correctImages();
    })

    it('standard user: all products have a functional "add to cart" button/"remove" button',()=>{           
        cy.loginAsStandard();
        cy.resetAppStateButton();
        cy.functionalCartButton();
    })

    it('standard user: dropdown menu for sorting products (option "Name(A-Z)" works correctly)',()=>{           
        cy.loginAsStandard();
        cy.resetAppStateButton();
        cy.get('.product_sort_container').select('az');
        cy.checkSortingProductsAZ();
    })

    it('standard user: dropdown menu for sorting products (option "Name(Z-A)" works correctly)',()=>{
        cy.loginAsStandard();
        cy.resetAppStateButton();
        cy.get('.product_sort_container').select('za');
        cy.checkSortingProductsZA();
    })

    it('standard user: dropdown menu for sorting products (option Price (low to high) works correctly)',()=>{
        cy.loginAsStandard();
        cy.resetAppStateButton();
        cy.get('.product_sort_container').select('lohi');
        cy.checkSortingProductsLowToHigh();

    })

    it('standard user: dropdown menu for sorting products (option Price (high to low) works correctly)',()=>{
        cy.loginAsStandard();
        cy.resetAppStateButton();
        cy.get('.product_sort_container').select('hilo');
        cy.checkSortingProductsHighToLow();
    })

    it('standard user: all products have a correct name on their own page',()=>{
        cy.loginAsStandard();
        cy.checkProductNamesOnTheirPage();
    })

    it('standard user: all products have a correct description on their own page',()=>{
        cy.loginAsStandard();
        cy.checkProductDescriptionOnTheirPage();
    })

    it('standard user: all products have correct price on their own page',()=>{
        cy.loginAsStandard();
        cy.checkProductPriceOnTheirPage();
    })

    it('standard user: all products have a functional "add to cart button"/"remove" button on their own page',()=>{           
        cy.loginAsStandard();
        cy.resetAppStateButton();
        cy.checkAddToCartButtonOnProductPage();
    })
// problem user

    it("problem user: all buttons on the side bar menu work correctly",()=>{
        cy.loginAsProblem();
        cy.checkSideBar();
    })

    it("problem user: all products exist and are visible",()=>{
        cy.loginAsProblem();
        cy.productsVisible();
    })

    it("problem user: all products have correct names ",()=>{
        cy.loginAsProblem();
        cy.correctNames();
    })

    it("problem user: all products have correct description",()=>{
        cy.loginAsProblem();
        cy.correctDesc();
    })

    it("problem user: all products have correct prices ",()=>{
        cy.loginAsProblem();
        cy.correctPrices();
    })

    it('problem user: all products have correct images',()=>{
        cy.loginAsProblem();
        cy.correctImages();
    })

    it('problem user: all products have a functional "add to cart button"/"remove" button',()=>{           
        cy.loginAsProblem();
        cy.resetAppStateButton();
        cy.functionalCartButton();
    })

    it('problem user: dropdown menu for sorting products (option "Name(A-Z)" works correctly)',()=>{           
        cy.loginAsProblem();
        cy.resetAppStateButton();
        cy.get('.product_sort_container').select('az');
        cy.checkSortingProductsAZ();
    })

    it('problem user: dropdown menu for sorting products (option "Name(Z-A)" works correctly)',()=>{
        cy.loginAsProblem();
        cy.resetAppStateButton();
        cy.get('.product_sort_container').select('za');
        cy.checkSortingProductsZA();
    })

    it('problem user: dropdown menu for sorting products (option Price (low to high) works correctly)',()=>{
        cy.loginAsProblem();
        cy.resetAppStateButton();
        cy.get('.product_sort_container').select('lohi');
        cy.checkSortingProductsLowToHigh();

    })

    it('problem user: dropdown menu for sorting products (option Price (high to low) works correctly)',()=>{
        cy.loginAsProblem();
        cy.resetAppStateButton();
        cy.get('.product_sort_container').select('hilo');
        cy.checkSortingProductsHighToLow();
    })

    it('problem user: all products have a correct name on their own page',()=>{
        cy.loginAsProblem();
        cy.checkProductNamesOnTheirPage();
    })

    it('problem user: all products have a correct description on their own page',()=>{
        cy.loginAsProblem();
        cy.checkProductDescriptionOnTheirPage();
    })

    it('problem user: all products have correct price on their own page',()=>{
        cy.loginAsProblem();
        cy.checkProductPriceOnTheirPage();
    })

    it('problem user: all products have a functional "add to cart button"/"remove" button on their own page',()=>{           
        cy.loginAsProblem();
        cy.resetAppStateButton();
        cy.checkAddToCartButtonOnProductPage();
    })

// error user
    it("error user: all buttons on the side bar menu work correctly",()=>{
        cy.loginAsError();
        cy.checkSideBar();
    })

    it("error user: all products exist and are visible",()=>{
        cy.loginAsError();
        cy.productsVisible();
    })

    it("error user: all products have correct names ",()=>{
        cy.loginAsError();
        cy.correctNames();
    })

    it("error user: all products have correct description",()=>{
        cy.loginAsError();
        cy.correctDesc();
    })

    it("error user: all products have correct prices ",()=>{
        cy.loginAsError();
        cy.correctPrices();
    })

    it('error user: all products have correct images',()=>{
        cy.loginAsError();
        cy.correctImages();
    })

    it('error user: all products have a functional "add to cart button"/"remove" button',()=>{           
        cy.loginAsError();
        cy.resetAppStateButton();
        cy.functionalCartButton();
    })

    it('error user: dropdown menu for sorting products (option "Name(A-Z)" works correctly)',()=>{           
        cy.loginAsError();
        cy.resetAppStateButton();
        cy.get('.product_sort_container').select('az');
        cy.checkSortingProductsAZ();
    })

    it('error user: dropdown menu for sorting products (option "Name(Z-A)" works correctly)',()=>{
        cy.loginAsError();
        cy.resetAppStateButton();
        cy.get('.product_sort_container').select('za');
        cy.checkSortingProductsZA();
    })

    it('error user: dropdown menu for sorting products (option Price (low to high) works correctly)',()=>{
        cy.loginAsError();
        cy.resetAppStateButton();
        cy.get('.product_sort_container').select('lohi');
        cy.checkSortingProductsLowToHigh();

    })

    it('error user: dropdown menu for sorting products (option Price (high to low) works correctly)',()=>{
        cy.loginAsError();
        cy.resetAppStateButton();
        cy.get('.product_sort_container').select('hilo');
        cy.checkSortingProductsHighToLow();
    })

    it('error user: all products have a correct name on their own page',()=>{
        cy.loginAsError();
        cy.checkProductNamesOnTheirPage();
    })

    it('error user: all products have a correct description on their own page',()=>{
        cy.loginAsError();
        cy.checkProductDescriptionOnTheirPage();
    })

    it('error user: all products have correct price on their own page',()=>{
        cy.loginAsError();
        cy.checkProductPriceOnTheirPage();
    })

    it('error user: all products have a functional "add to cart button"/"remove" button on their own page',()=>{           
        cy.loginAsError();
        cy.resetAppStateButton();
        cy.checkAddToCartButtonOnProductPage();
    })

// visual user
    it("visual user: all buttons on the side bar menu work correctly",()=>{
        cy.loginAsVisual();
        cy.checkSideBar();
    })

    it("visual user: all products exist and are visible",()=>{
        cy.loginAsVisual();
        cy.productsVisible();
    })

    it("visual user: all products have correct names ",()=>{
        cy.loginAsVisual();
        cy.correctNames();
    })

    it("visual user: all products have correct description",()=>{
        cy.loginAsVisual();
        cy.correctDesc();
    })

    it("visual user: all products have correct prices ",()=>{
        cy.loginAsVisual();
        cy.correctPrices();
    })

    it('visual user: all products have correct images',()=>{
        cy.loginAsVisual();
        cy.correctImages();
    })

    it('visual user: all products have a functional "add to cart button"/"remove" button',()=>{           
        cy.loginAsVisual();
        cy.resetAppStateButton();
        cy.functionalCartButton();
    })

    it('visual user: dropdown menu for sorting products (option "Name(A-Z)" works correctly)',()=>{           
        cy.loginAsVisual();
        cy.resetAppStateButton();
        cy.get('.product_sort_container').select('az');
        cy.checkSortingProductsAZ();
    })

    it('visual user: dropdown menu for sorting products (option "Name(Z-A)" works correctly)',()=>{
        cy.loginAsVisual();
        cy.resetAppStateButton();
        cy.get('.product_sort_container').select('za');
        cy.checkSortingProductsZA();
    })

    it('visual user: dropdown menu for sorting products (option Price (low to high) works correctly)',()=>{
        cy.loginAsVisual();
        cy.resetAppStateButton();
        cy.get('.product_sort_container').select('lohi');
        cy.checkSortingProductsLowToHigh();

    })

    it('visual user: dropdown menu for sorting products (option Price (high to low) works correctly)',()=>{
        cy.loginAsVisual();
        cy.resetAppStateButton();
        cy.get('.product_sort_container').select('hilo');
        cy.checkSortingProductsHighToLow();
    })

    it('visual user: all products have a correct name on their own page',()=>{
        cy.loginAsVisual();
        cy.checkProductNamesOnTheirPage();
    })

    it('visual user: all products have a correct description on their own page',()=>{
        cy.loginAsVisual();
        cy.checkProductDescriptionOnTheirPage();
    })

    it('visual user: all products have correct price on their own page',()=>{
        cy.loginAsVisual();
        cy.checkProductPriceOnTheirPage();
    })

    it('visual user: all products have a functional "add to cart button"/"remove" button on their own page',()=>{           
        cy.loginAsVisual();
        cy.resetAppStateButton();
        cy.checkAddToCartButtonOnProductPage();
    })

// performance glitch user 
    it("performance glitch user: all buttons on the side bar menu work correctly",()=>{
        cy.loginAsPerformance();
        cy.checkSideBar();
    })

    it("performance glitch user: all products exist and are visible",()=>{
        cy.loginAsPerformance();
        cy.productsVisible();
    })

    it("performance glitch user: all products have correct names ",()=>{
        cy.loginAsPerformance();
        cy.correctNames();
    })

    it("performance glitch user: all products have correct description",()=>{
        cy.loginAsPerformance();
        cy.correctDesc();
    })

    it("performance glitch user: all products have correct prices ",()=>{
        cy.loginAsPerformance();
        cy.correctPrices();
    })

    it('performance glitch user: all products have correct images',()=>{
        cy.loginAsPerformance();
        cy.correctImages();
    })

    it('performance glitch user: all products have a functional "add to cart button"/"remove" button',()=>{           
        cy.loginAsPerformance();
        cy.resetAppStateButton();
        cy.functionalCartButton();
    })

    it('performance glitch user: dropdown menu for sorting products (option "Name(A-Z)" works correctly)',()=>{           
        cy.loginAsPerformance();
        cy.resetAppStateButton();
        cy.get('.product_sort_container').select('az');
        cy.checkSortingProductsAZ();
    })

    it('performance glitch user: dropdown menu for sorting products (option "Name(Z-A)" works correctly)',()=>{
        cy.loginAsPerformance();
        cy.resetAppStateButton();
        cy.get('.product_sort_container').select('za');
        cy.checkSortingProductsZA();
    })

    it('performance glitch user: dropdown menu for sorting products (option Price (low to high) works correctly)',()=>{
        cy.loginAsPerformance();
        cy.resetAppStateButton();
        cy.get('.product_sort_container').select('lohi');
        cy.checkSortingProductsLowToHigh();

    })

    it('performance glitch user: dropdown menu for sorting products (option Price (high to low) works correctly)',()=>{
        cy.loginAsPerformance();
        cy.resetAppStateButton();
        cy.get('.product_sort_container').select('hilo');
        cy.checkSortingProductsHighToLow();
    })

    it('performance glitch user: all products have a correct name on their own page',()=>{
        cy.loginAsPerformance();
        cy.checkProductNamesOnTheirPage();
    })

    it('performance glitch user: all products have a correct description on their own page',()=>{
        cy.loginAsPerformance();
        cy.checkProductDescriptionOnTheirPage();
    })

    it('performance glitch user: all products have correct price on their own page',()=>{
        cy.loginAsPerformance();
        cy.checkProductPriceOnTheirPage();
    })

    it('performance glitch user: all products have a functional "add to cart button"/"remove" button on their own page',()=>{           
        cy.loginAsPerformance();
        cy.resetAppStateButton();
        cy.checkAddToCartButtonOnProductPage();
    })

})