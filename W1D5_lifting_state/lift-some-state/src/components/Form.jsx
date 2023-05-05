import { useState } from 'react'

const Form = (props) => {
    // console.log(props)
    // create state vars

    // create state vars for the inputs
    const [name, setName] = useState("")
    const [age, setAge] = useState(0)

    // form submit function - that will add to state
    const formSubmit = (e) => {
        e.preventDefault()

        // create the obj here
        const newPerson = {
            name,
            age
        }

        // execute the function coming from props
        props.updatePeople(newPerson)
    }



    return (
        <fieldset>
            <legend>Form.jsx</legend>
            name: {JSON.stringify(name)} <br />
            age: {JSON.stringify(age)} <br />

            {/* FORM */}
            <form onSubmit={formSubmit}>
                <p>
                    name: <input onChange={(e) => setName(e.target.value)} value={name} />
                </p>
                <p>
                    age: <input onChange={(e) => setAge(e.target.value)} type="number" value={age} />
                </p>
                <button>add person to kingdom</button>
            </form>


        </fieldset>
    )
}

export default Form