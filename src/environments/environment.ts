// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyCNm5FVL_PGn8u62Xppwag8O840wrh0ghI",
    authDomain: "onlinereservation-2lx.firebaseapp.com",
    databaseURL: "https://onlinereservation-2lx.firebaseio.com",
    projectId: "onlinereservation-2lx",
    storageBucket: "onlinereservation-2lx.appspot.com",
    messagingSenderId: "737586176541"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
