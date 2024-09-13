class MainPage{
    elements = {
        login_button: () => cy.get('#root > div > div > div > div.MobileHeader_center_wrapper__Q9WHk > div > div.HeaderActions_wrapper__XHOQi > div > a.Button_button__-\+nph.Button_default__-O1V0.HeaderGuestUserActions_button__shKsk'),
        register_button: () => cy.get('#root > div > div > header > div.Top_wrapper__2Cx8N > div > div.HeaderActions_wrapper__XHOQi > div > a.Button_button__-\+nph.Button_light_red__G4Gow.HeaderGuestUserActions_button__shKsk'),        
    }

    go_to_main_page(){
        cy.visit('https://dev.abra-market.com/');
    }

    click_login_button(){
        this.elements.login_button().click();
    }

    click_register_button(){
        this.elements.register_button().click();
    }
}

module.exports = new MainPage();