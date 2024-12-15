import { Link } from "react-router-dom"

const UsersDetains = ({user}) => {
    const {id, name, email, phone, username, website } = user
  return (
    <div className="ml-8 border-2 my-4 p-4 rounded-sm">
      <h2>Name: {name}</h2>
      <p className="my-1">User Name:{username}</p>
      <p>Phone: {phone}</p>
      <p className="my-1">Email: {email}</p>
      <p>Website: {website}</p>
      <Link className="text-accent font-semibold text-lg" to={`/user/${id}`}>Details More...</Link>
      <Link to={`/user/${id}`}> <button>Click Me</button> </Link>
    </div>
  )
}

export default UsersDetains