import "./App.css";
import Navbar from "./components/navbar/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home3 from "./pages/home3";
import Home2 from "./pages/";
import Home4 from "./pages/home5";
import Home5 from "./pages/home5";
import Home from "./pages/home";
import Home7 from "./pages/home7";
import Footer from "./components/footer/footer.js";
import Brand from "./pages/brand";


function App() {

  return (
    <div>
      <Navbar />
      <Home />
      <Home2 />
      <Home3 />
      <Home4/>
      <Home5/>
      <Brand/> 
      <Home7/>
      <Footer />
    </div>
  );
}

export default App;
