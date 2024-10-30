import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

import './dashboardLayout.scss'
import DashboardSidebar from '@/components/layout/DashboardSidebar/Sidebar'
import DashboardHeader from '@/components/layout/DashboardHeader/Header'

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)
  const closeSidebar = () => setIsSidebarOpen(false)

  return (
    <div className='dashboard-layout'>
      <DashboardHeader toggleSidebar={toggleSidebar} />

      <main className='dashboard-main'>
        <DashboardSidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />

        <div className='dashboard-content'>
          <Outlet />
        </div>
      </main>

      <div
        className={`dashboard-overlay ${isSidebarOpen ? 'active' : ''}`}
        onClick={closeSidebar}
      />
    </div>
  )
}

export default DashboardLayout
