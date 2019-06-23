describe("marketdataload", () => {
	it('Proceed to ETH_BTC page and verify page contents', () => {		
		cy.visit('https://www.binance.com/en')
		cy.get('.ReactVirtualized__Grid__innerScrollContainer').get('.ReactVirtualized__Table__rowColumn').contains('ETH\/BTC').click()
		cy.get('.ReactVirtualized__Grid ReactVirtualized__Table__Grid').should('be.visible')
	})
 // cy.get('.ReactVirtualized__Grid ReactVirtualized__Table__Grid').should('be.visible')
 // cy.get('.ReactVirtualized__Grid ReactVirtualized__Table__Grid').should('be.visible')
 // cy.get('.ReactVirtualized__Grid ReactVirtualized__Table__Grid').should('be.visible')
 // cy.get('.ReactVirtualized__Grid ReactVirtualized__Table__Grid').should('be.visible')
 // cy.get('.ReactVirtualized__Grid ReactVirtualized__Table__Grid').should('be.visible')
  
})