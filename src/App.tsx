import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
  useLocation,
} from 'react-router-dom'
import { useAuth } from './context/AuthContext'

// Pages
import Login from './pages/Login'
// import DashboardHome from './pages/Dashboard/Home'
import Users from './pages/Dashboard/Users'
import UserDetails from './pages/Dashboard/UserDetails'

import DashboardLayout from '@/components/layout/DashboardLayout'
import { useEffect } from 'react'

// Protected Route Component
const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return <Navigate to='/login' replace />
  }

  return <Outlet />
}

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<Navigate to='/login' replace />} />
        <Route path='/login' element={<Login />} />

        {/* Protected Dashboard Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path='/dashboard' element={<DashboardLayout />}>
            <Route index element={<Navigate to='/dashboard/users' replace />} />

            {/* Dashboard Home */}
            {/* <Route path='home' element={<DashboardHome />} /> */}

            {/* Users Section */}
            <Route path='users'>
              <Route index element={<Users />} />
              <Route path=':userId' element={<UserDetails />} />
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
