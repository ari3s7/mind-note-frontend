import './App.css'
import { Button } from './components/Button'
import { Card } from './components/Card'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'

function App() {
  return (
    <>
      <div className="">
        <Button variant="primary" text="Add content" startIcon= {<PlusIcon />}/>
        <Button variant="secondary" text="Share" startIcon = {<ShareIcon />}/>
        <Card/>
      </div>
    </>
  )
}

export default App
