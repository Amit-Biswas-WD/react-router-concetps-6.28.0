import { Outlet, useNavigation } from "react-router-dom"
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"

const Home = () => {
  const navigation = useNavigation()
  return (
    <div>
        <Navbar/>
        {
          navigation.state === "Loading" ? <p className="text-8xl font-bold text-red-600 text-center flex justify-center items-center">Loading this page...</p> : <Outlet/> }
        <Footer/>
    </div>
  )
}

export default Home