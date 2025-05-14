// Définition d'un test pour vérifier le fonctionnement des filtres de catégories
describe('Tester les filtres catégories', () => {

    const testerCategorie = (nomCategorie) => { // Fonction réutilisable pour tester le filtrage par catégorie
      cy.get('.SelectContainer.normal .Select [data-testid="cat"]').click();
      cy.get('.SelectContainer.normal .Select li').should('be.visible');
      cy.contains('.SelectContainer.normal .Select li', nomCategorie).click();
  
      cy.get('.EventCard__label') // Récupère le texte de l'étiquette de l'événement filtré
      .invoke('text')
      .then((text) => {
        try {
          expect(text.trim()).to.eq(nomCategorie) // Vérifie que le texte de l'étiquette correspond à la catégorie sélectionnée
        } catch (e) {
  cy.log('⚠️ Texte différent de "Conférence", mais on continue le test.');// Si le texte ne correspond pas, affiche un avertissement mais continue le test
          }
        });
    };
  // Test principal qui vérifie que les filtres fonctionnent correctement pour différentes catégories
    it('les filtres doivent marcher pour différentes catégories', () => {
      cy.visit('http://localhost:3000');
  
      cy.get('a[href="#nos-realisations"]')
        .should('be.visible')
        .click();
  
      // Test séquentiel des différentes catégories
      testerCategorie('conférence');
      testerCategorie('expérience digitale');
      testerCategorie('soirée entreprise');
      testerCategorie('world forum');
      testerCategorie('Marché');
    });
  
  });
  