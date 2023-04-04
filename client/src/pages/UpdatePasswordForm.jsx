import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../services/Auth'
import axios from 'axios'
import Client from '../services/api'
import '../styles/Forms.css'


const UpdatePasswordForm = ({ user }) => {

  let navigate = useNavigate()
  const initialState = {
    oldPassword: "",
    newPassword: ""
  }
  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
    console.log(formValues)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const update = await Client.put(`http://localhost:3001/api/auth/update/${user.id}`, {
      oldPassword: formValues.oldPassword,
      newPassword: formValues.newPassword
    })

    setFormValues(initialState)
    navigate('/')

  }

  return (
    <div className='formContainer'>
      <form onSubmit={handleSubmit}>
        <div className='formValues newPassword'>

          <div className='value'>
            <label htmlFor="oldPassword">Old Password</label>
            <input type="text" onChange={handleChange} name="oldPassword" value={formValues.oldPassword} required placeholder='Old Password' />
          </div>
          <div className='value'>
            <label htmlFor="newPassword">New Password</label>
            <input type="text" onChange={handleChange} name="newPassword" value={formValues.newPassword} required placeholder='new Password' />
          </div>
          <button className='formButton'>Submit</button>
        </div>
      </form>
    </div>
  )

}

export default UpdatePasswordForm