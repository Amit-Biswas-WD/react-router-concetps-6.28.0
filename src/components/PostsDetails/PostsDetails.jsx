import { useLoaderData, useNavigate, useParams } from "react-router-dom"

const PostsDetails = () => {
    const posts = useLoaderData()
    const {postId} = useParams()
    const navigate = useNavigate()
    const {body, title, id, userId} = posts

    console.log(postId);

    const handleGoBack = () => {
      // navigate(`/post`)
      navigate(-1)
    }

  return (
    <div>
      <h2 className="text-xl">Title: {title}</h2>
      <button onClick={handleGoBack} className="btn btn-accent">Go Back</button>
    </div>
  )
}

export default PostsDetails