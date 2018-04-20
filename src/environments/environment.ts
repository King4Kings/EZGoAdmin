// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: true,
    firebase : {
      apiKey: "AIzaSyBfEKUcykzjyMHIUbNZbH4NCTLeIHg7UpI",
      authDomain: "cabtrack-6cb6e.firebaseapp.com",
      databaseURL: "https://cabtrack-6cb6e.firebaseio.com",
      projectId: "cabtrack-6cb6e",
      storageBucket: "cabtrack-6cb6e.appspot.com",
      messagingSenderId: "523233495121"
    }
};
