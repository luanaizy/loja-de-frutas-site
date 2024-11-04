import { useState } from 'react'
import FruitItem from './components/FruitItem'

function App() {
  const [number, setnumber] = useState(1)

  return (
    <>
      
      <h1>Loja de Frutas</h1>
      <div>
        <FruitItem/>
        <button onClick={() => setnumber(number + 1)}>
          count is {number}
        </button>
      </div>

    </>
  )
}

export default App
