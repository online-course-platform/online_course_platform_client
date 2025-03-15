import { Outlet } from "react-router"
import Navbar from "../shared/navbar/Navbar"
import Footer from "../shared/footer/Footer"


const MainLayout = () => {
  return (
      <div>
          <Navbar />
          <div>
              <Outlet/>
          </div>
          <Footer/>
    </div>
  )
}

export default MainLayout