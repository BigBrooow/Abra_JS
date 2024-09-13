describe('base page tests', () => {
    beforeEach(() => {
        cy.visit('https://dev.abra-market.com/');
        cy.setCookie('access_token_cookie', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjExLCJpYXQiOjE3MjEwNjE1ODYsIm5iZiI6MTcyMTA2MTU4NiwianRpIjoiOTEwNDY2OGUtYWRjYy00MGNkLTk1YTUtMmRiN2QwY2IyMzhjIiwiZXhwIjoxNzIxNjY2Mzg2LCJ0eXBlIjoiYWNjZXNzIiwiZnJlc2giOmZhbHNlfQ.gkK2mvQnrpqWGy6vCFVqn6K_Vpb1FBReXyiPfzHLcKY');
        cy.setCookie('refresh_token_cookie', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjExLCJpYXQiOjE3MjEwNjE1ODYsIm5iZiI6MTcyMTA2MTU4NiwianRpIjoiOThhZmJjNDYtZTZhOS00NTQ3LTg1YjgtMjY0NTFjY2MyMDU4IiwiZXhwIjoxNzIzNDgwNzg2LCJ0eXBlIjoicmVmcmVzaCJ9.xtCYD1OfMysVh3NKi9xwOHr1xHDj0Qzd2O8WaxfBT-k');
        cy.reload();
    })

    it('base page', () => {
        cy.url().should('equal', 'https://dev.abra-market.com/');
    })
})
