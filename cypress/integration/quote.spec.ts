describe("Display quotes", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it('should contain a wrapper element with id="quote-box"', () => {
    cy.get("div[data-test=quote-box]");
    cy.get("#quote-box");
  });
});
