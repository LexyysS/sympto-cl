import Sidebar from "./components/Sidebar"
import Sintomas from "./pages/SintomasPage"
import Diccionario from "./pages/Diccionario"
import GPS from "./pages/GPS"

import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
      
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Sintomas/>} />
        <Route path="/diccionario" element={<Diccionario/>} />
        <Route path="/gps" element={<GPS/>} />
  

      </Routes>



    </>
  )
}

export default App
