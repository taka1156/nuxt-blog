import { SETTINGS } from '../../settings';

describe('/', () => {
  it('visit categories page: pc', () => {
    cy.visit('/categories/');
    cy.get('.nav-bar').contains('TakaTechBlog');
    cy.get('.nav-bar').invoke('css', 'position', 'absolute');
    cy.screenshot('pc/normal', SETTINGS.nomarl);
  });

  it('visit categories page: sp', () => {
    cy.viewport('iphone-se2');
    cy.visit('/categories/');
    cy.get('.nav-bar').contains('TakaTechBlog');
    cy.get('.nav-bar').invoke('css', 'position', 'absolute');
    cy.screenshot('sp/normal', SETTINGS.nomarl);

    cy.get('.nav-bar__box').children('.base-nav-icon').children('button').click();
    cy.screenshot('sp/index-list-open', SETTINGS.nav);
    cy.get('.nav-bar__box').children('.base-nav-icon').children('button').click();
  });
});
