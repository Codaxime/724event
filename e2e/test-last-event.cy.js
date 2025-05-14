describe('tester le lien dernier évènement', ()=>{
    it("Doit aller à la page du dernier évènement", ()=>{ // Test principal pour vérifier que le lien du dernier événement fonctionne
        cy.visit("http://localhost:3000");
        cy.scrollTo('bottom'); // Navigue en bas de page
        // Cible l'image du dernier event et clique dessus
        cy.get('.col.presta .EventCard [data-testid="card-image-testid"]') 
        .should('exist')
        .should('be.visible')
        .click();
    })
})