import { useLoaderData } from "react-router-dom"
import UsersDetains from "../UsersDetains/UserDetails";

const User = () => {
    const users = useLoaderData();
    console.log(users);
  return (
    <div>User
        <h2>This is user data: {users.length}</h2>
        <div>
            {
                users.map(user => <UsersDetains key={user.id} user={user}/> )
            }
        </div>
    </div>
  )
}

export default User