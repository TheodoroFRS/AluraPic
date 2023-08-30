describe('Pagina de login, cenário incorreto', () => {
    beforeEach(() => {
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home');

    })


    it('Deve verificar a mensagem de dado obrigatório no loginUserName e loginPassword', () => {
        cy.getByData('loginUserName').type('11111')
        cy.getByData('loginPassword').type('11111')
        cy.getByData('loginBtn').click()
        cy.on('window:alert',(t) => {
            expect(t).to.contains('Invalid user name or password');
        });
        
        cy.get('.text-danger').contains('User name is required!');
        cy.get('.text-danger').contains('Password is required!');
    });


});
