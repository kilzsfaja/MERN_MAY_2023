import { useState } from 'react'

const Form = (props) => {
    // console.log(props)
    // create state vars

    // create state vars for the inputs
    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
    const [favColor, setFavColor] = useState("red")
    const [completed, setCompleted] = useState(false)

    // form submit function - that will add to state
    const formSubmit = (e) => {
        e.preventDefault()

        // create the obj here
        const newPerson = {
            name,
            age,
            favColor,
            completed
        }

        // execute the function coming from props
        props.updatePeople(newPerson)
    }

    return (
        <fieldset>
            <legend>Form.jsx</legend>
            name: {JSON.stringify(name)} <br />
            age: {JSON.stringify(age)} <br />
            favColor: {JSON.stringify(favColor)} <br />
            completed: {JSON.stringify(completed)} <br />

            {/* FORM */}
            <form onSubmit={formSubmit}>
                <p>
                    name: <input onChange={(e) => setName(e.target.value)} value={name} />
                </p>
                <p>
                    age: <input onChange={(e) => setAge(e.target.value)} type="number" value={age} />
                </p>
                <p>
                    fav color?
                    <select value={favColor} onChange={(e) => setFavColor(e.target.value)}>
                        <option value={"red"}>red</option>
                        <option value={"green"}>green</option>
                        <option value={"blue"}>blue</option>
                    </select>
                </p>
                <p>
                    did you beat the game in under 30 mins? 
                    <input 
                        type="checkbox" 
                        checked={completed}
                        onChange={() => setCompleted(!completed)}
                    />
                </p>
                <button>add person to kingdom</button>
            </form>


        </fieldset>
    )
}

export default Form