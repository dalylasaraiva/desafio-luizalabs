# Desafio Luiza Labs

O desafio proposto solicitou a criação de casos de teste para a aplicação web disponível em `https://maratona-discover-devfinance.netlify.app/#`, bem como a automação desses testes. Além disso, foi solicitado encontrar uma API pública, criar casos de teste para ela e automatizá-los. A API escolhida para esse propósito foi `https://serverest.dev/`.

# Pré-requisitos

Antes de começar, garanta que os seguintes sistemas estejam instalados em seu computador.

- [Node.js](https://nodejs.org/en/)
- npm (é necessário porém é instalado junto com o Node na versão para Windows)
- Git
- Visual Studio Code


## Como executar o teste:
1. Clone o projeto: `git clone https://github.com/dalylasaraiva/desafio-luizalabs.git`.
2. Abra a pasta do projeto que estar no repositório que foi baixado do github: `desafio-Luizalabs`.
3. Instale as dependências do projeto: `npm install`.
4. Execute o teste: `npx cypress open`.
5. Clique na opção E2E Testing
6. Escolha o navegador de sua preferencia
7. Após a janela de execução do cypress ser aberta, clique em "apiTest.cy.js" para executar os testes de API
8. Aguarde o teste finalizar.
9. Agora clique em "devfinance.cy.js" para executar os testes Web
10. Aguarde o teste finalizar.

## OBS:
Os casos de testes estão em um arquivo PDF na pasta raiz do projeto
O código do teste de Web está localizado em: `cypress\e2e\web\devfinance.cy.js`
O código do teste de API está localizado em: `cypress\e2e\api\apiTest.cy.js`

