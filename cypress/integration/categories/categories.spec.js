describe('/', () => {
  it('visit page', () => {
    cy.visit('/categories/');
    cy.get('.nav-bar').contains('TakaTechBlog');
    cy.get('.nav-bar').invoke('css', 'position', 'absolute');
    cy.screenshot('categories', { overwrite: true });
  });
});
