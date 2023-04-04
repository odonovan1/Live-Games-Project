import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SignInUser } from '../services/Auth'
import '../styles/Forms.css'


const LoginForm = ({ setUser }) => {
  let navigate = useNavigate()

  const initialState = { email: '', password: '' }

  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    setFormValues(initialState)
    setUser(payload)
    navigate('/')

  }

  return (
    <div className='formContainer'>
      <form onSubmit={handleSubmit} className="login-form">
        <div className='formValues loginForm'>
          <h1 className='join'>Login to check live odds</h1>

          <label htmlFor="email" className="login-email-label">
            Email
          </label>
          <input

            onChange={handleChange}
            name="email"
            type="email"
            value={formValues.email}
            required
            placeholder="Email"
            className="input"
          />



          <label htmlFor="password" className="login-password-label">
            Password
          </label>
          <input
            onChange={handleChange}
            name="password"
            type="password"
            value={formValues.password}
            required
            placeholder="Password"
            className="input"
          />

          <button className='formButton' disabled={!formValues.email || !formValues.password}>
            Log In
          </button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
