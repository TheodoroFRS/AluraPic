describe('Pagina de login, cenário de sucesso', () => {
    beforeEach(() => {
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home');

    })


    it('Deve realizar cadastro com sucesso', () => {
        cy.getByData('loginUserName').type('testeuser')
        cy.getByData('loginPassword').type('testeuser123')
        cy.getByData('loginBtn').click()
    });

});
