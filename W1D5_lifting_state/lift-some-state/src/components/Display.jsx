import React from 'react'

const Display = (props) => {
    // console.log(props)
    return (
        <fieldset>
            <legend>Display.jsx</legend>
            {
                props.people.map((person, idx) => {
                    return (
                        <div key={idx}>
                            <p>name: {person.name}</p>
                            <hr />
                        </div>
                    )
                })
            }
        </fieldset>
    )
}

export default Display