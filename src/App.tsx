import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalCss } from './styles'
import Homep from './Pages/Home'
import PratosJaponeses from './Pages/Perfil/japoneses'
import PratosItalianos from './Pages/Perfil/italianos'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Homep />} />
    <Route path="/pratosjaponeses" element={<PratosJaponeses />} />
    <Route path="/pratositalianos" element={<PratosItalianos />} />
  </Routes>
)

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Rotas />
    </BrowserRouter>
  )
}

export default App
