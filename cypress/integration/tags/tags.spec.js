import { SETTINGS } from '../../settings';

describe('/', () => {
  it('visit tags page: pc', () => {
    cy.visit('/tags/');
    cy.get('.nav-bar').contains('TakaTechBlog');
    cy.get('.nav-bar').invoke('css', 'position', 'absolute');
    cy.screenshot('pc/normal', SETTINGS.nomarl);
  });

  it('visit tags page: sp', () => {
    cy.viewport('iphone-se2');
    cy.get('.nav-bar').contains('TakaTechBlog');
    cy.get('.nav-bar').invoke('css', 'position', 'absolute');
    cy.screenshot('sp/normal', SETTINGS.nomarl);

    cy.get('.nav-list').invoke('css', 'display', 'flex');
    cy.screenshot('sp/nav-list-open', SETTINGS.nav);
    cy.get('.nav-list').invoke('css', 'display', 'none');
  });
});
