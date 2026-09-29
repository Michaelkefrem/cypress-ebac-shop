# 🧪 Cypress EBAC Shop – Testes E2E automatizados

Projeto de testes automatizados end-to-end da loja de demonstração [EBAC Shop](http://lojaebac.ebaconline.art.br), desenvolvido com **Cypress** durante o curso de Teste de Software da EBAC e ampliado com cenários, verificações e investigações próprias.

Além de automatizar os fluxos principais da loja, o projeto documenta problemas reais encontrados durante os testes, como em um trabalho de QA.

## 🛠️ Tecnologias

- [Cypress](https://www.cypress.io/) – automação de testes E2E
- JavaScript
- [Faker](https://fakerjs.dev/) – geração de dados aleatórios para os testes
- Git e GitHub

## ✅ Cenários testados

### Login (`cypress/e2e/login.cy.js`)

| Cenário | Tipo |
|---|---|
| Login com credenciais válidas | Positivo |
| Mensagem de erro com senha inválida | Negativo |
| Mensagem de erro com usuário inválido | Negativo |

### Pré-cadastro (`cypress/e2e/pre-cadastro.cy.js`)

| Cenário | Tipo |
|---|---|
| Cadastro de novo usuário e preenchimento dos detalhes da conta, com verificação de que nome, sobrenome e e-mail foram salvos | Positivo |

Os dados (e-mail, nome e sobrenome) são gerados com o Faker a cada execução, evitando conflito com usuários já cadastrados.

### Produtos (`cypress/e2e/produtos.cy.js`)

| Cenário | Tipo |
|---|---|
| Seleção de um produto na lista | Positivo |
| Adição de produto ao carrinho com cor, tamanho e quantidade, com verificação do contador e da mensagem de sucesso | Positivo |

A quantidade é definida em uma variável, o que permite repetir o teste com valores diferentes.

## 💡 Boas práticas aplicadas

- **Testes independentes:** cada teste prepara o próprio cenário com `beforeEach`, respeitando o isolamento de testes do Cypress.
- **Evidências:** o `afterEach` gera um print ao final de cada teste.
- **Dados dinâmicos:** uso de variáveis e do Faker em vez de valores fixos repetidos no código.
- **Verificações que confirmam o resultado:** os testes conferem que os dados foram salvos, e não apenas que uma mensagem apareceu.

## 🐞 Achados durante os testes

Durante a automação, alguns comportamentos da loja chamaram atenção:

1. **Enumeração de usuários no login:** a mensagem de erro é diferente para "senha incorreta" e "usuário não registrado", o que revela quais e-mails existem na base. A prática recomendada é exibir uma mensagem genérica nos dois casos.
2. **Erro de JavaScript no carregamento da página:** o site lança o erro `Cannot read properties of null (reading 'document')`, que fazia os testes falharem. No projeto, o erro é tratado em `cypress/support/e2e.js`, mas em um projeto real ele deveria ser reportado ao time de desenvolvimento.
3. **Quantidades no carrinho (em investigação):** a mensagem de sucesso muda conforme a quantidade adicionada. Os próximos passos incluem testar valores limite, como 0, números negativos e quantidades acima do estoque.

📄 O relatório detalhado de cada achado está em construção.

## ▶️ Como executar

Pré-requisito: [Node.js](https://nodejs.org) instalado.

```bash
# Clonar o repositório
git clone https://github.com/Michaelkefrem/cypress-ebac-shop.git
cd cypress-ebac-shop

# Instalar as dependências
npm install

# Abrir o Cypress no modo visual
npx cypress open

# Ou rodar todos os testes no terminal
npx cypress run
```

## 🚧 Próximos passos

- [ ] Relatório de bugs com evidências
- [ ] Testes de valor limite no carrinho
- [ ] Comandos customizados (ex.: `cy.login()`)
- [ ] Uso de fixtures para os dados de teste
- [ ] Testes de API
- [ ] Execução automática com GitHub Actions

## 👤 Autor

**Michael Kefrem Rodrigues de Carvalho**
Estudante de Análise e Desenvolvimento de Sistemas | QA em formação