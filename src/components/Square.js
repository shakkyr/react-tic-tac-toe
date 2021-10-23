import React from 'react'

const Square = (props)=> {
    return (
        <input type='button' value={props.value} className="square" onClick={props.onClick}></input>    
    )
}

export default Square;