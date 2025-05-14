//Appel de l'url de l'API
const apiEvents = '${Cypress.env("apiUrl")}/events';
context("GET /events", ()=>{ // Contexte de test pour la requête GET sur l'endpoint /events
    it("gets a number of events", ()=>{ // TEst que la requête GET renvoie un nombre d'évènement
        cy.request("GET", apiEvents).then((response)=>{ //Envoi de la requête GEt à l'API et vérifie la réponse
            expect(response.status).to.eq(200) // Attend un code status 200
            expect(response.body).length.to.be.greaterThan(20) // La réponse contient + de 20 élèments
        })
    })
})