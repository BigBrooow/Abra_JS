import {random_email} from '../utils/generator';

describe('register', () => {
    it('seller', () => {
        cy.request({
            metod: 'POST',
            url: '/auth/sing-up/seller',
            body: {
                'email': random_email(),
                'password': '1234'
            }
        }).then(response => {
            cy.log(response['body'])
            expect(response['status']).to.equal(200)
        })
    })
})
