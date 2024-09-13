import LoginPage from '../pages/login_page';

describe('login page tests', () => {
    it('login', () => {
        LoginPage.go_to_login_page();
        LoginPage.fill_email();
        LoginPage.fill_password();
        LoginPage.click_button();
        cy.url().should('equal', 'https://dev.abra-market.com/');
        cy.task('select', `select id from "user" u where email = 'seller@gmail.com'`).should('have.length', 1)
    })
})
