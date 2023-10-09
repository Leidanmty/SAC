//import { useState } from 'react'
import './styles/App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import LpContinuar from './pages/LpContinuar'
import MenuArea from './pages/MenuArea'
import Registro from './pages/Registro'
import VistaAddCAb from './pages/VistaAddCAb'
import VistaAddCAr from './pages/VistaAddCAr'
import VistaAddCC from './pages/VistaAddCC'
import VistaViewCAb from './pages/VistaViewCAb'
import VistaViewCAr from './pages/VistaViewCAr'
import VistaViewCC from './pages/VistaViewCC'

function App() {
  //const [count, setCount] = useState(0)

  return (

    <HashRouter>
      <Routes>
        <Route path="/" element={< Home />} />//Esta ruta es para Login
        <Route path='/pagecontinuar' element={<LpContinuar />} />
        <Route path='/menuarea' element={<MenuArea />} />
        <Route path='/registro' element={<Registro />} />
        <Route path='/agregarclienteabogado' element={<VistaAddCAb />} />
        <Route path='/agregarclientearquitecto' element={<VistaAddCAr />} />
        <Route path='/agregarclientecontador' element={<VistaAddCC />} />
        <Route path='/verclientesabogado' element={<VistaViewCAb />} />
        <Route path='/verclientesarquitectos' element={<VistaViewCAr />} />
        <Route path='/verclientescontadores' element={<VistaViewCC />} />
      </Routes>
    </HashRouter>

  )
}

export default App
