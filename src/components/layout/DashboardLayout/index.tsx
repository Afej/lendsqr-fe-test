import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

import styles from './dashboardLayout.module.scss'
import DashboardSidebar from '@/components/layout/DashboardSidebar/Sidebar'
import DashboardHeader from '@/components/layout/DashboardHeader/Header'

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)
  const closeSidebar = () => setIsSidebarOpen(false)

  return (
    <div className={styles['dashboard-layout']}>
      <DashboardHeader toggleSidebar={toggleSidebar} />

      <main className={styles['dashboard-main']}>
        <DashboardSidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />

        <div className={styles['dashboard-content']}>
          <Outlet />
        </div>
      </main>

      <div
        className={`${styles['dashboard-overlay']} ${
          isSidebarOpen ? styles['active'] : ''
        }`}
        onClick={closeSidebar}
      />
    </div>
  )
}

export default DashboardLayout
