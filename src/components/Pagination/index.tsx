import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import styles from './pagination.module.scss'

// import leftIcon from '@/assets/images/left-icon.png'
// import rightIcon from '@/assets/images/right-icon.png'

interface PaginationProps {
  totalItems: number
  itemsPerPage: number
  currentPage: number
  onPageChange: (selected: number) => void
  onItemsPerPageChange: (value: number) => void
}

const CustomPagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
  onItemsPerPageChange,
}: PaginationProps) => {
  const [pageRangeDisplayed, setPageRangeDisplayed] = useState(3)
  const pageSizeOptions = [10, 25, 50, 100]

  useEffect(() => {
    const handleResize = () => {
      setPageRangeDisplayed(window.innerWidth < 768 ? 1 : 3)
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const pageCount = Math.ceil(totalItems / itemsPerPage)
  const startItem = currentPage * itemsPerPage + 1
  const endItem = Math.min((currentPage + 1) * itemsPerPage, totalItems)

  return (
    <div className={styles.paginationWrapper}>
      <div className={styles.pageInfo}>
        <span>Showing</span>
        <select
          value={itemsPerPage}
          onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
          className={styles.pageSelect}>
          {pageSizeOptions.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
        <span>out of {totalItems}</span>
      </div>

      <ReactPaginate
        pageCount={pageCount}
        pageRangeDisplayed={pageRangeDisplayed}
        marginPagesDisplayed={1}
        onPageChange={({ selected }) => onPageChange(selected)}
        forcePage={currentPage}
        containerClassName={styles.pagination}
        pageClassName={styles.pageItem}
        pageLinkClassName={styles.pageLink}
        activeClassName={styles.active}
        previousClassName={styles.pageItem}
        nextClassName={styles.pageItem}
        previousLabel={<ChevronLeft className={styles.icon} />}
        nextLabel={<ChevronRight className={styles.icon} />}
        breakLabel='...'
        breakClassName={styles.pageItem}
        breakLinkClassName={styles.pageLink}
        disabledClassName={styles.disabled}
      />
    </div>
  )
}

export default CustomPagination
