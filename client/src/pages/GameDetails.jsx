import PickForm from "../components/PickForm"
import '../styles/GameDetails.css'
const GameDetails = ({ chosen, user }) => {


  return (
    <div className="fullPage">

      <div className="details">
        <h2>Organization: {chosen.sport_title}</h2>
        <div className="teamDetails">
          <h3>Home Team: {chosen.home_team}</h3>

          <div className="odds">
            <h3>Moneyline:  {chosen.bookmakers[0].markets[0].outcomes[0].price}</h3>
          </div>
        </div>

        <div className="teamDetails">
          <h3>Away Team: {chosen.away_team} </h3>

          <div className="odds">
            <h3>Moneyline:  {chosen.bookmakers[0].markets[0].outcomes[1].price}</h3>
          </div>
        </div>
      </div>

      {user && (
        <div>
          <PickForm chosen={chosen} user={user} />
        </div>
      )}
    </div>
  )
}

export default GameDetails