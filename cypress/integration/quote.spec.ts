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

  it('should contain an element with id="author" within #quote-box', () => {
    cy.get("div[data-test=quote-box]");
    cy.get("span[data-test=author]");
    cy.get("#author");
  });

  it('should display the text "Loading..." while downloading the quotes', () => {
    cy.contains("Loading...");
});

  it("should show error message on failed dowload attempt", () => {
    cy.intercept(
      "GET",
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json",
      {
        statusCode: 404
      }
    );
    cy.wait(3500);
    cy.contains("An error occurred...");
});
});
