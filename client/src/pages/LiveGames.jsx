import { Link } from "react-router-dom"

const LiveGames = ({ games, user, setChosen }) => {


  const onClick = (game) => {
    setChosen(game)

  }

  return (
    <div>
      {games.map((game) => (
        <div ket={game.id} className="liveGame">
          <Link to={`/details`} onClick={() => onClick(game)}>
            <h1>{game.sport_title}</h1>
            <div>
              <h3>{game.home_team} {game.bookmakers[0].markets[0].outcomes[0].price}</h3>

              <h2>vs</h2>
              <h3>{game.away_team} {game.bookmakers[0].markets[0].outcomes[1].price}</h3>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default LiveGames