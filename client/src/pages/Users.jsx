import { Link } from "react-router-dom"
import '../styles/Users.css'

const Users = ({ setOther, users, setLoaded }) => {

  console.log(users)
  setLoaded(true)

  const handleClick = (other) => {
    setOther(other)
  }

  return (
    <div className="users">
      {users.map((user) => (
        <div key={user.id} className="user">
          <Link to={`/view`} onClick={() => handleClick(user)}>
            <h1>{user.username}</h1>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Users