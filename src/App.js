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
        } />
        <Route path="/orderparts/:id" element={
          <RequireAuth>
            <OrderParts/>
          </RequireAuth>
        } />
        <Route path="/signin" element={<SingIn />} />
        <Route path="/signup" element={<SingUp />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
