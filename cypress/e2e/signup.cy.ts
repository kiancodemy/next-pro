describe("Login test", () => {
  beforeEach(() => {
    cy.visit("/signin");
  });

  it("error via empty fields", () => {
    cy.contains(/! پر کردن این فیلد الزامی است/i).should("not.exist");
    cy.getdata("reg").click();
    cy.contains(/! پر کردن این فیلد الزامی است/i).should("exist");
  });

  it("write wrong email", () => {
    cy.contains(/ایمیل معتبر نیست/i).should("not.exist");
    cy.getdata("reg-name").type("a");
    cy.getdata("reg-email").type("a");
    cy.getdata("reg-pass").type("a");
    cy.getdata("reg").click();

    cy.contains(/ایمیل معتبر نیست/i).should("exist");
  });
});
