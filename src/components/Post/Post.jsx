import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
  const navigate = useNavigate()
    console.log(post);
    const {body, title, id, userId} = post

    const handleShowDetails = () => {
      navigate(`/post/${id}`)
    }

  return (
    <div className="ml-8 border-2 my-4 p-4 rounded-sm">
        <h2 className="text-xl">Title: {title}</h2>
        <p>{body}</p>
       <div className="flex gap-8">
       <Link className="text-accent font-bold text-xl mt-2" to={`/post/${id}`}> See Details. </Link>
        <Link to={`/post/${id}`}> <button className="btn">Click Here.</button> </Link>
        <button onClick={handleShowDetails} className="btn btn-accent">Click Button</button>
       </div>
    </div>
  )
}

export default Post