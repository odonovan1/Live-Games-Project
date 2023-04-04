import axios from "axios"
import { useEffect, useState } from "react"
import '../styles/UserPage.css'

const UserDetails = ({ other }) => {

  const [picks, setPicks] = useState([])
  const [details, setDetails] = useState({})
  const [games, setGames] = useState([])
  const [loaded, setLoaded] = useState(false)

  const getPicks = async () => {
    const userPicks = await axios.get(`http://localhost:3001/api/pick/${other.id}/picks`)
    const userDetails = await axios.get(`http://localhost:3001/api/auth/${other.id}/details`)
    setPicks(userPicks.data)
    setDetails(userDetails.data)


    for (let i = 0; i < picks.length; i++) {
      let id = parseInt(picks[i].game_id)

      const game = await axios.get(`http://localhost:3001/api/games/${id}`)
      console.log(game)

      setGames([...games, game.data])
    }

  }

  const handleDelete = async (pick) => {
    await axios.delete(`http://localhost:3001/api/pick/${pick.id}/delete`)
    if (loaded === true) {
      setLoaded(false)
    } else if (loaded === false) {
      setLoaded(true)
    }
  }


  useEffect(() => {
    getPicks()
  }, [other, loaded])



  return (
    <div>
      <div className="intro">
        <h2>These are {details.username}'s current picks</h2>
      </div>
      <div className="userPicks">
        {picks.map((pick) => (
          <div key={pick.id} className="userPick">

            <h2 className="pickDetails"><span className="winner">{pick.name}</span> to beat <span className="loser">{pick.pick_id}</span></h2>
            {pick.price > 0 && (
              <h3>+{pick.price} Moneyline</h3>
            )}
            {pick.price < 0 && (
              <h3>{pick.price} Moneyline</h3>
            )}



          </div>
        ))}
      </div>

    </div>
  )
}

export default UserDetails