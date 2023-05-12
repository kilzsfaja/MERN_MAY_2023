import React from 'react'

const Box = (props) => {
  console.log("Box props:", props)
  return (
      <div style={{ backgroundColor: props.boxObj.color, width: "100px", height: "100px", display: "inline-block" }}>
        {props.boxObj.color}
        <br />
        <button onClick={() => props.deleteBox(props.boxIndex)}>delete box with index {props.boxIndex} </button>
        <p>{JSON.stringify(props.boxObj.isCool)}</p>
        <input type="checkbox" checked={props.boxObj.isCool} onChange={props.updateBoxCoolness}/>
      </div>
  )
}

export default Box