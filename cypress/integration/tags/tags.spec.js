describe('/', () => {
  it('visit page', () => {
    cy.visit('/tags/');
    cy.get('.nav-bar').contains('TakaTechBlog');
    cy.get('.nav-bar').invoke('css', 'position', 'absolute');
    cy.screenshot('tags', { overwrite: true });
  });
});
