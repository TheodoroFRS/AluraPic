describe('Pagina de cadastro, cenário de cadastro com sucesso', () => {
    beforeEach(() => {
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home');

    })


    it('Deve realizar cadastro com sucesso', () => {
        cy.getByData("register").click()
        cy.getByData('email').type('testeuser@gmail.com')
        cy.getByData('fullName').type('testeuser')
        cy.getByData('registerUserName').type('testeuser')
        cy.getByData('registerPassword').type('testeuser123')
        cy.getByData('btnRegister').click()
    });

});
