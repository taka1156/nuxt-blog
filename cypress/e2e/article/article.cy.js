import { SETTINGS } from '../../settings';

describe('/', () => {
  it('visit article page: pc', () => {
    cy.visit('/article/u6xsonefk/');
    cy.get('.nav-bar').contains('TakaTechBlog');
    cy.get('.nav-bar').invoke('css', 'position', 'absolute');
    cy.screenshot('pc/normal', SETTINGS.nomarl);

    cy.get('.index-nav').children('.base-nav-icon').children('button').click();
    cy.screenshot('pc/index-list-open', SETTINGS.nav);
    cy.get('.index-nav').children('.base-nav-icon').children('button').click();
  });

  it('visit article page: sp', () => {
    cy.viewport('iphone-se2');
    cy.visit('/article/u6xsonefk/');
    cy.get('.nav-bar').contains('TakaTechBlog');
    cy.get('.nav-bar').invoke('css', 'position', 'absolute');
    cy.screenshot('sp/normal', SETTINGS.nomarl);

    cy.get('.nav-bar__box').children('.base-nav-icon').children('button').click();
    cy.screenshot('sp/index-list-open', SETTINGS.nav);
    cy.get('.nav-bar__box').children('.base-nav-icon').children('button').click();

    cy.get('.index-nav').children('.base-nav-icon').children('button').click();
    cy.screenshot('sp/nav-list-open', SETTINGS.nav);
    cy.get('.index-nav').children('.base-nav-icon').children('button').click();
  });
});
