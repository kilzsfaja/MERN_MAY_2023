import { useState } from 'react'
import '../App.css';

const AnotherForm = (props) => {

    // declare state vars
    const [animals, setAnimals] = useState([
        {
            name: "🐸",
            age: 5
        },
        {
            name: "🦓",
            age: 12
        }
    ]);
    const [emoji, setEmoji] = useState("");
    const [age, setAge] = useState(1);

    // ERROR STATE
    const [errorState, setErrorState] = useState("")

    // form submit
    const formSubmitHandler = (e) => {
        e.preventDefault();
        console.log("submitted");

        // create the animal object to be added
        const newAnimalObject = {
            name: emoji,
            age: 10
        }

        if (animals.length <= 6) {
            // update state
            setAnimals([newAnimalObject, ...animals])
        }

        // clean up state
        setEmoji("")
    }

    // check age
    const checkAge = (e) => {
        console.log("AGE!!!!!", e.target.value)
        // set the age
        setAge(e.target.value)
        if (e.target.value < 3) {
            setErrorState("you need more XP")
        } else {
            setErrorState("")
        }
    }


    return (
        <fieldset className='form'>
            <legend>AnotherForm.jsx</legend>
            {
                animals.length > 6 ? <p>the zoo is full!</p> : <p>we accept more animals!</p>
            }

            <p>
                there are {animals.length} animals in the zoo
            </p>

            <h3>
                these are the animals in a list!
            </h3>
            <p>
                emoji = {JSON.stringify(emoji)}
            </p>

            {JSON.stringify(animals)}

            {/* loop over the animals array and return each one in a list */}

            {
                animals.map((eachOneAnimal, animalIndex) => {
                    return (
                        <div key={animalIndex}>
                            <p>this animal is cool and its index is {animalIndex}</p>
                            {eachOneAnimal.name}
                            <hr />
                        </div>
                    )
                })
            }

            <form onSubmit={(e) => formSubmitHandler(e)}>

                name: <input onChange={ (event) => setEmoji(event.target.value) } value={emoji} /> <br />
                age: <input type="number" value={age} onChange={(e) => checkAge(e)}/> <br />
                is there an error? {errorState ? <p>CAN NOT PASS</p> : <p>you can pass</p>}
                <p></p>
                <button>add animal to zoo</button>
            
            </form>
        </fieldset>
    )
}

export default AnotherForm