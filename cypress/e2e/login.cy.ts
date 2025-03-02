describe("Login test", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("should display the welcome message", () => {
    cy.contains("!سلام خوش آمدید").should("exist");
  });
  it("error via empty fields", () => {
    cy.contains(/! پر کردن این فیلد الزامی است/i).should("not.exist");
    cy.getdata("log-button").click();
    cy.contains(/! پر کردن این فیلد الزامی است/i).should("exist");
    cy.wait(2000);
  });
  it("start signing up", () => {
    cy.getdata("register").click();
    cy.location("pathname").should("eq", "/signin");
  });
  it("write wrong email", () => {
    cy.contains(/ایمیل معتبر نیست/i).should("not.exist");
    cy.getdata("log-email").type("a");
    cy.getdata("log-pass").type("a");
    cy.getdata("log-button").click();

    cy.contains(/ایمیل معتبر نیست/i).should("exist");
  });
  it.only("sucessful login", () => {
    cy.intercept("POST", `${Cypress.env("back")}/users/login`).as("loginn");
    cy.contains(/! پر کردن این فیلد الزامی است/i).should("not.exist");
    cy.contains(/ایمیل معتبر نیست/i).should("not.exist");
    cy.getdata("log-email").type("kia@gmail.com");
    cy.getdata("log-pass").type("k");

    cy.getdata("log-button").click();

    cy.contains(/ورود موفقیت آمیز بود/i).should("exist");
  });
});
