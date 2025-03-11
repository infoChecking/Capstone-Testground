import React from 'react'
import NavigationHeader from '../component/navigationHeader'

const mainLayout = ({page}) => {
  return (
    <div>
      <NavigationHeader/>
        <main>{page}</main>
    </div>
  )
}

export default mainLayout