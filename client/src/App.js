import axios from "axios";
import { BASE_URL } from './globals'
import React from 'react'
import { useState, useEffect } from 'react'
import { CheckSession } from './services/Auth'
import { Routes, Route } from 'react-router-dom'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import LiveGames from './pages/LiveGames'
import UserPage from './pages/UserPage'
import GameDetails from './pages/GameDetails'
import UpdatePasswordForm from "./pages/UpdatePasswordForm";
import UserDetails from "./pages/UserDetails";
import Users from "./pages/Users";
import Client from './services/api'
import './App.css'


function App() {

  const [games, setGames] = useState(null)
  const [user, setUser] = useState(null)
  const [refresh, setRefresh] = useState(true)
  const [chosen, setChosen] = useState(null)
  const [other, setOther] = useState(null)
  const [users, setUsers] = useState(null)
  const [loaded, setLoaded] = useState(false)
  const apiKey = process.env.REACT_APP_ODDS_KEY




  const handleLogout = () => {
    setUser(null)
    localStorage.clear()
  }
  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)

  }

  const getGames = async () => {


    const response = await axios.get(`${BASE_URL}/v4/sports/upcoming/odds/?apiKey=${apiKey}&regions=us&,spreads&oddsFormat=american`)
    setGames(response.data)

  }

  const getUsers = async () => {
    const response = await axios.get(`http://localhost:3001/api/auth/users`)
    setUsers(response.data)
  }

  const handleRefresh = async () => {
    if (refresh === true) {
      setRefresh(false)
    } else if (refresh === false) {
      setRefresh(true)
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
    getGames()
    getUsers()
  }, [refresh, loaded])
  return (
    <div className="App">
      <Nav user={user} handleLogout={handleLogout} checkToken={checkToken} />
      <main>
        <Routes>
          <Route path="/" element={<Home user={user} setUser={setUser} />}></Route>
          <Route path="/games" element={<LiveGames games={games} user={user} handleRefresh={handleRefresh} setChosen={setChosen} />}></Route>
          <Route path="/user" element={<UserPage user={user} />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/details" element={<GameDetails chosen={chosen} setChosen={setChosen} user={user} />} />
          <Route path="/login" element={<LoginForm setUser={setUser} />}></Route>
          <Route path="/register" element={<RegisterForm />}></Route>
          <Route path="/password" element={<UpdatePasswordForm user={user} />}></Route>
          <Route path="/users" element={<Users setOther={setOther} users={users} getUsers={getUsers} setLoaded={setLoaded} />}></Route>
          <Route path="/view" element={<UserDetails other={other} />}></Route>
        </Routes>

      </main>
    </div>
  );
}

export default App;
