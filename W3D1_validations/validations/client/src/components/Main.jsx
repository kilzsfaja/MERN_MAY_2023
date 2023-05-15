import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Main = (props) => {
    // destructure props
    const { heroes, setHeroes } = props

    // state vars for the input
    const [name, setName] = useState("bob")
    const [power, setPower] = useState(0)
    //! Create an array to store errors from the API
    const [errors, setErrors] = useState([]);

    // get the data right away
    useEffect(() => {
        // make the call to the server
        axios.get("http://localhost:8000/api/heroes")
            .then((serverRes) => {
                // ! always clog the server response 
                console.log("✅ SERVER SUCCESS => ", serverRes.data)
                setHeroes(serverRes.data)
            })
            .catch(err => {
                console.log("❌ SERVER ERROR", err)
            })
    }, [])

    // form submission
    const createHero = (e) => {
        e.preventDefault()

        // create the object that mimics the MODEL
        const tempObjToSendToServer = {
            name: name,
            power: power
        }

        // send it to the server
        axios.post("http://localhost:8000/api/heroes", tempObjToSendToServer)
            .then((serverRes) => {
                console.log("✅", serverRes)
                // we could add the serverRes.data to the DOM ourselves
                // ! always clog the server response 
                setHeroes([...heroes, serverRes.data])
            })
            .catch((err) => {
                console.log("❌", err)
                const errorResponseObj = err.response.data.errors; // Get the errors from err.response.data
                console.log(">>>>>>>>>", err.response.data.errors)
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponseObj)) { // Loop through all errors and get the messages
                    console.log("????", key)
                    errorArr.push(errorResponseObj[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }

    // delete function
    const deleteMe = (heroId) => {
        console.log("delete", heroId)
        axios.delete("http://localhost:8000/api/heroes/" + heroId)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }

    return (
        <fieldset>
            <legend>Main.jsx</legend>
            <div>
                {errors.map((err, index) => <p style={{color: "red"}}key={index}>{err}</p>)}
            </div>

            {/* FORM */}
            <form onSubmit={createHero}>
                <p>{JSON.stringify(name)}</p>
                <p>{JSON.stringify(power)}</p>

                <input placeholder='name' value={name} onChange={e => setName(e.target.value)} />
                <input type="number" placeholder='power' value={power} onChange={e => setPower(e.target.value)} />
                <button>make hero</button>
            </form>

            {/* LOOP OVER THE HEROES ARRAY */}
            {
                heroes.map((hero) => {
                    return <div key={hero._id}>
                        {/* {JSON.stringify(hero)} */}
                        <li>name:
                            <Link to={`/heroes/${hero._id}`}>

                                {hero.name}
                            </Link>

                            - 💪: {hero.power}</li>
                        <Link to={`/heroes/${hero._id}/edit`}>EDIT</Link>
                        <br />
                        <button onClick={() => deleteMe(hero._id)}>delete</button>
                        <hr />
                    </div>
                })
            }
        </fieldset>
    )
}

export default Main