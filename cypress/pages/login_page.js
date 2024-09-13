class LoginPage {
    elements = {
        email_field: () => cy.get('#root > div > div > div > form > div:nth-child(1) > input'),
        password_field: () => cy.get('#root > div > div > div > form > div.Input_wrapper__NS9mM.LoginForm_input_wrapper__YMxsW > input'),
        login_button: () => cy.get('#root > div > div > div > form > button'),
    }

    go_to_login_page() {
        cy.visit('https://dev.abra-market.com/login');
    }

    fill_email() {
        this.elements.email_field().type('seller@gmail.com');
    }

    fill_password() {
        this.elements.password_field().type('Password1!');
        this.elements.email_field().click();
    }

    click_button() {
        this.elements.login_button().click();
    }
}

module.exports = new LoginPage();
