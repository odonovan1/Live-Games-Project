import axios from 'axios'
import { useState } from 'react'
import Client from '../services/api'
import '../styles/PickForm.css'

const PickForm = ({ user, chosen }) => {
  const initialState = {
    price: 1,
    name: null


  }

  const [gameDetails, setGameDetails] = useState(null)
  const [formValues, setFormValues] = useState(initialState)




  const homeTeam = () => {
    setFormValues({ name: chosen.home_team, price: chosen.bookmakers[0].markets[0].outcomes[0].price })
    setGameDetails({ awayTeam: chosen.away_team, homeTeam: chosen.home_team, title: chosen.sport_title })
  }
  const awayTeam = () => {
    setFormValues({ name: chosen.away_team, price: chosen.bookmakers[0].markets[0].outcomes[1].price })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()


    const userGame = await Client.post(
      `http://localhost:3001/api/games/create/${user.id}/`, gameDetails)



    const res = await Client.post(
      `http://localhost:3001/api/pick/create/${user.id}/${userGame.data.id}`, formValues)

    setFormValues(initialState)
  }

  return (
    <div>
      <button onClick={() => homeTeam()}>{chosen.home_team}</button>
      <button onClick={() => awayTeam()}>{chosen.away_team}</button>

      <button onClick={handleSubmit}>Submit Pick</button>
      <h1>{formValues.name}</h1>

    </div>
  )
}

export default PickForm