import "./App.css";
import About from "./components/About.jsx";
import Blog from "./components/Blog.jsx";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import NewsLetter from "./components/NewsLetter.jsx";
import Products from "./components/Products.jsx";
import Services from "./components/Services.jsx";
import MyFooter from "./components/MyFooter.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <About />
      <Products />
      <Blog />
      <NewsLetter />
      <MyFooter />
    </>
  );
}

export default App;
