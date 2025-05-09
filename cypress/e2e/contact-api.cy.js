const apiContact =  `${Cypress.env("apiUrl")}/contact`;
context('contact page', () => {
    it("execute contact ",()=>{
      cy.request("POST", apiContact, ).then((response)=>{
        
        expect(response.status).to.eq(200)
        expect(response.body.message).to.contain('Merci de nous avoir contacté !')
      })
      
    
    })
})
