describe('SauceDemo Automation Tests', () => {
    // Before each test, visit the login page
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    });

    // Helper function for login
    const login = (username, password) => {
        cy.get('#user-name').type(username);
        cy.get('#password').type(password);
        cy.get('#login-button').click();
        cy.url().should('include', '/inventory.html'); // Verify successful login
    };

    // --- Test Case 1: Login, add "Sauce Labs Backpack" and verify ---
    it('should login, add Sauce Labs Backpack to cart, and verify item', () => {
        login('standard_user', 'secret_sauce');

        // Add "Sauce Labs Backpack" to cart
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('.shopping_cart_link').click(); // Go to cart

        // Verify item in cart
        cy.get('.cart_list').should('contain', 'Sauce Labs Backpack');
        cy.get('.cart_quantity').should('have.text', '1'); // Check quantity
    });

    // --- Test Case 2: Login, add "Sauce Labs Fleece Jacket" and verify ---
    it('should login, add Sauce Labs Fleece Jacket to cart, and verify item', () => {
        login('standard_user', 'secret_sauce');

        // Add "Sauce Labs Fleece Jacket" to cart
        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
        cy.get('.shopping_cart_link').click(); // Go to cart

        // Verify item in cart
        cy.get('.cart_list').should('contain', 'Sauce Labs Fleece Jacket');
        cy.get('.cart_quantity').should('have.text', '1'); // Check quantity
    });

    // --- Test Case 3: Login, click hamburger menu, navigate to 'About' and verify ---
    it('should login, navigate to About page via hamburger menu, and verify navigation', () => {
        login('standard_user', 'secret_sauce');

        // Click on hamburger button
        cy.get('#react-burger-menu-btn').click();

        // Click on 'About' link
        cy.get('#about_sidebar_link').click();

        // Verify successful navigation to 'About' page
        cy.url().should('include', 'saucelabs.com');
        cy.title().should('include', 'Sauce Labs'); // Check page title for verification
        
    });
});