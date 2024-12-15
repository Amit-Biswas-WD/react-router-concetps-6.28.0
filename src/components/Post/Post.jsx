import { Link } from "react-router-dom";

const Post = ({post}) => {
    console.log(post);
    const {body, title, id, userId} = post
  return (
    <div className="ml-8 border-2 my-4 p-4 rounded-sm">
        <h2 className="text-xl">Title: {title}</h2>
        <p>{body}</p>
        <Link to={`/post/${id}`}> <button>Click Here.</button> </Link>
    </div>
  )
}

export default Post