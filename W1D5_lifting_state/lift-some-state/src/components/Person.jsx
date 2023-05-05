import React from 'react'

const Person = (props) => {
    return (
        <>
            <div>{props.eachElem.name}</div>
            <div>{props.eachElem.color}</div>
        </>
    )
}

export default Person