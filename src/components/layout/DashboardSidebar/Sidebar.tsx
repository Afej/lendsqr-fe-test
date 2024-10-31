import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './sidebar.module.scss'

import organization from '@/assets/images/sidebar-icons/SwitchOrganization.png'
import dashboard_icon from '@/assets/images/sidebar-icons/Dashboard.png'
import dropdown_open_icon from '@/assets/images/sidebar-icons/dropdown-open.png'
import log_out_icon from '@/assets/images/sidebar-icons/sign-out.png'

import { useAuth } from '@/context/AuthContext'
import { navigationSections } from '@/constants/sidebarNav'

type SidebarProps = {
  isOpen: boolean
  onClose: () => void
}

const DashboardSidebar = ({ isOpen, onClose }: SidebarProps) => {
  const { logout } = useAuth()

  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.active : ''}`}>
      <div
        className={
          styles['sidebar-nav-item'] + ' ' + styles['switch-organization']
        }>
        <div>
          <img src={organization} alt='switch organization' />
        </div>

        <span>Switch Organization</span>

        <div>
          <img src={dropdown_open_icon} alt='dropdown icon' />
        </div>
      </div>

      <div className={styles.home}>
        <NavLink
          to='/dashboard/home'
          className={({ isActive }) =>
            `${styles['sidebar-nav-item']} ${isActive ? styles.active : ''}`
          }
          onClick={onClose}>
          <div>
            <img src={dashboard_icon} alt='dashboard home' />
          </div>
          <span>Dashboard</span>
        </NavLink>
      </div>

      <nav className={styles['sidebar-nav']}>
        {navigationSections.map((section, index) => (
          <div key={index} className={styles['sidebar-nav-section']}>
            <h3 className={styles['sidebar-nav-title']}>{section.title}</h3>

            <nav className={styles['sidebar-nav']}>
              {section.items.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `${styles['sidebar-nav-item']} ${
                      isActive ? styles.active : ''
                    }`
                  }
                  onClick={onClose}>
                  <div>
                    <img src={item.image} alt={item.label} />
                  </div>
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </nav>
          </div>
        ))}
      </nav>

      <hr className={styles.line} />

      <div className={styles['sidebar-nav-section']}>
        <div className={styles['sidebar-nav-item']} onClick={logout}>
          <div>
            <img src={log_out_icon} alt='logout' />
          </div>
          <span>Logout</span>
        </div>

        <p className={styles.version}>v1.2.0</p>
      </div>
    </aside>
  )
}

export default DashboardSidebar
