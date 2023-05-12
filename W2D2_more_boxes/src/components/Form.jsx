import React, {useState} from 'react'

const Form = (props) => {
    // destructure from props 
    // const {addBox} = props;
    // state var for this component's input
    const [input, setInput] = useState("")

    // form submit
    const formSubmit = (e) => {
        e.preventDefault()
        props.addBox(input)
    }

    return (
        <fieldset>
            {/* ALWAYS SHOW for debugging the state vars */}
            <p>
                input: {JSON.stringify(input)}
            </p>
            <legend>Form.jsx</legend>
            
            <form onSubmit={formSubmit}>
                Color: <input type='color' onChange={(e) => setInput(e.target.value)} value={input} />
                <button>add</button>
            </form>
        </fieldset>
    )
}

export default Form