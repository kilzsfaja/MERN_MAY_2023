import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Form = (props) => {

    const [heroNum, setHeroNum] = useState(10)

    // in order to use the programmatic way
    // we need to invoke the useNavigate()
    const navigate = useNavigate()
    // console.log(typeof navigate)


    const submitHandler = (e) => {
        e.preventDefault()
        // navigate to a route
        // navigate("/hero/" + heroNum)
        navigate(`/hero/${heroNum}`)
    }

    const goBack = () => {
        // console.log("back")
        navigate(-1)
    }

    return (
        <fieldset>
            <legend>Form.jsx</legend>
            <p>
                {JSON.stringify(heroNum)}
            </p>

            <form onSubmit={submitHandler}>
                <input type="number" min="1" onChange={e => setHeroNum(e.target.value)} value={heroNum}/>
                <button>get hero</button>
            </form>

            {/* GO BACK BUTTON */}
            <p>
                <button onClick={goBack}>go back! 👈</button>
            </p>
        </fieldset>
    )
}

export default Form