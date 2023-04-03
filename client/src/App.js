import axios from "axios";
import { BASE_URL } from './globals'
import { useState, useEffect } from "react";

function App() {

  const [games, setGames] = useState(null)
  const apiKey = process.env.ODDS_KEY
  const getGames = async () => {
    console.log('hello')

    const response = await axios.get(`${BASE_URL}/v4/sports/?apiKey=af35a6098b80ba8231d1ac1162b6c65b`)
    setGames(response)
    console.log(response)
  }

  useEffect(() => {
    getGames()
  }, [])
  return (
    <div className="App">

    </div>
  );
}

export default App;
