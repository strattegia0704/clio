import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import FAQ from './pages/FAQ'
import Home from './pages/Home'
import Privacidade from './pages/Privacidade'
import Termos from './pages/Termos'
import User from './pages/User'
import Signin from './pages/Signin'
import Signup from './pages/Signup'

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />}/>
          <Route path='/sobre' element={<Sobre />}/>
          <Route path='/contato' element={<Contato />}/>
          <Route path='/user' element={<User />}/>
            <Route path='/user/login' element={<Signin />}/>
            <Route path='/user/registrar' element={<Signup />}/>
          <Route path='/FAQ' element={<FAQ />}/>
          <Route path='/privacidade' element={<Privacidade />}/>
          <Route path='/termos' element={<Termos />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
)
