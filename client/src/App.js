import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App" >
      <h1>Coders Never quiet!</h1>
      {/* <a href="http://localhost:5000/auth/google">Signup</a> */}
      <a href="/auth/google">Signup</a>

{/* GO TO GOOGLE DEVELOPER CONSOLE -> CREDENTIALS -> CLIENT NAME */}
      {/* Authorised redirect URIs */}
      {/* http://localhost:3000/auth/google/callback */}
    </div>
  );
}

export default App;
