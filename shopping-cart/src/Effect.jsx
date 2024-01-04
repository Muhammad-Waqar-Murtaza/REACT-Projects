import React, {useState, useEffect} from 'react'

const Effect = () => {

    const [email, setEmail] = useState('')
    const [isValid, setIsValid] = useState(false)

    useEffect(()=>{
        
        const identifier = setTimeout(()=>{
            console.log('Effect Runs')
            setIsValid(email.includes('@'))
        }, 500)

        return () => {
            clearTimeout(identifier)
            console.log('Effect Cleanup')
        }
    },[email])

    const handleChange = (e) => {
        setEmail(e.target.value)
    }

  return (
    <div>
        <form action="">
            <label htmlFor="email">Enter Email</label>
            <input type="email" name='email' onChange={handleChange} />
        </form>
    </div>
  )
}

export default Effect