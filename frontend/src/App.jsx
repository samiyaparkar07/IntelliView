import './App.css';
import { SignIn, SignInButton } from '@clerk/clerk-react';

function App() {
  

  return (
    <>
      <h1>IntelliView</h1>
      <SignInButton mode='modal'/>
    </>
  )
}

export default App
