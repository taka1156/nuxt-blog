describe('/', () => {
  it('visit page', () => {
    cy.visit('/profile/');
    cy.get('.nav-bar').contains('TakaTechBlog');
    cy.get('.nav-bar').invoke('css', 'position', 'absolute');
    cy.screenshot('profile', { overwrite: true });
  });
});
