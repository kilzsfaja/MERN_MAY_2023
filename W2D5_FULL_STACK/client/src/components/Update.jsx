import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';

const Update = (props) => {

    const nav = useNavigate()

    // get the id from the :id in the route
    const { id } = useParams();
    console.log(id)

    // state vars for the input
    const [name, setName] = useState("")
    const [power, setPower] = useState(0)

    // find that one obj from the DB aka READ ONE
    // make it execute right away
    useEffect(() => {
        // go to the server route, get the obj
        axios.get(`http://localhost:8000/api/heroes/${id}`)
            .then(serverRes => {
                console.log(serverRes.data)
                // the thing that comes back from the server (DB)
                // we want to put it in state so we can update it
                setName(serverRes.data.name)
                setPower(serverRes.data.power)
            })
            .catch(serverErr => console.log(serverErr))
    }, [id])

    // update form submit
    // form submission
    const updateHero = (e) => {
        e.preventDefault()

        // create the object that mimics the MODEL
        const tempObjToSendToServer = {
            name: name,
            power: power
        }

        // send it to the server
        axios.patch("http://localhost:8000/api/heroes/"+id, tempObjToSendToServer)
            .then((serverRes) => {
                // ! always clog the server response 
                console.log("✅", serverRes.data)
                nav("/")
                
            })
            .catch((errRes) => {
                console.log("❌", errRes)
            })

    }

    return (
        <fieldset>
            <legend>
                Update.jsx
            </legend>


            {/* update form */}
            <form onSubmit={updateHero}>
                <p>{JSON.stringify(name)}</p>
                <p>{JSON.stringify(power)}</p>

                <input placeholder='name' value={name} onChange={e => setName(e.target.value)} />
                <input type="number" placeholder='power' value={power} onChange={e => setPower(e.target.value)} />
                <button>update hero</button>
            </form>
        </fieldset>
    )
}

export default Update