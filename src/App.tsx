import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalCss } from './styles'
import Homep from './Pages/Home'
import PratosItalianos from './Pages/Perfil/italianos'
import { store } from './Store'
import Cart from './Components/Cart'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Homep />} />
    <Route path="/pratos/:id" element={<PratosItalianos />} />
  </Routes>
)

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
