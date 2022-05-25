import { Route, Routes } from "react-router-dom";
import Blog from "./Pages/Blog/Blog";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Main/Home/Home";
import OrderParts from "./Pages/Main/Parts/OrderParts";
import MyPortFolio from "./Pages/MyPortfolio/MyPortFolio";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import RequireAuth from "./Pages/Shared/RequireAuth/RequireAuth";
import SingIn from "./Pages/SignIn/SingIn";
import SingUp from "./Pages/SignUp/SignUp";
import { ToastContainer } from 'react-toastify';
import OrderConfirm from "./Pages/Main/Parts/OrderConfirm";
import MyProfile from "./Pages/Dashboard/MyProfile";
import AddMyReview from "./Pages/Dashboard/AddMyReview";
import MyOrders from "./Pages/Dashboard/MyOrders";
import AllUsers from "./Pages/Dashboard/AllUsers";


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/myportfolio" element={<MyPortFolio />} />
        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        } >
          <Route index element={<MyOrders />} />
          <Route path="addmyreview" element={<AddMyReview />} />
          <Route path="myprofile" element={<MyProfile />} />
          <Route path="allusers" element={<AllUsers />} />
        </Route>
        <Route path="/orderparts/:id" element={
          <RequireAuth>
            <OrderParts />
          </RequireAuth>
        } />
        <Route path="/orderconfirm" element={
          <RequireAuth>
            <OrderConfirm />
          </RequireAuth>
        } />
        <Route path="/signin" element={<SingIn />} />
        <Route path="/signup" element={<SingUp />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
