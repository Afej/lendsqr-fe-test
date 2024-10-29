import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom'
import { useAuth } from './context/AuthContext'

// Pages
import Login from './pages/Login'
import DashboardHome from './pages/Dashboard/Home'
import Users from './pages/Dashboard/Users'
import UserDetails from './pages/Dashboard/UserDetails'

import DashboardLayout from '@/components/layouts/Dashboard'

// Protected Route Component
const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return <Navigate to='/login' replace />
  }

  return <Outlet />
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<Navigate to='/login' replace />} />
        <Route path='/login' element={<Login />} />

        {/* Protected Dashboard Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path='/dashboard' element={<DashboardLayout />}>
            {/* Dashboard Home */}
            <Route index element={<DashboardHome />} />

            {/* Users Section */}
            <Route path='users'>
              <Route index element={<Users />} />
              <Route path=':id' element={<UserDetails />} />
            </Route>

            {/* Redirect /dashboard/* to /dashboard */}
            <Route path='*' element={<Navigate to='/dashboard' replace />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
