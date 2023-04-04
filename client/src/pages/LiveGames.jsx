import { Link } from "react-router-dom"
import '../styles/LiveGames.css'

const LiveGames = ({ games, user, setChosen }) => {


  const onClick = (game) => {
    setChosen(game)

  }
  console.log(games)

  const handleTime = (time) => {
    const splitTime = time.split('T')
    return splitTime[1]
  }
  const handleDate = (time) => {
    const splitDate = time.split('T')
    return splitDate[0]
  }

  return (
    <div className="gameContainer">
      {games.map((game) => (
        <div ket={game.id} className="liveGame">
          <Link to={`/details`} onClick={() => onClick(game)}>
            <h2>{game.sport_title}</h2>
            <div className="matchup">
              <h3>{game.home_team} ({game.bookmakers[0].markets[0].outcomes[0].price})</h3>

              <h2 className="vs">vs</h2>
              <h3>{game.away_team} ({game.bookmakers[0].markets[0].outcomes[1].price})</h3>
            </div>
            <div>
              <h4>{handleTime(game.commence_time).slice(0, 5)}</h4>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default LiveGames