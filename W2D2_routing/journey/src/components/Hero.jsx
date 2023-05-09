import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Hero = (props) => {

    // state vars for this component
    const [hero, setHero] = useState(null)
    const navigate = useNavigate()



    // ! in order to get the variable from the route
    // we need to destructure it from useParams()
    const { heroId } = useParams()
    console.log(heroId)


    useEffect(() => {
        // getHero()
            axios.get(`https://akabab.github.io/superhero-api/api/id/${heroId}.json`)
            .then((serverResponse) => {
                // ? ALWAYS CLOG the RESPONSE BEFORE YOU PUT IT IN STATE!
                console.log(serverResponse.data)
                // console.log(serverResponse.data.name)
                // console.log(serverResponse.data.images.md)
                setHero(serverResponse.data)
            })
            .catch(errObj => {
                console.log("❌", errObj)
                // this will be caught by the wildcard path route
                navigate("/dfghjkl")
            })
        
    }, [heroId, navigate])


    // const getHero = () => {
    //     axios.get(`https://akabab.github.io/superhero-api/api/id/${heroId}.json`)
    //     .then((serverResponse) => {
    //         // ? ALWAYS CLOG the RESPONSE BEFORE YOU PUT IT IN STATE!
    //         console.log(serverResponse.data)
    //         // console.log(serverResponse.data.name)
    //         // console.log(serverResponse.data.images.md)
    //         setHero(serverResponse.data)
    //     })
    //     .catch(errObj => {
    //         console.log("❌", errObj)
    //         // this will be caught by the wildcard path route
    //         navigate("/dfghjkl")
    //     })
    // }


    return (
        <fieldset>
            <legend>🦸‍♀️🦸‍♂️ Hero.jsx</legend>
            {/* {JSON.stringify(hero)} */}

            <div>
                {
                    hero ? (
                        <>
                            <h2>{hero.name}</h2>
                            <img src={hero.images.md} alt={hero.name} />
                        </>
                    ) :
                    <p> loading... </p>
            }

            </div>

        </fieldset>
    )
}

export default Hero