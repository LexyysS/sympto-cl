import Sidebar from "./components/Sidebar"
import Sintomas from "./pages/SintomasPage"
import Diccionario from "./pages/Diccionario"
import GPS from "./pages/GPS"
import { useEffect, useState } from "react"

import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  },[])
  

  return (
    <>
      {isMobile ? <NavBar /> : <Sidebar/>}
      
      <Routes>
        <Route path="/" element={<Sintomas/>} />
        <Route path="/diccionario" element={<Diccionario/>} />
        <Route path="/gps" element={<GPS/>} />
  

      </Routes>



    </>
  )
}

export default App
