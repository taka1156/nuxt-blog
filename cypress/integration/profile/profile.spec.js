import { SETTINGS } from '../../settings';

describe('/', () => {
  it('visit profile page: pc', () => {
    cy.visit('/profile/');
    cy.get('.nav-bar').contains('TakaTechBlog');
    cy.get('.nav-bar').invoke('css', 'position', 'absolute');
    cy.screenshot('pc/normal', SETTINGS.nomarl);
  });

  it('visit profile page: sp', () => {
    cy.viewport('iphone-se2');
    cy.visit('/profile/');
    cy.get('.nav-bar').contains('TakaTechBlog');
    cy.get('.nav-bar').invoke('css', 'position', 'absolute');
    cy.screenshot('sp/normal', SETTINGS.nomarl);

    cy.get('.nav-list').invoke('css', 'display', 'flex');
    cy.screenshot('sp/nav-list-open', SETTINGS.nav);
    cy.get('.nav-list').invoke('css', 'display', 'none');
  });
});
