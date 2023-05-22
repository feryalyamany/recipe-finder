import React from 'react'
import ReactDom from 'react-dom';
const PreLoader = () => {
  return (

    ReactDom.createPortal(
      <div classame="loader-wrapper">
      <div classame="packman"></div>
      <div classame="dots">
        <div classame="dot"></div>
        <div classame="dot"></div>
        <div classame="dot"></div>
        <div classame="dot"></div>
      </div>
    </div>, document.getElementById("loader")
    )
  
  )
}

export default PreLoader;