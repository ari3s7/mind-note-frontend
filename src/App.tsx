
import './App.css'
import { Button } from "./components/ui/Button"

function App() {
 

  return (
    <>
      <h1 className='text-blue-400'>Hello world</h1>
      < Button variant="primary" size="lg" text="hello" onClick={() => {handleFuntion}} />
     </>
  )
}

export default App
