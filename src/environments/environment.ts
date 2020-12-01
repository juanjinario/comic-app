// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  publicKey: 'dcc2cc777936f5a5763157cb8f6c2633',
  privateKey: '419f56ec012742d23c8a5ec94504f4e767842f53',
  md5: 'cc57a837cd5039581743eebbd47075fc',  // md5(1+private+public)
  ts: '1'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
