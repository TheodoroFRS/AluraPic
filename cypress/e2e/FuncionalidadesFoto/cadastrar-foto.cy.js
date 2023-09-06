describe('Funcionalidades Foto, cenário de sucesso', () => {
    // beforeEach(() => {
    //     cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home');

    // })


    it('Deve realizar o login com sucesso', () => {
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home');
        //login
        cy.getByData('loginUserName').type('testeuser')
        cy.getByData('loginPassword').type('testeuser123')
        cy.getByData('loginBtn').click()

        //Deve cadastrar com sucesso uma foto'
        cy.wait(1000)
        cy.get(':nth-child(2) > a > .fa').click()
        cy.get('[type="file"]').selectFile('Theo.jpg', {force:true})
        cy.get('.form-control').type('Eu')
        cy.get('[type="submit"]').click()

        //Deve dar like e comentar na foto
        cy.get(':nth-child(1) > :nth-child(1) > a > ap-card > .card > .card-block > ap-photo > .img-thumbnail').click()
        cy.get('.fa-heart-o').click()
        cy.get('.form-control').type('Bem 10')
        cy.get('.btn').click()    

        //volta
        cy.get(".row > :nth-child(1) > a > .fa").click() 

        cy.wait(5000)

        //Deve Remover uma foto com sucesso
        cy.get(':nth-child(1) > :nth-child(1) > a > ap-card > .card > .card-block > ap-photo > .img-thumbnail').click()   
        cy.get('.fa-trash-o').click()    



    });




});
