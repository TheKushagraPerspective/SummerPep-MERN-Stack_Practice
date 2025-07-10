import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dynamic_Form from './components/Dynamic_Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="container">
            <Dynamic_Form />
        </div>
    </>
  )
}

export default App
