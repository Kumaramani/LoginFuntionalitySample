import React, { useState } from 'react';
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth';

const useField = () => {
    const [value, setValue] = useState('');
    return { value, onChange: x => setValue('string' === typeof x ? x : x.target.value) };
};

function FirebaseUser({ action = 'signin' }) {
    const email = useField();
    const password = useField();
    const [auth, setAuth] = useState(null);
    const [error, setError] = useState('');
    const firebase = useFirebaseApp();
    const setReceivedData = data => setAuth(data);
    const setReceivedError = error => setError(error.message);


    const signIn = e => {
        e.preventDefault();
        setError('');
        firebase.auth()
            .signInWithEmailAndPassword(email.value, password.value)
            .then(setReceivedData)
            .catch(setReceivedError);
    };

    const signUp = e => {
        e.preventDefault();
        setError('');
        firebase.auth()
            .createUserWithEmailAndPassword(email.value, password.value)
            .then(setReceivedData)
            .catch(setReceivedError);
    };

    const manage = 'signin' === action
        ? {
            success: `Logged in as ${auth?.user.email ?? ''}`,
            method: signIn,
            label: 'Sign In'
        }
        : {
            success: `You have successfully registered with us ${auth?.user.email ?? ''}`,
            method: signUp,
            label: 'Sign Up'
        };
    return (
        <div className="form-wrapper">
            {
                auth ? (
                    <>
                        <h1>Dashboard</h1>
                        <p className="success-message">{manage.success}</p>
                        <span onClick={() => window.location.href = "/"} className="button">Log Out</span>
                    </>
                ) : (
                    <>
                        <h1>{manage.label}</h1>
                        <form onSubmit={manage.method}>
                            <input className="text-input" {...email} placeholder="email" />
                            <input className="text-input"{...password} type="password" placeholder="password" />
                            <a href="/" className="button">Back</a>
                            <button className="button" type="submit">{manage.label}</button>
                            {
                                error && <p className="error-message">{error}</p>
                            }
                        </form>
                    </>
                )
            }
        </div>
    );
}

export default FirebaseUser;
