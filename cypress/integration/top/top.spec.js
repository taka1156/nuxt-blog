describe('/', () => {
  it('visit page', () => {
    cy.visit('/');
    cy.get('.nav-bar').contains('TakaTechBlog');
    cy.get('.nav-bar').invoke('css', 'position', 'absolute');
    cy.screenshot('top', { overwrite: true });
  });
});
