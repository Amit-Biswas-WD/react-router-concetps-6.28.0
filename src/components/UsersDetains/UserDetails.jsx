
const UsersDetains = ({user}) => {
    const {id, name, email, phone, username, website } = user
  return (
    <div className="ml-8">
      <h2>{name}</h2>
      <p>{username}</p>
      <p>{phone}</p>
      <p>{email}</p>
      <p>{website}</p>
    </div>
  )
}

export default UsersDetains