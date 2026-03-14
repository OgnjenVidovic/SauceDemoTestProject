describe('checkout page tests',()=>{
    
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

    it('All elements exist and are visible on the first step of checkout page',()=>{
        cy.loginAsStandard();
        cy.CheckoutElementsExistVisible();
    })

    it('Filling out form and continue button works on the first step of checkout page',()=>{
        cy.loginAsStandard();
        cy.xpath("//a[@class='shopping_cart_link']").click();
        cy.xpath("//button[@id='checkout']").click();
        cy.FillOutCheckoutForm();
    })
    
})