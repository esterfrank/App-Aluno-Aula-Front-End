import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import DashboardPage from './pages/DashboardPage'
import LoginPage from './pages/LoginPage'
import { UsuarioProvider } from './components/UsuarioContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UsuarioProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </BrowserRouter>
      <DashboardPage />
    </UsuarioProvider>
  </StrictMode>,
)
