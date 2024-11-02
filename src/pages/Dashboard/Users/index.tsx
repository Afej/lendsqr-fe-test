import { useMemo, useState } from 'react'
import { usersCardStats } from '@/constants/userCardStats'
import styles from './users.module.scss'
import UserTable from '@/components/Users/UserTable'
import Pagination from '@/components/Pagination'

import { useUsersData } from '@/hooks/useUsersData'
import Loader from '@/components/common/Loader'

const Users = () => {
  const { data: usersData, isLoading } = useUsersData()
  const [currentPage, setCurrentPage] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(10)

  const filteredUsers = useMemo(() => {
    if (!usersData) return []
    return usersData
  }, [usersData])

  const paginatedUsers = useMemo(() => {
    const startIndex = currentPage * itemsPerPage
    return filteredUsers.slice(startIndex, startIndex + itemsPerPage)
  }, [filteredUsers, currentPage, itemsPerPage])

  const handlePageChange = (selected: number) => {
    setCurrentPage(selected)
  }

  const handleItemsPerPageChange = (value: number) => {
    setItemsPerPage(value)
    setCurrentPage(0)
  }

  return (
    <main>
      <h1 className={styles.pageTitle}>Users</h1>

      {/* users stats */}
      <section className={styles.cardContainer}>
        {usersCardStats.map(({ title, value, icon }) => (
          <div className={styles.card} key={title}>
            <div className={styles.cardIcon}>
              <img src={icon} alt={title} />
            </div>
            <div className={styles.cardContent}>
              <p className={styles.cardTitle}>{title}</p>
              <p className={styles.cardValue}>{value}</p>
            </div>
          </div>
        ))}
      </section>

      <section>
        {/* users table */}
        {isLoading ? (
          <>
            <Loader />
          </>
        ) : (
          <>
            <UserTable users={paginatedUsers} />

            <Pagination
              totalItems={filteredUsers.length}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              onPageChange={handlePageChange}
              onItemsPerPageChange={handleItemsPerPageChange}
            />
          </>
        )}
      </section>
    </main>
  )
}

export default Users
