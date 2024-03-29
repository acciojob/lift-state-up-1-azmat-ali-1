import React, { useState } from 'react'
import ChildComponent from './ChildComponent'

function Parent() {
    const [showModal, setShowModal] = useState(false)
  return (
    <div className='parent'>
      <h1>Parent Component</h1>
      <ChildComponent showModal = {showModal} setShowModal = {setShowModal} />
    </div>
  )
}

export default Parent