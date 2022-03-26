import { SETTINGS } from '../../settings';

describe('/', () => {
  it('visit article page: pc', () => {
    cy.visit('/article/u6xsonefk/');
    cy.get('.nav-bar').contains('TakaTechBlog');
    cy.get('.nav-bar').invoke('css', 'position', 'absolute');
    cy.screenshot('pc/normal', SETTINGS.nomarl);

    cy.get('.index-list').invoke('css', 'display', 'flex');
    cy.screenshot('pc/index-list-open', SETTINGS.nav);
    cy.get('.index-list').invoke('css', 'display', 'none');
  });

  it('visit article page: sp', () => {
    cy.viewport('iphone-se2');
    cy.visit('/article/u6xsonefk/');
    cy.get('.nav-bar').contains('TakaTechBlog');
    cy.get('.nav-bar').invoke('css', 'position', 'absolute');
    cy.screenshot('sp/normal', SETTINGS.nomarl);

    cy.get('.index-list').invoke('css', 'display', 'flex');
    cy.screenshot('sp/index-list-open', SETTINGS.nav);
    cy.get('.index-list').invoke('css', 'display', 'none');

    cy.get('.nav-list').invoke('css', 'display', 'flex');
    cy.screenshot('sp/nav-list-open', SETTINGS.nav);
    cy.get('.nav-list').invoke('css', 'display', 'none');
  });
});
