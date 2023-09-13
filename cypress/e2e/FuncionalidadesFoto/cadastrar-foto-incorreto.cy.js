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
        cy.get('[type="file"]').selectFile('TheodoroFRS_AluraPic.txt', {force:true})
        cy.get('.form-control').type('git')
        cy.get('[type="submit"]').click()

        //erro
        cy.get('ap-alert > .text-center').contains('Upload error!'); 

        cy.wait(5000)

        //volta
        cy.get(".row > :nth-child(1) > a > .fa").click() 

        cy.wait(5000)

    });


});
