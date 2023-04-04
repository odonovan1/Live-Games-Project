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
import './App.css'


function App() {

  const [games, setGames] = useState(null)
  const [user, setUser] = useState(null)
  const [refresh, setRefresh] = useState(true)
  const [chosen, setChosen] = useState(null)
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
  }, [refresh])
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
          <Route path="/login" element={<LoginForm />}></Route>
          <Route path="/register" element={<RegisterForm />}></Route>
        </Routes>

      </main>
    </div>
  );
}

export default App;
