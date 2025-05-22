// Sélectionne une catégorie ("Personnel" ou "Entreprise") dans la liste déroulante
function selectCategory(option) {
    cy.get('.SelectContainer.large .Select [data-testid="cat"]').click();
    cy.get('.SelectContainer.large .Select li').should('be.visible');
    cy.contains('li', option).click();
  }
  // Remplit tous les champs du formulaire de contact avec des valeurs de test
  function fillForm() {
    cy.get('[data-testid="button-test-id"][title="contact"]').click()
      .should('exist')
      .should('be.visible');
  
    cy.get('div.inputField').contains('Nom').parent().find('input[name="field-name"]').type('Doe');
    cy.get('div.inputField').contains('Prénom').parent().find('input[name="field-name"]').type('John');
    cy.get('div.inputField').contains('Email').parent().find('input[name="field-name"]').type('john.doe@example.com');
    cy.get('div.inputField').contains('Message').parent().find('textarea[name="field-name"]').type('Bonjour, ceci est un message de test.');
  }
  
  describe('Contact form', () => {
    ['Personnel', 'Entreprise'].forEach((option) => { // Boucle sur les différentes catégories pour tester chaque option
      it(`Fills out and successfully submits the form - catégorie ${option}`, () => {
        cy.visit('http://localhost:3000');
        fillForm(); // Remplissage du formulaire avec des données simulées
        selectCategory(option); // Sélectionne la catégorie spécifiée dans le formulaire
  
        // Soumettre le formulaire
        cy.get('input[data-testid="button-test-id"][value*="Envoyer"]').click();
  
        // Vérifier la soumission réussie
        cy.contains('Merci de nous avoir contacté !').should('be.visible');
      });
    });
  });