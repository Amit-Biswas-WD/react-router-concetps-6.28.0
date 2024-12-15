import { useLoaderData } from "react-router-dom"
import Post from "../Post/Post";

const Posts = () => {
    const posts = useLoaderData()
    console.log(posts);
  return (
    <div>Post: {posts.length}
    {
      posts.map(post => <Post key={post.userId} post={post} />)
    }
    </div>
  )
}

export default Posts