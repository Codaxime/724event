describe('Test API - Formulaire de contact', () => {
  it('POST - Envoyer un formulaire valide', () => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:8080/api/contact/',
      body: {
        name: 'Doe',
        surname: 'Jhon',
        contactType: 'Personnel',
        email: 'johndoe@test.tld',
        message: 'Exemple de message'
      }
    }).then((response) => {
      expect(response.status).to.eq(201); // ou 200
      expect(response.body).to.have.property('message', 'Merci de nous avoir contacté !');
    });
  });
});
