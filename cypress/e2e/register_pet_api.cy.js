import { random_email } from "../utils/generators";
import RegisterResponse from "../utils/checker";

describe('register', () => {
    it('positive', () => {
        cy.request('POST', '/register', {
            'email': random_email(),
            'password': '1234',
            'confirm_password': '1234'
        }).then(({ body }) => {
            expect(RegisterResponse.compare_models(body)).to.equal(true);
        })
    })

    it('wrong password', () => {
        cy.request({
            metod: 'POST',
            url: '/register',
            failOnStatusCode: false,
            body: {
                'email': random_email(),
                'password': '1234',
                'confirm_password': '4321'
            }
        }).then(response => {
            expect(response['status']).to.equal(405);
            expect(RegisterResponse.compare_models(response['body'], false)).to.equal(true);
        })
    })
})