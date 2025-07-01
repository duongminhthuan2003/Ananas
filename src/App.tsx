import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Product from './pages/Product.tsx';
import logo from './assets/logo-black.png'

function App() {
  return (
      <div>
          <nav className="fixed flex flex-row w-full z-30 navbar px-3">
              <Link to="/" className="m-0"><img src={logo} alt='Logo' className="h-14"/></Link>
              <div className="flex-1 m-0" />
              <Link to="/product">Product</Link>
          </nav>

          <div>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/product" element={<Product/>}/>
              </Routes>
          </div>
      </div>
  )
}

export default App
