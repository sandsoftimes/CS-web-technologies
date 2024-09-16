import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import './App.css'
// import Navbar from './components/Navbark';
import Navbark from './components/Navbark' 

var name='haris'
function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
    <Navbark title="TextUtils" aboutText="About TextUtils"></Navbark> 
    <nav>
      <li>Home</li>
      <li>Contact</li>
      <li>About</li>
    </nav>
    <img src="" alt="" />
    <div className='blank'>lovely
    <h1>Hello {name}</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aliquam perspiciatis distinctio minus et ipsam harum quaerat, voluptas vitae ut autem voluptates blanditiis possimus hic culpa quam placeat inventore corporis!</p>
    </div>

    </>
  )
}

export default App
