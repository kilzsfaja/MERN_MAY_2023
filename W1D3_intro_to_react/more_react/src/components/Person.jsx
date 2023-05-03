import React, { useState } from 'react'
// import AnotherComponent from './AnotherComponent'
import coolStyle from "./Person.module.css"

const Person = (props) => {
    // console.log("what is props?", props)

    // CREATE STATE FOR THIS COMPONENT
    //    state
    //      |     change state
    //      V        V           default state
    const [num, setNum] = useState(props.age)
    const [coolObject, setCoolObject] = useState({name: "bob", number: 100})

    const increaseAge = () => {
        // console.log("clicked!")
        setNum(num + 1)
        // SETTING STATE IS AN ASYNC FUNCTION
        // console.log(num)
    }

    const subtractNum = () => {
        console.log("hello")
        // STATE IS IMMUTABLE!!!!!
        const newNum = coolObject.number - 1
        setCoolObject({
            ...coolObject,
            number: newNum
        })
    }

    return (
        <fieldset>
            <legend>Person.jsx</legend>
            <p style={{color: "blue", backgroundColor: "lightyellow"}}>
                Person is {props.personName2} and they are {num} years old 🎈
            </p>
            <button className={coolStyle.cool} onClick={() => increaseAge()}>happy birthday!</button>
            <hr />

            <p>
                {/* coolObject is {JSON.stringify(coolObject)} */}
                coolObject is {JSON.stringify(coolObject)}
                <button onClick={() => subtractNum()}>subtract</button>
            </p>
        </fieldset>


    )
}

export default Person