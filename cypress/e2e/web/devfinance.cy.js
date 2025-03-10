/// <reference types="cypress" />

describe('devfinance - Success scenarios', () => {

  beforeEach(() => {
    cy.visit('https://maratona-discover-devfinance.netlify.app/#')
  })
  it('Add new transaction', () => {
    const dataTest = {
      description: "Venda do sofá",
      amount: "500.00",
      date: "2025-03-09"
    }

    cy.createTransactions(dataTest)

    //Validations
    cy.get('tr[data-index="0"] td').eq(0).should('have.text', 'Venda do sofá');
    cy.get('tr[data-index="0"] td').eq(1)
      .invoke('text')
      .should('match', /R\$?\s*500,00/);
    cy.get('tr[data-index="0"] td').eq(2).should('have.text', '09/03/2025');

  })

  it('Edit transaction', () => {
    const dataTest = {
      description: "Compra do sofá novo",
      amount: "-700.00",
      date: "2025-03-08"
    }

    cy.createTransactions(dataTest)
    cy.get('img[alt="Editar transação"]').click();
    cy.get('#amount')
      .clear()
      .type("-900.00");
    cy.contains('button', 'Salvar').click()
    
    //Validations
    cy.get('tr[data-index="0"] td').eq(0).should('have.text', 'Compra do sofá novo');
    cy.get('tr[data-index="0"] td').eq(1)
      .invoke('text')
      .should('match', /R\$?\s*900,00/);
    cy.get('tr[data-index="0"] td').eq(2).should('have.text', '08/03/2025');

  })
  
  
  it('Delete transaction', () => {
    const dataTest = {
      description: "Lavagem do carro",
      amount: "60.00",
      date: "2025-03-05"
    }

    cy.createTransactions(dataTest)

    //Validations
    cy.get('tr[data-index="0"] td').should('be.visible');
    cy.get('img[alt="Remover transação"]').click();
    cy.get('tbody').should('be.empty');
  })
})

describe('devfinance - Failure scenario', () => {

  beforeEach(() => {
    cy.visit('https://maratona-discover-devfinance.netlify.app/#')
  })
  it('Validate error message when the field is left blank', () => {
    
    const dataTest = {
      description: " ",
      amount: "500.00",
      date: "2025-03-09"
    }

    cy.createTransactions(dataTest)

    //Validations
    cy.on('window:alert', (text) => {
      console.log('Alerta capturado:', text); // Verifique no Console do Cypress
      expect(text).to.equal('Porfavor preencha todos os campos');
    });      

  })
})