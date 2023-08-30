describe('Pagina de cadastro, cenário de cadastro incorreto ', () => {
    beforeEach(() => {
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home');

    })


    it('Usuario NÃO deve conseguir cadastrar, pois falta a senha', () => {
        cy.getByData("register").click()
        cy.getByData('email').type('testeuser@gmail.com')
        cy.getByData('fullName').type('testeuser')
        cy.getByData('registerUserName').type('testeuser')
       // cy.getByData('registerPassword').type('testeuser123')
        cy.getByData('btnRegister').click()
        cy.get('.text-danger').contains('Password is required!');
    });

    it('Usuario NÃO deve conseguir cadastrar, pois falta o email', () => {
        cy.getByData("register").click()
        // cy.getByData('email').type('testeuser@gmail.com')
        cy.getByData('fullName').type('testeuser')
        cy.getByData('registerUserName').type('testeuser')
        cy.getByData('registerPassword').type('testeuser123')
        cy.getByData('btnRegister').click()
        cy.get('.text-danger').contains('Email is required!');
    });

    it('Usuario NÃO deve conseguir cadastrar, pois falta o fullName', () => {
        cy.getByData("register").click()
        cy.getByData('email').type('testeuser@gmail.com')
        //cy.getByData('fullName').type('testeuser')
        cy.getByData('registerUserName').type('testeuser')
        cy.getByData('registerPassword').type('testeuser123')
        cy.getByData('btnRegister').click()
        cy.get('.text-danger').contains('Full name is required!');
    });

    it('Usuario NÃO deve conseguir cadastrar, pois falta o UserName', () => {
        cy.getByData("register").click()
        cy.getByData('email').type('testeuser@gmail.com')
        cy.getByData('fullName').type('testeuser')
        //cy.getByData('registerUserName').type('testeuser')
        cy.getByData('registerPassword').type('testeuser123')
        cy.getByData('btnRegister').click()
        cy.get('.text-danger').contains('User name is required!');
    });


    it('Usuario NÃO deve conseguir cadastrar, pois falta o email e a senha', () => {
        cy.getByData("register").click()
        // cy.getByData('email').type('testeuser@gmail.com')
        cy.getByData('fullName').type('testeuser')
        cy.getByData('registerUserName').type('testeuser')
        //cy.getByData('registerPassword').type('testeuser123')
        cy.getByData('btnRegister').click()
        cy.get('.text-danger').contains('Password is required!');
        cy.get('.text-danger').contains('Email is required!');
    });


});
