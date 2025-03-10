Cypress.Commands.add('createTransactions', (data) => {
    cy.contains('a', '+ Nova transação').click()
    cy.get('#description').type(data.description)
    cy.get('#amount').type(data.amount)
    cy.get('#date').type(data.date)
    cy.contains('button', 'Salvar').click()
    })