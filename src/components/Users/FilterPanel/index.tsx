import React from 'react'
import { Button } from '@/components/common/Button/Index'
import { Input } from '@/components/common/Input'
import styles from './FilterPanel.module.scss'

interface FilterValues {
  organization: string
  username: string
  email: string
  date: string
  phoneNumber: string
  status: string
}

interface FilterPanelProps {
  isOpen: boolean
  filterValues: FilterValues
  onFilterChange: (field: keyof FilterValues, value: string) => void
  onFilterSubmit: () => void
  onFilterReset: () => void
}

export const FilterPanel: React.FC<FilterPanelProps> = ({
  isOpen,
  filterValues,
  onFilterChange,
  onFilterSubmit,
  onFilterReset,
}) => {
  if (!isOpen) return null

  return (
    <div className={styles.filterPanelWrapper}>
      <div className={styles.filterPanel}>
        <div className={styles.filterForm}>
          <div className={styles.formGroup}>
            <label>Organization</label>
            <select
              value={filterValues.organization}
              onChange={(e) => onFilterChange('organization', e.target.value)}>
              <option value=''>Select</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label>Username</label>
            <Input
              type='text'
              placeholder='User'
              value={filterValues.username}
              onChange={(e) => onFilterChange('username', e.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Email</label>
            <Input
              type='email'
              placeholder='Email'
              value={filterValues.email}
              onChange={(e) => onFilterChange('email', e.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Date</label>
            <Input
              type='date'
              value={filterValues.date}
              onChange={(e) => onFilterChange('date', e.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Phone Number</label>
            <Input
              type='tel'
              placeholder='Phone Number'
              value={filterValues.phoneNumber}
              onChange={(e) => onFilterChange('phoneNumber', e.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Status</label>
            <select
              value={filterValues.status}
              onChange={(e) => onFilterChange('status', e.target.value)}>
              <option value=''>Select</option>
              <option value='active'>Active</option>
              <option value='inactive'>Inactive</option>
              <option value='pending'>Pending</option>
              <option value='blacklisted'>Blacklisted</option>
            </select>
          </div>
        </div>

        <div className={styles.filterActions}>
          <Button variant='outline' color='#545F7D' onClick={onFilterReset}>
            Reset
          </Button>
          <Button onClick={onFilterSubmit}>Filter</Button>
        </div>
      </div>
    </div>
  )
}
