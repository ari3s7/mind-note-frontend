import './App.css'
import { Button } from './components/Button'
import { Card } from './components/Card'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'

function App() {
  return (
    <>
      <div className="flex justify-end pr-4 py-3">
        <div className='pr-3'>
          <Button variant="primary" text="Add content" startIcon= {<PlusIcon />}/>
        </div>
        
        <Button variant="secondary" text="Share" startIcon = {<ShareIcon />}/>
      </div>
      <div>
        <Card />
      </div>
      
      
    </>
  )
}

export default App
