import { useLoaderData } from "react-router-dom"

const PostsDetails = () => {
    const posts = useLoaderData()
    const {body, title, id, userId} = posts

  return (
    <div>
      <h2 className="text-xl">Title: {title}</h2>
    </div>
  )
}

export default PostsDetails