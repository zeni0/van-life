
import React from 'react'
import { useLocation, useNavigate } from "react-router-dom"
import { loginUser } from '../api'

export default function Login() {
    
    const location = useLocation()
    const navigate = useNavigate()

    const [status, setStatus] = React.useState("idle")
    const [error, setError] = React.useState(null)

    const userLoc = location.state?.userLoc || "/host"

    function loginSubmit(formData) {
       const email = formData.get("email")
       const password = formData.get("password")
       setStatus("submitting")
       setError(null)

        loginUser({email, password})
            .then(data => {
                console.log(data)
                setError(null)
                localStorage.setItem("loggedin", true)
                navigate(userLoc, { replace: true })
            })
            .catch(err => {
                setError(err)
                console.log(err)
            })
            .finally(() => {
                setStatus("idle")
            })
       
    }
    
    return (
        <div className="login-container">
            {location.state?.message && <h3 style={{color: "red"}}>{location.state.message}</h3>}
            <h1>Sign in to your account</h1>
            {error?.message && <p style={{color: "red"}}>{error.message}</p>}
            <form action={loginSubmit}>
                <input 
                    name="email"
                    type="email"
                    placeholder="Email address" />
                <input 
                    name="password"
                    type="password"
                    placeholder="Password" />
                <button disabled={status === "submitting"}>
                    {status === "submitting"
                        ? "Logging in..."
                        : "Log in"
                    }
                </button>
            </form>
        </div> 
    )
}