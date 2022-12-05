import {Routes , Route} from "react-router-dom";
import { Container} from "react-bootstrap"
import { Store } from "./pages/Store";
import { Navbar } from "./components/Navbar";
import { LoadData } from "./components/LoadData";
import { useEffect, useRef } from "react";
import { Cart } from "./pages/Cart";

function App() {

  const ref = useRef(true);
  
  LoadData();


  return (
     <div>
      <Navbar/>
      <Container className="mb-4">
        <Routes>
          
          <Route path="/" element={<Store/>} />
          <Route path="/Shopping_Cart/" element={<Store/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </Container>
      </div>
  )
}

export default App
