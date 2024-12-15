import { useLoaderData } from "react-router-dom"

const UserDetails = () => {
    const users = useLoaderData()
    console.log(users);
    const {id, name, email, phone, username, website } = users
  return (
    <div>Details about User: {name}</div>
  )
}

export default UserDetails