/// <reference types="cypress" />
import users from "../../fixtures/user.json"

describe('API Success scenarios', () => {
    const user = users;
    let userId;

    beforeEach(() => {
        cy.createUser(user.user1)
            .then((response) => {
                expect(response.status).to.eql(201);
                expect(response.body).to.have.property('message', 'Cadastro realizado com sucesso');
                userId = response.body._id;
        });
    });

    afterEach(() => {
        if (userId) {
            cy.deleteUser(userId)
                .then((response) => {
                    expect(response.status).to.eql(200);
                    expect(response.body).to.have.property('message', 'Registro excluído com sucesso');
            });
        }
    });

    it('Edit User', () => {
        cy.editUser(user.user2, userId)
            .then((response) => {
                expect(response.status).to.eql(200);
                expect(response.body).to.have.property('message', 'Registro alterado com sucesso');
        });
    });

    it('Get User', () => {
        cy.getUser(userId)
            .then((response) => {
                expect(response.status).to.eql(200);
                expect(response.body).to.have.property('nome', user.user1.nome);
                expect(response.body).to.have.property('email', user.user1.email);
                expect(response.body).to.have.property('password', user.user1.password);
                expect(response.body).to.have.property('administrador', user.user1.administrador);
                expect(response.body).to.have.property('_id', userId);
        });
    });
});
