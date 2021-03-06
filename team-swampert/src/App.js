import "./App.css";
import Homepage from "./Components/Homepage/Homepage";
import { NewsContextProvider } from "./Components/NewsPage/NewsContext";
import News from "./Components/NewsPage/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./Components/AboutUs";
import Blog from "./Components/Blog/Blog";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Marketplace from "./Components/Marketplace/Marketplace";
import Market from "./Components/Marketplace/Market";
import CreateBlog from "./Components/Blog/createBlog";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/Signup";
import { UserContextProvider } from "./Components/userContext/context";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <UserContextProvider>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/About" element={<AboutUs />} />
          <Route exact path="/News" element={<NewsContextProvider><News /> </NewsContextProvider>} />
          <Route exact path="/Marketplace" element={<Marketplace />} />
          <Route exact path="/Market/*" element={<Market/>} />
          <Route exact path="/Blog" element={<Blog />} />
          <Route exact path="/CreateBlog" element={<CreateBlog />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/SignUp" element={<SignUp />} />
        </Routes>
      </UserContextProvider>
      </BrowserRouter>
      <Footer />

    </div>
  );
}

export default App;
