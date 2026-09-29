// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Ignora erros vindos do código do site (não do teste).
// Sem isso, o Cypress falha o teste sempre que o site tem um erro de JavaScript.
// return false = "não falhe o teste, continue".
// Obs.: em projeto real, esse erro deveria ser reportado aos devs.
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})