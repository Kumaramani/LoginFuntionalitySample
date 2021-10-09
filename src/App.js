import React, { useState } from 'react';
import FirebaseUser from './FirebaseUser';

function App() {
  const [signInOrUp, setSignInOrUp] = useState('');
  return (
    <div className="App">

      {
        signInOrUp ? (
          <React.Fragment>
            <FirebaseUser action={signInOrUp} />
          </React.Fragment>
        ) : (
          <>
            <h1>Choose A Login Method</h1>
            <button className="button" type="button" onClick={() => setSignInOrUp('signin')} >Log in with Existing Account</button>
            <button className="button" type="button" onClick={() => setSignInOrUp('signup')} >Sign Up As as new User</button>
          </>
        )
      }
    </div>
  );
}

export default App;
