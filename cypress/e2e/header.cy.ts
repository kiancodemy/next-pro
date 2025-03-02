describe("check", () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.visit("/");
  });
  it("sigin", () => {
    cy.getdata("signin").click();
    cy.location("pathname").should("eq", "/signin");
  });
  it("login", () => {
    cy.getdata("login").click();
    cy.location("pathname").should("eq", "/login");
  });
  it("main", () => {
    cy.getdata("main").click();
    cy.location("pathname").should("eq", "/");
  });
});
