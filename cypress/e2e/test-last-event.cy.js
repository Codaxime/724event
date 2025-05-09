describe('tester le lien dernier évènement', ()=>{
    it("Doit aller à la page du dernier évènement", ()=>{
        cy.visit("http://localhost:3000");
        cy.scrollTo('bottom');
        cy.get('.col.presta .EventCard [data-testid="card-image-testid"]')
        .should('exist')
        .should('be.visible')
        .click();
    })
})