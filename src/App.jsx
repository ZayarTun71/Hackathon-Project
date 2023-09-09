import { useState } from 'react'
import Login from './pages/auth/login'
import "./assets/scss/style.scss";
import Alert from './components/alert';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Alert/>
    <Login/>
    </>
  )
}

export default App
