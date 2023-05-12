import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'


const ShowOne = (props) => {
    // state vars to display
    const [name, setName] = useState("")
    const [power, setPower] = useState(0)


    // get the id from the :id in the route
    const { id } = useParams();


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
    return (
        <div>{name}</div>
    )
}

export default ShowOne