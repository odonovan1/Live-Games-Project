import axios from "axios"
import { useEffect, useState } from "react"
import '../styles/UserPage.css'

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

  const handleDelete = async () => {

  }


  useEffect(() => {
    getPicks()
  }, [user])



  return (
    <div>
      <div className="intro">
        <h2>Hello {details.username}, here are your picks</h2>
      </div>
      <div className="picks">
        {picks.map((pick) => (
          <div key={pick.id} className="pick">

            <h2 className="pickDetails">{pick.name} to beat {pick.pick_id}</h2>
            <h3>{pick.price} Moneyline</h3>
            <button>DELETE</button>
          </div>
        ))}
      </div>

    </div>
  )
}

export default UserPage