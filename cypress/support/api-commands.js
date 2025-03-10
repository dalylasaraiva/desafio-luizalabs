Cypress.Commands.add('createUser', (document) => {
    cy.request({
        method: 'POST',
        url: 'https://serverest.dev/usuarios', 
        body: document                
    })
}) 

Cypress.Commands.add('deleteUser', (id) => {
    cy.request({
        method: 'DELETE',
        url: `https://serverest.dev/usuarios/${id}`             
    })
}) 

Cypress.Commands.add('editUser', (document, id) => {
    cy.request({
        method: 'PUT',
        url: `https://serverest.dev/usuarios/${id}`,
        body: document          
    })
})

Cypress.Commands.add('getUser', (id) => {
    cy.request({
        method: 'GET',
        url: `https://serverest.dev/usuarios/${id}`         
    })
})