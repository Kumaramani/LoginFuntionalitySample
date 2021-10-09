## Simple login and sign up using Firebase

You need to create a `.env` file at the project's root and add the Firebase keys like:

```
REACT_APP_API_KEY=1A2B3C4D5E6F7G
REACT_APP_AUTH_DOMAIN=appname-a123b.firebaseapp.com
REACT_APP_DB_URL=https://appname-a123b.firebaseio.com
REACT_APP_PROJECT_ID=appname-a123b
REACT_APP_STORAGE_BUCKET=appname-a123b.appspot.com
REACT_APP_MESSAGING_SENDER_ID=1234567890
```

Those will be loaded by `src/index.js` to configure the Firebase connection. For the complete tutorial, see the companion post:

[How to create a Firebase login and sign up in React](https://startfunction.com/how-to-firebase-login-sign-up-react/)

## Running the project

Once you're ready, in the project directory, run:

```
yarn start
```

and it will launch the app in http://localhost:3000.

---------
Created by [StartFunction](https://startfunction.com)