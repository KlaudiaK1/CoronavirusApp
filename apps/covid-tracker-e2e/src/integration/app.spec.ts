describe('flow', () => {
  it('should contain a drop down list, covid-cards and chart after choosing other country', () => {
    cy.visit('/');
    cy.get('select').select('Austria');

    cy.get('select').should('exist');
    cy.get('select').contains(/Austria/i);
    cy.get('.card').its('length').should('eq', 3);
    cy.get('.chartjs-render-monitor').should('exist');
  });

});

describe('contains a title', () => {
  it('should contain a title', () => {
    cy.visit('/')
    cy.get('h1').contains(/Coronavirus Tracker/i).should('exist');
  });
});

describe('checking if a drop down list exists', () => {
  const urlCountries = 'https://api.covid19api.com/summary';
  it('should contain a drop down list when the data about countries is properly loaded', () => {
    cy.fixture('citiesData').as('backend');
    cy.server();
    cy.route(urlCountries, '@backend').as('loaded');
    cy.visit('/');
    cy.wait('@loaded');

    cy.get('select').should('exist');
  });
  it('should contain a h4 with \'Cannot load a list of countries\' message when api returns an empty object', () => {
    cy.fixture('emptyObject').as('backend');
    cy.server();
    cy.route(urlCountries, '@backend').as('loaded');
    cy.visit('/');
    cy.wait('@loaded');

    cy.get('h4').contains(/Cannot load a list of countries/i).should('exist');
    cy.get('select').should('not.exist');
  });
});

describe('checking if title and covid-cards exist', () => {
  const today = new Date();
  const prevDay = new Date();
  prevDay.setDate(today.getDate() - 1);
  const urlCurrentData = `https://api.covid19api.com/country/Poland?from=${prevDay.toISOString().substring(0, 10)}T00:00:00Z&to=${today.toISOString().substring(0, 10)}T00:00:00Z`;
  it('should contain a title and covid-cards when the data about current states is properly loaded', () => {

    cy.fixture('currentDataPoland').as('current');
    cy.server();
    cy.route(urlCurrentData, '@current').as('loaded');
    cy.visit('/');
    cy.wait('@loaded');

    cy.get('.card').its('length').should('eq', 3);

  });
  it('should contain a \'Cannot load the data\' message when api returns an empty array', () => {
    cy.fixture('emptyArray').as('current');
    cy.server();
    cy.route(urlCurrentData, '@current').as('loaded');
    cy.visit('/');
    cy.wait('@loaded');

    cy.contains(/Cannot load the current data/i).should('exist');
    cy.get('.card').should('not.exist');
  });
});

describe('checking if a chart exists', () => {
  const urlDailyData = 'https://api.covid19api.com/total/dayone/country/Poland';
  it('should contain a chart when the daily data about Poland is properly loaded', () => {
    cy.fixture('dailyDataPoland').as('daily');
    cy.server();
    cy.route(urlDailyData, '@daily').as('loaded');
    cy.visit('/');
    cy.wait('@loaded');

    cy.get('.chartjs-render-monitor').should('exist');
  });
  it('should contain a \'Cannot load the daily data\' message when api returns an empty array', () => {
    cy.fixture('emptyArray').as('daily');
    cy.server();
    cy.route(urlDailyData, '@daily').as('loaded');
    cy.visit('/');
    cy.wait('@loaded');

    cy.get('h4').contains(/Cannot load the daily data/i).should('exist');
    cy.get('.chartjs-render-monitor').should('not.exist');
  })
});

