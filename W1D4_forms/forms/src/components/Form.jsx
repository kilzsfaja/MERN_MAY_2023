import {useState} from 'react'

const Form = (props) => {
  // console.log(props)
  // create state for this component
  const [zoo, setZoo] = useState(props.animals)
  const [newAnimal, setNewAnimal] = useState("")
  const [nickname, setNickName] = useState("bob")


  const submitHandler = (e) => {
    e.preventDefault()
    // console.log(newAnimal)
    // add to the array I must first make a COPY
    setZoo([...zoo, newAnimal])
    
    // alternative way
    const copyZoo = [...zoo]
    copyZoo.push(newAnimal)
    setZoo(copyZoo)
    
    setNewAnimal("")
  }

  return (
    <fieldset>
      <legend>Form.jsx</legend>
      <p>
        our zoo: {JSON.stringify(zoo)}
      </p>
      <p>
        state variable "newAnimal" is {JSON.stringify(newAnimal)}
      </p>

      <form onSubmit={submitHandler}>
        <p>
          give a new animal:
          <input onChange={ (e) => setNewAnimal(e.target.value)} value={newAnimal} />
        </p>

        <p>
          animal nickname:
          <input value={nickname} onChange={ (e) => setNickName(e.target.value)}  />
        </p>
        <button>create</button>
      </form>








    </fieldset>
  )
}

export default Form