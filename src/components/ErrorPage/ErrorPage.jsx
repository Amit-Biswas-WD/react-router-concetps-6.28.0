import { Link, useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error);
  return (
    <div>
        <h2 className="text-center text-2xl font-bold text-red-600">Oops Sorry Not Found Page...</h2>
        <p>{error.statusText || error.message}</p>
        {
            error.status === 404 && <div>
                <h2>Page not Found</h2>
                <p>Go back where you from.</p>
                <Link to={`/`}><button className="btn btn-accent">Home</button></Link>
            </div>
        }
    </div>
  )
}

export default ErrorPage