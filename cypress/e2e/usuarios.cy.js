const faker = require('faker')

describe('Testes de chamadas HTTP', () => {

  const apiUrl = 'https://serverest.dev'

  let userId = ''

  it('Cadastrar um usuário', () => {
    const nome = faker.name.findName()
    const email = faker.internet.email()

    cy.request({
      method: 'POST',
      url: `${apiUrl}/usuarios`,
      body: {
        nome: nome,
        email: email,
        password: 'password123',
        administrador: 'true'
      }
    }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body).to.have.property('message', 'Cadastro realizado com sucesso')
      userId = response.body._id
    })
  })

  it('Editar um usuário', () => {
    const nome = faker.name.findName()
    const email = faker.internet.email()

    cy.request({
      method: 'PUT',
      url: `${apiUrl}/usuarios/${userId}`,
      body: {
        nome: nome,
        email: email,
        password: 'password321',
        administrador: 'false'
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('message', 'Registro alterado com sucesso')
    })
  })

  it('Buscar usuário por id', () => {
    cy.request({
      method: 'GET',
      url: `${apiUrl}/usuarios/${userId}`
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.not.be.null
    })
  })

  it('Excluir usuário por id', () => {
    cy.request({
      method: 'DELETE',
      url: `${apiUrl}/usuarios/${userId}`
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('message', 'Registro excluído com sucesso')
    })
  })

})
