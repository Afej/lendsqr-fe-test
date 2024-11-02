import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useOutsideClick } from '@/hooks/useClickOutside'

import { User, UserDetails } from '@/types/user'
import styles from './userTable.module.scss'

import FilterIcon from '@/assets/images/filter-dropdown-icon.png'
import OptionsIcon from '@/assets/images/options-icon.png'
import ViewIcon from '@/assets/images/view-icon.png'
import ActivateIcon from '@/assets/images/activate-icon.png'
import BlacklistIcon from '@/assets/images/blacklist-icon.png'

interface UserTableProps {
  users: UserDetails[]
}

const UserTable: React.FC<UserTableProps> = ({ users }) => {
  const navigate = useNavigate()
  const [filterOpen, setFilterOpen] = useState(false)
  const [popoverOpen, setPopoverOpen] = useState<number | null>(null)

  const toggleFilter = () => {
    setFilterOpen(!filterOpen)
  }

  const togglePopover = (index: number) => {
    setPopoverOpen(index === popoverOpen ? null : index)
  }

  const handleOutsideClick = () => {
    setFilterOpen(false)
    setPopoverOpen(null)
  }

  const viewUser = (user: User) => {
    navigate(`/dashboard/users/${user.id}`)
  }
  const blacklistUser = () => {}
  const activateUser = () => {}

  const { ref } = useOutsideClick(handleOutsideClick)

  const tableHeaders = [
    'Organization',
    'Username',
    'Email',
    'Phone Number',
    'Date Joined',
    'Status',
  ]

  return (
    <div ref={ref} className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            {tableHeaders.map((header, index) => (
              <th key={index}>
                <div className={styles.filterHeader}>
                  {header}

                  <img
                    className={styles.filterIcon}
                    src={FilterIcon}
                    onClick={() => toggleFilter()}
                  />
                </div>
              </th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.organization}</td>
              <td>{user.userName}</td>
              <td>{user.email}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.dateJoined}</td>
              <td>
                <div className={styles[`${user.status.toLowerCase()}`]}>
                  {user.status}
                </div>
              </td>

              <td>
                <div
                  className={styles.moreOptions}
                  onClick={() => togglePopover(index)}>
                  <div className={styles.moreOptionsIcon}>
                    <img src={OptionsIcon} />
                  </div>

                  {popoverOpen === index && (
                    <div ref={ref} className={styles.popover}>
                      <button onClick={() => viewUser(user)}>
                        <img src={ViewIcon} alt='view details' />
                        View Details
                      </button>
                      <button onClick={blacklistUser}>
                        <img src={BlacklistIcon} alt='blacklist' />
                        Blacklist User
                      </button>
                      <button onClick={activateUser}>
                        <img src={ActivateIcon} alt='activate user' />
                        Activate User
                      </button>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserTable
