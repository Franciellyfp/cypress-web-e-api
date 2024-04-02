import faker from 'faker'

describe('Casos de Testes da Funcionalidade de Registro', () => {
  beforeEach(() => {
    cy.visit('/register')
  })

  it('Registro com Sucesso', () => {
    const primeiroNome = faker.name.firstName()
    const ultimoNome = faker.name.lastName()
    const email = faker.internet.email()
    const empresa = faker.company.companyName()

    cy.PreencherRegistroEConfirmar(primeiroNome, ultimoNome, email, empresa, '123456', '123456' )

    cy.contains('Your registration completed').should('be.visible')
  })

  it('Enviar Registro Sem Preencher Campos Obrigatórios', () => {
    cy.CamposObrigatorios()

    cy.contains('First name is required.').should('be.visible')
    cy.contains('Last name is required.').should('be.visible')
    cy.contains('Email is required.').should('be.visible')
    cy.contains('Password is required.').should('be.visible')
    cy.contains('Password is required.').should('be.visible')
  })

  it('Validar Mensagem de Erro no Campo Email', () => {
    const primeiroNome = faker.name.firstName()
    const ultimoNome = faker.name.lastName()
    const email = 'teste.com.br'
    const empresa = faker.company.companyName()

    cy.PreencherRegistroEConfirmar(primeiroNome, ultimoNome, email, empresa, '123456', '123456')

    cy.get('#Email').should('have.value', email)
    cy.contains('Wrong email').should('be.visible')
  })

  it('Validar Senha Inválida', () => {
    const primeiroNome = faker.name.firstName()
    const ultimoNome = faker.name.lastName()
    const email = faker.internet.email()
    const empresa = faker.company.companyName()

    cy.PreencherRegistroEConfirmar(primeiroNome, ultimoNome, email, empresa, '1', '1' )

    cy.get('#Password').should('have.value', 1)
    cy.contains('Password must meet the following rules: must have at least 6 characters').should('be.visible')
  })

})