describe("login tests",()=>{
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
//standard user
    it("standard user: all elements exist and are visible on the cart page",()=>{
        cy.loginAsStandard();
        cy.resetAppStateButton();
        cy.xpath("//a[@class='shopping_cart_link']").click();
        cy.CartElementsExistVisible();
    })

    it('standard user: all products can be added to cart from inventory page and are displayed in correct order on cart page',()=>{
        cy.loginAsStandard();
        cy.resetAppStateButton();
        cy.CheckOrderOfAddedElementsInCart();
    })

    it('standard user: all products can be added to cart from each item'+"'"+'s page and are displayed in correct order on cart page',()=>{
        cy.loginAsStandard();
        cy.resetAppStateButton();
        cy.CheckOrderOfAddedElementsInCartFromItemPage();
    })

    it("standard user: all products can be removed from the cart page",()=>{
        cy.loginAsStandard();
        cy.resetAppStateButton();
        cy.AddAllToCart();
        cy.xpath("//a[@class='shopping_cart_link']").click();
        cy.CheckRemovingFromCart();
    })

    it("standard user: no products are displayed on the cart page after removing them from cart on inventory page",()=>{
        cy.loginAsStandard();
        cy.resetAppStateButton();
        cy.AddAllToCart();
        cy.RemoveAllFromCart();
        cy.xpath("//a[@class='shopping_cart_link']").click();
        cy.get('div.cart_item').should("not.exist");
    })

    it("standard user: no products are displayed on the cart page after removing them from cart on their own pages",()=>{
        cy.loginAsStandard();
        cy.resetAppStateButton();
        cy.AddAllToCart();
        cy.RemoveAllFromCartFromProductPages();
        cy.xpath("//a[@class='shopping_cart_link']").click();
        cy.get('div.cart_item').should("not.exist");
    })

    it("standard user: all products have correct names on the cart page",()=>{
        cy.loginAsStandard();
        cy.resetAppStateButton();
        cy.AddAllToCart();
        cy.xpath("//a[@class='shopping_cart_link']").click();
        cy.CheckElementsInCart('.cart_item .inventory_item_name','name');
    })

    it("standard user: all products have correct descriptions on the cart page",()=>{
        cy.loginAsStandard();
        cy.resetAppStateButton();
        cy.AddAllToCart();
        cy.xpath("//a[@class='shopping_cart_link']").click();
        cy.CheckElementsInCart('.cart_item .inventory_item_desc','desc');
    })

    it("standard user: all products have correct prices on the cart page",()=>{
        cy.loginAsStandard();
        cy.resetAppStateButton();
        cy.AddAllToCart();
        cy.xpath("//a[@class='shopping_cart_link']").click();
        cy.CheckElementsInCart('.cart_item .inventory_item_price','price');
    })
// problem user
    it("problem user: all elements exist and are visible on the cart page",()=>{
        cy.loginAsProblem();
        cy.resetAppStateButton();
        cy.xpath("//a[@class='shopping_cart_link']").click();
        cy.CartElementsExistVisible();
    })

    it('problem user: all products can be added to cart from inventory page and are displayed in correct order on cart page',()=>{
        cy.loginAsProblem();
        cy.resetAppStateButton();
        cy.CheckOrderOfAddedElementsInCart();
    })

    it('problem user: all products can be added to cart from each item'+"'"+'s page and are displayed in correct order on cart page',()=>{
        cy.loginAsProblem();
        cy.resetAppStateButton();
        cy.CheckOrderOfAddedElementsInCartFromItemPage();
    })

    it("problem user: all products can be removed from the cart page",()=>{
        cy.loginAsProblem();
        cy.resetAppStateButton();
        cy.AddAllToCart();
        cy.xpath("//a[@class='shopping_cart_link']").click();
        cy.CheckRemovingFromCart();
    })

    it("problem user: no products are displayed on the cart page after removing them from cart on inventory page",()=>{
        cy.loginAsProblem();
        cy.resetAppStateButton();
        cy.AddAllToCart();
        cy.RemoveAllFromCart();
        cy.xpath("//a[@class='shopping_cart_link']").click();
        cy.get('div.cart_item').should("not.exist");
    })

    it("problem user: no products are displayed on the cart page after removing them from cart on their own pages",()=>{
        cy.loginAsProblem();
        cy.resetAppStateButton();
        cy.AddAllToCart();
        cy.RemoveAllFromCartFromProductPages();
        cy.xpath("//a[@class='shopping_cart_link']").click();
        cy.get('div.cart_item').should("not.exist");
    })

    it("problem user: all products have correct names on the cart page",()=>{
        cy.loginAsProblem();
        cy.resetAppStateButton();
        cy.AddAllToCart();
        cy.xpath("//a[@class='shopping_cart_link']").click();
        cy.CheckElementsInCart('.cart_item .inventory_item_name','name');
    })

    it("problem user: all products have correct descriptions on the cart page",()=>{
        cy.loginAsProblem();
        cy.resetAppStateButton();
        cy.AddAllToCart();
        cy.xpath("//a[@class='shopping_cart_link']").click();
        cy.CheckElementsInCart('.cart_item .inventory_item_desc','desc');
    })

    it("problem user: all products have correct prices on the cart page",()=>{
        cy.loginAsProblem();
        cy.resetAppStateButton();
        cy.AddAllToCart();
        cy.xpath("//a[@class='shopping_cart_link']").click();
        cy.CheckElementsInCart('.cart_item .inventory_item_price','price');
    })
// error user
    it("error user: all elements exist and are visible on the cart page",()=>{
        cy.loginAsError();
        cy.resetAppStateButton();
        cy.xpath("//a[@class='shopping_cart_link']").click();
        cy.CartElementsExistVisible();
    })

    it('error user: all products can be added to cart from inventory page and are displayed in correct order on cart page',()=>{
        cy.loginAsError();
        cy.resetAppStateButton();
        cy.CheckOrderOfAddedElementsInCart();
    })

    it('error user: all products can be added to cart from each item'+"'"+'s page and are displayed in correct order on cart page',()=>{
        cy.loginAsError();
        cy.resetAppStateButton();
        cy.CheckOrderOfAddedElementsInCartFromItemPage();
    })

    it("error user: all products can be removed from the cart page",()=>{
        cy.loginAsError();
        cy.resetAppStateButton();
        cy.AddAllToCart();
        cy.xpath("//a[@class='shopping_cart_link']").click();
        cy.CheckRemovingFromCart();
    })

    it("error user: no products are displayed on the cart page after removing them from cart on inventory page",()=>{
        cy.loginAsError();
        cy.resetAppStateButton();
        cy.AddAllToCart();
        cy.RemoveAllFromCart();
        cy.xpath("//a[@class='shopping_cart_link']").click();
        cy.get('div.cart_item').should("not.exist");
    })

    it("error user: no products are displayed on the cart page after removing them from cart on their own pages",()=>{
        cy.loginAsError();
        cy.resetAppStateButton();
        cy.AddAllToCart();
        cy.RemoveAllFromCartFromProductPages();
        cy.xpath("//a[@class='shopping_cart_link']").click();
        cy.get('div.cart_item').should("not.exist");
    })

    it("error user: all products have correct names on the cart page",()=>{
        cy.loginAsError();
        cy.resetAppStateButton();
        cy.AddAllToCart();
        cy.xpath("//a[@class='shopping_cart_link']").click();
        cy.CheckElementsInCart('.cart_item .inventory_item_name','name');
    })

    it("error user: all products have correct descriptions on the cart page",()=>{
        cy.loginAsError();
        cy.resetAppStateButton();
        cy.AddAllToCart();
        cy.xpath("//a[@class='shopping_cart_link']").click();
        cy.CheckElementsInCart('.cart_item .inventory_item_desc','desc');
    })

    it("error user: all products have correct prices on the cart page",()=>{
        cy.loginAsError();
        cy.resetAppStateButton();
        cy.AddAllToCart();
        cy.xpath("//a[@class='shopping_cart_link']").click();
        cy.CheckElementsInCart('.cart_item .inventory_item_price','price');
    })
// visual user
    it("visual user: all elements exist and are visible on the cart page",()=>{
        cy.loginAsVisual();
        cy.resetAppStateButton();
        cy.xpath("//a[@class='shopping_cart_link']").click();
        cy.CartElementsExistVisible();
    })

    it('visual user: all products can be added to cart from inventory page and are displayed in correct order on cart page',()=>{
        cy.loginAsVisual();
        cy.resetAppStateButton();
        cy.CheckOrderOfAddedElementsInCart();
    })

    it('visual user: all products can be added to cart from each item'+"'"+'s page and are displayed in correct order on cart page',()=>{
        cy.loginAsVisual();
        cy.resetAppStateButton();
        cy.CheckOrderOfAddedElementsInCartFromItemPage();
    })

    it("visual user: all products can be removed from the cart page",()=>{
        cy.loginAsVisual();
        cy.resetAppStateButton();
        cy.AddAllToCart();
        cy.xpath("//a[@class='shopping_cart_link']").click();
        cy.CheckRemovingFromCart();
    })

    it("visual user: no products are displayed on the cart page after removing them from cart on inventory page",()=>{
        cy.loginAsVisual();
        cy.resetAppStateButton();
        cy.AddAllToCart();
        cy.RemoveAllFromCart();
        cy.xpath("//a[@class='shopping_cart_link']").click();
        cy.get('div.cart_item').should("not.exist");
    })

    it("visual user: no products are displayed on the cart page after removing them from cart on their own pages",()=>{
        cy.loginAsVisual();
        cy.resetAppStateButton();
        cy.AddAllToCart();
        cy.RemoveAllFromCartFromProductPages();
        cy.xpath("//a[@class='shopping_cart_link']").click();
        cy.get('div.cart_item').should("not.exist");
    })

    it("visual user: all products have correct names on the cart page",()=>{
        cy.loginAsVisual();
        cy.resetAppStateButton();
        cy.AddAllToCart();
        cy.xpath("//a[@class='shopping_cart_link']").click();
        cy.CheckElementsInCart('.cart_item .inventory_item_name','name');
    })

    it("visual user: all products have correct descriptions on the cart page",()=>{
        cy.loginAsVisual();
        cy.resetAppStateButton();
        cy.AddAllToCart();
        cy.xpath("//a[@class='shopping_cart_link']").click();
        cy.CheckElementsInCart('.cart_item .inventory_item_desc','desc');
    })

    it("visual user: all products have correct prices on the cart page",()=>{
        cy.loginAsVisual();
        cy.resetAppStateButton();
        cy.AddAllToCart();
        cy.xpath("//a[@class='shopping_cart_link']").click();
        cy.CheckElementsInCart('.cart_item .inventory_item_price','price');
    })
// performance glitch user 
    it.only("performance glitch user: all elements exist and are visible on the cart page",()=>{
        cy.loginAsPerformance();
        cy.resetAppStateButton();
        cy.xpath("//a[@class='shopping_cart_link']").click();
        cy.CartElementsExistVisible({setTimeout:20000});
    })

    it('performance glitch user: all products can be added to cart from inventory page and are displayed in correct order on cart page',()=>{
        cy.loginAsPerformance();
        cy.resetAppStateButton();
        cy.CheckOrderOfAddedElementsInCart({setTimeout:20000});
    })

    it('performance glitch user: all products can be added to cart from each item'+"'"+'s page and are displayed in correct order on cart page',()=>{
        cy.loginAsPerformance();
        cy.resetAppStateButton();
        cy.CheckOrderOfAddedElementsInCartFromItemPage({setTimeout:20000});
    })

    it("performance glitch user: all products can be removed from the cart page",()=>{
        cy.loginAsPerformance();
        cy.resetAppStateButton();
        cy.AddAllToCart({setTimeout:20000});
        cy.xpath("//a[@class='shopping_cart_link']").click();
        cy.CheckRemovingFromCart({setTimeout:20000});
    })

    it("performance glitch user: no products are displayed on the cart page after removing them from cart on inventory page",()=>{
        cy.loginAsPerformance();
        cy.resetAppStateButton();
        cy.AddAllToCart({setTimeout:20000});
        cy.RemoveAllFromCart({setTimeout:20000});
        cy.xpath("//a[@class='shopping_cart_link']").click();
        cy.get('div.cart_item').should("not.exist");
    })

    it("performance glitch user: no products are displayed on the cart page after removing them from cart on their own pages",()=>{
        cy.loginAsPerformance();
        cy.resetAppStateButton();
        cy.AddAllToCart({setTimeout:20000});
        cy.RemoveAllFromCartFromProductPages({setTimeout:20000});
        cy.xpath("//a[@class='shopping_cart_link']").click();
        cy.get('div.cart_item').should("not.exist");
    })

    it("performance glitch user: all products have correct names on the cart page",()=>{
        cy.loginAsPerformance();
        cy.resetAppStateButton();
        cy.AddAllToCart({setTimeout:20000});
        cy.xpath("//a[@class='shopping_cart_link']").click();
        cy.CheckElementsInCart('.cart_item .inventory_item_name','name');
    })

    it("performance glitch user: all products have correct descriptions on the cart page",()=>{
        cy.loginAsPerformance();
        cy.resetAppStateButton();
        cy.AddAllToCart({setTimeout:20000});
        cy.xpath("//a[@class='shopping_cart_link']").click();
        cy.CheckElementsInCart('.cart_item .inventory_item_desc','desc');
    })

    it("performance glitch user: all products have correct prices on the cart page",()=>{
        cy.loginAsPerformance();
        cy.resetAppStateButton();
        cy.AddAllToCart({setTimeout:20000});
        cy.xpath("//a[@class='shopping_cart_link']").click();
        cy.CheckElementsInCart('.cart_item .inventory_item_price','price');
    })
})