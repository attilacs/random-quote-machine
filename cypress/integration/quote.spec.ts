describe("Display quotes", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it('should contain a wrapper element with id="quote-box"', () => {
    cy.get("div[data-test=quote-box]");
    cy.get("#quote-box");
  });

  it('should contain an element with id="text" within #quote-box', () => {
    cy.get("div[data-test=quote-box]");
    cy.get("div[data-test=text]");
    cy.get("#text");
  });
});
