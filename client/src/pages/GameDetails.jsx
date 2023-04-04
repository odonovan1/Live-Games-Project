import PickForm from "../components/PickForm"
const GameDetails = ({ chosen, user }) => {


  return (
    <div>
      <div>
        <h1>{chosen.sport_title}</h1>
        <div>
          <h3>{chosen.home_team} {chosen.bookmakers[0].markets[0].outcomes[0].price}</h3>

          <h2>vs</h2>
          <h3>{chosen.away_team} {chosen.bookmakers[0].markets[0].outcomes[1].price}</h3>
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