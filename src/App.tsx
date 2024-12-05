import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalCss } from './styles'
import Homep from './Pages/Home'
import PratosItalianos from './Pages/Perfil/italianos'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Homep />} />
    <Route path="/pratos/:id" element={<PratosItalianos />} />
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
