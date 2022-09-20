// Modal.js

import React from 'react'
import ReactDom from 'react-dom'

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 1000
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}

export default function Modal({ open, children, onClose }) {
  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <button onClick={onClose}>Close Modal</button>
        {children}
      </div>
    </>,
    document.getElementById('portal')
  )
}

// popup.js

// import React, { useState } from 'react'
// import Modal from './Modal'

// const BUTTON_WRAPPER_STYLES = {
//   position: 'relative',
//   zIndex: 1
// }


// export default function App() {
//   const [isOpen, setIsOpen] = useState(false)
//   return (
//     <>
//       <div style={BUTTON_WRAPPER_STYLES} onClick={() => console.log('clicked')}>
//         <button onClick={() => setIsOpen(true)}>Open Modal</button>
//         <Modal open={isOpen} onClose={() => setIsOpen(false)}/>
//       </div>
//     </>
//   )
// }