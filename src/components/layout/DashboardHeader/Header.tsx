import React from 'react'
import { Menu } from 'lucide-react'
import { Input } from '@/components/common/Input'
import styles from './header.module.scss'

import search from '@/assets/images/search.png'
import logo from '@/assets/images/logo.svg'
import notification_icon from '@/assets/images/notification-icon.png'
import avatar_icon from '@/assets/images/avatar-icon.png'
import dropdown_icon from '@/assets/images/dropdown-icon.png'

type HeaderProps = {
  toggleSidebar: () => void
}

const DashboardHeader = ({ toggleSidebar }: HeaderProps) => {
  return (
    <header className={styles['header']}>
      <div className={styles['header-left']}>
        <button className={styles['menu-trigger']} onClick={toggleSidebar}>
          <Menu />
        </button>

        <div className={styles['header-logo']}>
          <img src={logo} alt='Lendsqr logo' />
        </div>

        <div className={styles['header-search']}>
          <Input type='text' placeholder='Search for anything' />

          <div className={styles['header-search-icon']}>
            <img src={search} alt='search icon' />
          </div>
        </div>
      </div>

      <div className={styles['header-right']}>
        <p className={styles['header-text']}>Docs</p>

        <div className={styles['header-notifications']}>
          <img src={notification_icon} alt='notification_icon' />
        </div>

        <div className={styles['header-user']}>
          <div className=''>
            <img
              src={avatar_icon}
              alt='avatar_icon'
              className={styles['header-user-avatar']}
            />
          </div>

          <p className={styles['header-user-name']}>Admin</p>

          <img
            src={dropdown_icon}
            alt='dropdown_icon'
            className={styles['dropdown-icon']}
          />
        </div>
      </div>
    </header>
  )
}

export default DashboardHeader
