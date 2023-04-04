import { useEffect, useState } from 'react'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'


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
    <div>
      <h1>Hallo</h1>
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