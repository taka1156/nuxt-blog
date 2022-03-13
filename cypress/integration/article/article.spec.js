describe('/', () => {
  it('visit page', () => {
    cy.visit('/article/u6xsonefk/');
    cy.get('.nav-bar').contains('TakaTechBlog');
    cy.get('.nav-bar').invoke('css', 'position', 'absolute');
    cy.screenshot('article', { overwrite: true });
  });
});
