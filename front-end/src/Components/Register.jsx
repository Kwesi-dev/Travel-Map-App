import { Room, Cancel } from '@material-ui/icons'
import './register.css'
import { useRef, useState } from 'react'
import axios from 'axios'

const Register = ({ setShowRegister }) => {
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()

    const handleSubmit = async (e)=>{
        e.preventDefault()
        const newUser={
            username: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }
        try{
            await axios.post('/users/register', newUser)
            setSuccess(true)
            setShowRegister(false)
        }catch(err){
            setError(true)
        }
    }
    return (
        <div className="registerContainer">
            <div className="logo">
                <Room/>
                Kwesi Pin
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="username" ref={nameRef}/>
                    <input type="email" placeholder="email" ref={emailRef}/>
                    <input type="password" placeholder="password" ref={passwordRef}/>
                    <button className="registerBtn">Register</button>
                    {success &&
                    <span className="success">Successfull. You can login now!</span>
                    }
                    {error &&
                    <span className="failure">Something went wrong!</span>
                    }
                    <Cancel className="registerCancel" onClick={()=>setShowRegister(false)}/>
                </form>
            </div>
        </div>       
    )
}

export default Register
