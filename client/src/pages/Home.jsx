import { useEffect, useState } from 'react'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'
import '../styles/Home.css'


const Home = ({ user, setUser }) => {

  const [login, setLogin] = useState(false)

  const switchLogin = () => {
    if (login === false) {
      setLogin(true)
    } else if (login === true) {
      setLogin(false)
    }
  }

  useEffect(() => {

  }, [login])


  return user ? (
    <div className='home'>
      <div className='welcome'>

        <h1>Welcome to the future of social picking!</h1>
      </div>
      <img src='https://www.pinclipart.com/picdir/big/557-5575148_download-free-png-hd-sports-activities-clipart-sports.png' />
    </div>
  ) : (
    <div>
      {login === false && (
        <div>
          <RegisterForm />
          {/* <button onClick={() => switchLogin()}>Login</button> */}
        </div>
      )}
      {login === true && (
        <div>
          <LoginForm setUser={setUser} />
          {/* <button onClick={() => switchLogin()}>Register</button> */}
        </div>
      )}
    </div>
  )
}

export default Home