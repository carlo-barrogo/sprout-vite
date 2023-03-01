import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Announcement from './components/announcement'
import Navbar from './commons/navigation/navBar'

function App({children}) {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Navbar/>
    <div class='mt-5 p-5'>
    <Announcement/>
    </div>
    </div>
    
   
  )
}

export default App
