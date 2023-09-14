import app from '../../first-firebase-app/src/firebase.init'
import React from 'react';
import { GithubAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import './App.css'

const auth = getAuth(app);
function App() {

  let provider = new GithubAuthProvider();
  
  let signInGithub = () =>{
    signInWithPopup(auth, provider)
    .then(result => {
      console.log(result)
    })
    .catch(error => {
      console.log(error);
    })
  }
  return (
      <div>
        <button onClick={signInGithub}>Github Sign in</button>
      </div>
  )
}

export default App
