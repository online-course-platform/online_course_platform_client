import { Routes,Route } from "react-router"
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import AdminProfile from "../pages/dashboard/AdminProfile";
import ErrorPage from "../pages/error/ErrorPage";


const AppRoutes = () => {
  return (
      <Routes>
          <Route path="*" element={<ErrorPage/>} />
      {/* Main layout with Nav and Footer */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
          {/* Dashboard route without Nav and Footer */}
          <Route path="/dashboard" element={<AdminProfile/>} />
    </Routes>
  );
}

export default AppRoutes