import Sidebar from "./components/Sidebar"
import Sintomas from "./pages/SintomasPage"
import Diccionario from "./pages/Diccionario"

import { useEffect, useState } from "react"

import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [open, setOpen] = useState("sintomas");
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
      {isMobile ? <NavBar open={open} setOpen={setOpen}/> : <Sidebar open={open} setOpen={setOpen}/>}
      
      <Routes>
        <Route path="/" element={<Sintomas setOpen={setOpen}/>} />
        <Route path="/diccionario" element={<Diccionario setOpen={setOpen}/>} />
        
  

      </Routes>



    </>
  )
}

export default App
