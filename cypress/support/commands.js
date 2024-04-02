Cypress.Commands.add('PreencherRegistroEConfirmar', (primeiroNome, ultimoNome, email, empresa, senha, confirmeSenha,) => {
  cy.get('#FirstName').type(primeiroNome)
  cy.get('#LastName').type(ultimoNome)
  cy.get('select[name="DateOfBirthDay"]').select('18')
  cy.get('select[name="DateOfBirthDay"]').should('have.value', '18')
  cy.get('select[name="DateOfBirthMonth"]').select('1')
  cy.get('select[name="DateOfBirthMonth"]').should('have.value', '1')
  cy.get('select[name="DateOfBirthYear"]').select('1990')
  cy.get('select[name="DateOfBirthYear"]').should('have.value', '1990')
  cy.get('#Email').type(email)
  cy.get('#Company').type(empresa)
  cy.get('#Password').type(senha, { log: false })
  cy.get('#ConfirmPassword').type(confirmeSenha, { log: false })
  cy.get('#register-button').click()
})

Cypress.Commands.add('CamposObrigatorios', () => {
  cy.get('#register-button').click()

})
