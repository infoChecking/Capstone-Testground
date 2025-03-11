import React from 'react'
import ButtonModule from './styles/buttonModule.module.css'
const iconButtons = ({icon:Icon}) => {
  return (
    <div>
        <button className={ButtonModule.simpleButton}>
            <Icon/>
        </button>
    </div>
  )
}

export default iconButtons