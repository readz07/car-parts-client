import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Main/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import SingIn from "./Pages/SignIn/SingIn";


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SingIn />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
