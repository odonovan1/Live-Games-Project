import axios from "axios"
import { useEffect, useState } from "react"

const UserPage = ({ user }) => {

  const [picks, setPicks] = useState([])
  const [details, setDetails] = useState({})
  const [games, setGames] = useState([])

  const getPicks = async () => {
    const userPicks = await axios.get(`http://localhost:3001/api/pick/${user.id}/picks`)
    const userDetails = await axios.get(`http://localhost:3001/api/auth/${user.id}/details`)
    setPicks(userPicks.data)
    setDetails(userDetails.data)


    for (let i = 0; i < picks.length; i++) {
      let id = parseInt(picks[i].game_id)

      const game = await axios.get(`http://localhost:3001/api/games/${id}`)
      console.log(game)

      setGames([...games, game.data])
    }

  }


  useEffect(() => {
    getPicks()
  }, [user])

  console.log(picks)
  console.log(games)

  return (
    <div>
      <div>
        <h2>Hello {details.username}, here are your picks</h2>
      </div>
      <div>
        {picks.map((pick) => (
          <div key={pick.id}>
            <h1>{pick.title}</h1>
            <h1>{pick.name} {pick.price}</h1>
          </div>
        ))}
      </div>

    </div>
  )
}

export default UserPage