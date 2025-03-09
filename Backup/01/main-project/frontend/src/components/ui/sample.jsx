import React, {useState} from 'react'
import './styles/sample.css'

function sample() {
  const [isVisible, setIsVisible] = useState(false);
  function handleVisibility () {
    setIsVisible((i) => !i);
  }

  return (
    <div className='container'>
      <h1>{isVisible &&  "Welcome to Capstone project"}</h1>
      <div className='button-container'>
        <button className='btn' onClick={handleVisibility}>Click Me</button>
      </div>
    </div>
  )
}

export default sample