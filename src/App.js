import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Pokemones from "./views/Pokemones";
import Detalle from "./views/Detalle";
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (

    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/pokemones" element={<Pokemones />} />
          <Route path="/pokemones/:nombre" element={<Detalle />} />
        </Routes>
      </BrowserRouter>
      <br></br>
      <Footer />


    </div>

  );
}
export default App;
