import { useState } from 'react'
import '../App.css'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { ContentModel } from '../components/ContentModal'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import { SideBar } from '../components/SideBar'
import { useContent } from '../hooks/useContent'

function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const contents = useContent();
  return (
  
    <div>
      <SideBar />
   
    <div className='p-4 ml-72'>
   <ContentModel open={modalOpen} onClose={() => {setModalOpen(false)}}/>
      <div className="flex justify-end pr-4 py-3">
        <div className='pr-3'>
          <Button variant="primary" text="Add content" onClick={() => setModalOpen(true)} startIcon= {<PlusIcon />}/>
        </div>
        
        <Button variant="secondary" text="Share" startIcon = {<ShareIcon />}/>
      </div>
      <div className='flex pt-15 pl-20'>
        {contents.map(({type, link, title}) => <Card
         type={type}
         link={link}
         title={title}
         />)}
       
      </div> 
</div>
 </div>

  
  )
}

export default Dashboard
