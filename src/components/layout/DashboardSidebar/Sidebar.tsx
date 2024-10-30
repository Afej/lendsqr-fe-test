import React from 'react'
import { NavLink } from 'react-router-dom'
import './sidebar.scss'

import organization from '@/assets/images/sidebar-icons/SwitchOrganization.png'
import dashboard_icon from '@/assets/images/sidebar-icons/Dashboard.png'
import dropdown_open_icon from '@/assets/images/sidebar-icons/dropdown-open.png'
import users_icon from '@/assets/images/sidebar-icons/Users.png'
import guarantors_icon from '@/assets/images/sidebar-icons/Guarantors.png'
import loans_icon from '@/assets/images/sidebar-icons/Loans.png'
import decision_models_icon from '@/assets/images/sidebar-icons/DecisionModels.png'
import savings_icon from '@/assets/images/sidebar-icons/Savings.png'
import loan_requests_icon from '@/assets/images/sidebar-icons/LoanRequests.png'
import whitelist_icon from '@/assets/images/sidebar-icons/Whitelist.png'
import karma_icon from '@/assets/images/sidebar-icons/Karma.png'
import loan_products from '@/assets/images/sidebar-icons/LoanProducts.png'
import savings_products from '@/assets/images/sidebar-icons/SavingsProducts.png'
import fees_and_charges from '@/assets/images/sidebar-icons/FeesCharges.png'
import transactions from '@/assets/images/sidebar-icons/Transactions.png'
import services from '@/assets/images/sidebar-icons/Services.png'
import service_account from '@/assets/images/sidebar-icons/ServiceAccount.png'
import settlements from '@/assets/images/sidebar-icons/Settlements.png'
import reports from '@/assets/images/sidebar-icons/Reports.png'
import preferences from '@/assets/images/sidebar-icons/Preferences.png'
import fees_and_pricing from '@/assets/images/sidebar-icons/FeesPricing.png'
import audit_logs from '@/assets/images/sidebar-icons/AuditLogs.png'

import system_messages_icon from '@/assets/images/sidebar-icons/systems-messages.png'
import log_out_icon from '@/assets/images/sidebar-icons/sign-out.png'
import { useAuth } from '@/context/AuthContext'

export interface NavigationItem {
  image: string
  label: string
  path: string
}

export interface NavigationSection {
  title: string
  items: NavigationItem[]
}

const navigationSections: NavigationSection[] = [
  {
    title: 'CUSTOMERS',
    items: [
      { image: users_icon, label: 'Users', path: '/dashboard/users' },
      {
        image: guarantors_icon,
        label: 'Guarantors',
        path: '/dashboard/guarantors',
      },
      { image: loans_icon, label: 'Loans', path: '/dashboard/loans' },
      {
        image: decision_models_icon,
        label: 'Decision Models',
        path: '/dashboard/decision-models',
      },
      { image: savings_icon, label: 'Savings', path: '/dashboard/savings' },
      {
        image: loan_requests_icon,
        label: 'Loan Requests',
        path: '/dashboard/loan-requests',
      },
      {
        image: whitelist_icon,
        label: 'Whitelist',
        path: '/dashboard/whitelist',
      },
      { image: karma_icon, label: 'Karma', path: '/dashboard/karma' },
    ],
  },
  {
    title: 'BUSINESSES',
    items: [
      {
        image: organization,
        label: 'Organization',
        path: '/dashboard/organization',
      },
      {
        image: loan_products,
        label: 'Loan Products',
        path: '/dashboard/loan-products',
      },
      {
        image: savings_products,
        label: 'Savings Products',
        path: '/dashboard/savings-products',
      },
      {
        image: fees_and_charges,
        label: 'Fees and Charges',
        path: '/dashboard/fees-charges',
      },
      {
        image: transactions,
        label: 'Transactions',
        path: '/dashboard/transactions',
      },
      { image: services, label: 'Services', path: '/dashboard/services' },
      {
        image: service_account,
        label: 'Service Account',
        path: '/dashboard/service-account',
      },
      {
        image: settlements,
        label: 'Settlements',
        path: '/dashboard/settlements',
      },
      { image: reports, label: 'Reports', path: '/dashboard/reports' },
    ],
  },
  {
    title: 'SETTINGS',
    items: [
      {
        image: preferences,
        label: 'Preferences',
        path: '/dashboard/preferences',
      },
      {
        image: fees_and_pricing,
        label: 'Fees and Pricing',
        path: '/dashboard/fees-pricing',
      },
      { image: audit_logs, label: 'Audit Logs', path: '/dashboard/audit-logs' },
      {
        image: system_messages_icon,
        label: 'System Messages',
        path: '/dashboard/system-messages',
      },
    ],
  },
]

type SidebarProps = {
  isOpen: boolean
  onClose: () => void
}

const DashboardSidebar = ({ isOpen, onClose }: SidebarProps) => {
  const { logout } = useAuth()

  return (
    <aside className={`sidebar ${isOpen ? 'active' : ''}`}>
      <div className='sidebar-nav-item switch-organization'>
        <div>
          <img src={organization} alt='switch organization' />
        </div>

        <span>Switch Organization</span>

        <div>
          <img src={dropdown_open_icon} alt='dropdown icon' />
        </div>
      </div>

      <div className='home'>
        <NavLink
          to='/dashboard/home'
          className={({ isActive }) =>
            `sidebar-nav-item ${isActive ? 'active' : ''}`
          }
          onClick={onClose}>
          <div>
            <img src={dashboard_icon} alt='dashboard home' />
          </div>
          <span>Dashboard</span>
        </NavLink>
      </div>

      <nav className='sidebar-nav'>
        {navigationSections.map((section, index) => (
          <div key={index} className='sidebar-nav-section'>
            <h3 className='sidebar-nav-title'>{section.title}</h3>

            <nav className='sidebar-nav'>
              {section.items.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `sidebar-nav-item ${isActive ? 'active' : ''}`
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

      <hr className='line' />

      <div className='sidebar-nav-section'>
        <div className='sidebar-nav-item' onClick={logout}>
          <div>
            <img src={log_out_icon} alt='logout' />
          </div>
          <span>Logout</span>
        </div>

        <p className='version'>v1.2.0</p>
      </div>
    </aside>
  )
}

export default DashboardSidebar
