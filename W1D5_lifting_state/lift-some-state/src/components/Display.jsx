import React from 'react'

const Display = (props) => {
    console.log(props)

    // click button function
    const buttonClick = (personIdx) => {
        // console.log("clicked a button!!!", personIdx)
        props.deletePerson(personIdx)
    }

    return (
        <fieldset>
            <legend>Display.jsx</legend>
            {
                props.people.map((eachOnePerson, idx) => {
                    return (
                        <button
                            style={{ backgroundColor: eachOnePerson.favColor, color: "white" }}
                            onClick={() => buttonClick(idx)} key={idx}
                        >
                            <p>name: {eachOnePerson.name}</p>
                            <p>age: {eachOnePerson.age}</p>
                            {/* <p>color: {eachOnePerson.favColor}</p> */}
                        </button>
                    )
                })
            }
        </fieldset>
    )
}

export default Display