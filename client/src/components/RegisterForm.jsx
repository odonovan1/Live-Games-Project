import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../services/Auth'
import '../styles/Forms.css'

const RegisterForm = () => {
  let navigate = useNavigate()
  const initialState = {
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  }
  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newUser = await RegisterUser({
      email: formValues.email,
      username: formValues.username,
      password: formValues.password
    })

    setFormValues(initialState)

  }
  return (
    <div className='formContainer'>
      <form onSubmit={handleSubmit}>
        <div className='formValues'>
          <div className='value'>
            <h3 className='join'>Join SMART PICKS today</h3>
            <label htmlFor="username">Username</label>
            <input className="input" onChange={handleChange} name="username" type="text" value={formValues.username} required placeholder='username' />
          </div>
          <div className='value'>
            <label htmlFor="email">Email</label>
            <input className="input" onChange={handleChange} name="email" type="text" value={formValues.email} required placeholder='email' />
          </div>
          <div className='value'>
            <label htmlFor="password">Password</label>
            <input className="input" onChange={handleChange} name="password" type="text" value={formValues.password} required placeholder='password' />
          </div >
          <div className='value'>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input className="input" onChange={handleChange} name="confirmPassword" type="text" value={formValues.confirmPassword} required placeholder='confirmPassword' />
          </div>
          <button className='formButton'
            disabled={
              !formValues.username ||
              (!formValues.password &&
                formValues.confirmPassword === formValues.password)
            }
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  )
}

export default RegisterForm