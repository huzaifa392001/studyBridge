// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    localhost: false,
    locald: false,
    dev: false,
    qa: true,
    staging: false,
    production: false,
    cookie: {
        name: 'ismClientVToken',
        expires: 30,
        path: '/',
        domain: 'qa.app.clinigro.com',
        secure: true,
        same_site: 'none',
    },
    auth_cookie: 'ismClientVToken',
    refresh_cookie: 'ismClientRToken',
    passport_grant_type_refresh: 'refresh_token',
    app: 'client-portal',
    hostname: 'qa.app.clinigro.com',
    passport_grant_type: 'password',
    passport_client_id: 2,
    passport_client_secret: 'vt5ZMkRwDzhBqVfmtbqy1dLlCr9NrE5AqjwuLt4X',
    basic_auth_secret: 'Mjp2dDVaTWtSd0R6aEJxVmZtdGJxeTFkTGxDcjlOckU1QXFqd3VMdDRY',
    appUrl: 'https://qa.app.ismilelite.com',
    apiUrl: 'https://qa.clinigroapi.com',
    apiUrlFin: 'https://finance-qa.ctrld.io',
    apiUrlComs: 'https://coms-qa.ctrld.io',
    apiUrlNHS: 'https://dev.clinigroapi.com',
    urls: {
        assets: 'https://storage.googleapis.com/clinigro',
        avatars: 'https://storage.googleapis.com/clinigro/avatars',
        images: 'https://storage.googleapis.com/clinigro/images'
    },
    stripeProducts: [{
        'id': 'price_1JtfRIJzlE23ofnuAmZqkmyt',
        'price': 'USD',
        'country': 'GB',
        'currencySymbol': '£',
        'enabled': true,
    }, {
        'id': 'price_1JsaV7JzlE23ofnuKU6glHKP',
        'price': 'PKR',
        'country': 'PK',
        'currencySymbol': 'Rs',
        'enabled': true,
    }]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
