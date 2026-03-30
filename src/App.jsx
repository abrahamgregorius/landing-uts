import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AdminLogin from './pages/AdminLogin'
import AdminLeads from './pages/AdminLeads'

const ADMIN_SESSION_KEY = 'landing_uts_admin_auth'

function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem(ADMIN_SESSION_KEY) === '1'

  if (!isLoggedIn) {
    return <Navigate to="/admin/login" replace />
  }

  return children
}

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/admin/login" element={<AdminLogin></AdminLogin>}></Route>
      <Route
        path="/admin/leads"
        element={
          <ProtectedRoute>
            <AdminLeads></AdminLeads>
          </ProtectedRoute>
        }
      ></Route>
      <Route path="*" element={<Navigate to="/" replace />}></Route>
    </Routes>
  )
}

export default App
