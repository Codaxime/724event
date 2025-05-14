// Définition de l'URL de l'API pour envoyer un message de contact, en utilisant la variable d'environnement "apiUrl"
const apiContact =  `${Cypress.env("apiUrl")}/contact`;
context('contact page', () => { 
    it("execute contact ",()=>{
      cy.request("POST", apiContact, ).then((response)=>{ // Envoi d'une requête POST à l'API de contact
        
        expect(response.status).to.eq(200) // Vérifie que la réponse de l'API a un statut 200 (succès)
        expect(response.body.message).to.contain('Merci de nous avoir contacté !')  // Vérifie que la réponse contient un message de succès spécifique
      })
    })
})
