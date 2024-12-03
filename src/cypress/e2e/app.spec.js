describe("E-commerce App Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("displays products on the home page", () => {
    cy.contains("Products");
    cy.get(".product-card").should("exist");
  });

  it("navigates to product detail page", () => {
    cy.get(".product-card").first().click();
    cy.url().should("include", "/product/");
    cy.contains("Add to Cart");
  });

  it("adds product to cart and shows it in the cart", () => {
    cy.get(".product-card").first().click();
    cy.contains("Add to Cart").click();
    cy.visit("/cart");
    cy.get("li").should("exist");
  });

  it("removes product from cart", () => {
    cy.visit("/cart");
    cy.get("button").contains("Remove").click();
    cy.get("li").should("not.exist");
  });
});
