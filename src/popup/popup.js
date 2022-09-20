import React, { useState } from 'react'
import Modal from './Modal'

const BUTTON_WRAPPER_STYLES = {
  position: 'relative',
  zIndex: 1
}


export default function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div style={BUTTON_WRAPPER_STYLES} onClick={() => console.log('clicked')}>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}/>
      </div>
    </>
  )
}