import React from 'react'

const Child = (props) => {
  return (
    <div>
        <button onClick={props.changeName}>Change Name</button>
        <button>{props.children}</button>
    </div>
  )
}

export default Child