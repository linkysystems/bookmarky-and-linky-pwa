/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'bookmarky-and-link',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        Date: false,
      }
    },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    i18n: {
      defaultLocale: 'en-us'
      // defaultLocale: 'pt-br'
    },
    'ember-cli-notifications': {
      icons: 'bootstrap'
    },
    pace: {
      // addon-specific options to configure theme
      theme: 'flash',
      color: 'green',
      // pace-specific options
      // learn more on http://github.hubspot.com/pace/#configuration
      //           and https://github.com/HubSpot/pace/blob/master/pace.coffee#L1-L72
      catchupTime: 50,
      initialRate: 0.01,
      minTime: 100,
      ghostTime: 50,
      maxProgressPerFrame: 20,
      easeFactor: 1.25,
      startOnPageLoad: true,
      restartOnPushState: true,
      restartOnRequestAfter: 500,
      target: 'body',
      elements: {
        checkInterval: 100,
        selectors: ['body', '.ember-view']
      },
      eventLag: {
        minSamples: 10,
        sampleCount: 3,
        lagThreshold: 3
      },
      ajax: {
        trackMethods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PATCH', 'PUT'],
        // trackWebSockets: true,
        // ignoreURLs: []
      }
    }
  };

  ENV['ember-simple-auth'] = {
    identificationField: 'email',
    passwordField: 'password',
    authenticationRoute: 'login',
    routeAfterAuthentication: 'index',
    routeIfAlreadyAuthenticated: 'index',
    serverTokenEndpoint: '/auth/grant-password/authenticate'
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.API_HOST = 'http://localhost:4000';
    ENV['ember-simple-auth'].serverTokenEndpoint = ENV['API_HOST'] + ENV['ember-simple-auth'].serverTokenEndpoint;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
