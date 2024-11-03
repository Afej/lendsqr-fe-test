import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styles from './userDetails.module.scss'
import { Star } from 'lucide-react'
import { Button } from '@/components/common/Button/Index'

import ArrowLeft from '@/assets/images/arrow-left.png'
import Avatar from '@/assets/images/avatar.png'
import { useUsersData } from '@/hooks/useUsersData'
import { UserDetails } from '@/types/user'
import Loader from '@/components/common/Loader'

const UserDetailsPage = () => {
  const navigate = useNavigate()
  const { userId } = useParams()

  const tabs = [
    'General Details',
    'Documents',
    'Bank Details',
    'Loans',
    'Savings',
    'App and System',
  ]

  const [activeTab, setActiveTab] = useState(tabs[0])

  const renderStarRating = (filled: number) => {
    return Array(3)
      .fill(0)
      .map((_, index) => (
        <Star
          key={index}
          size={16}
          className={index < filled ? styles.starFilled : styles.starEmpty}
          style={{ fill: index < filled ? '#E9B200' : '' }}
        />
      ))
  }

  const { data: usersData, isLoading } = useUsersData()

  if (isLoading) {
    return (
      <>
        <Loader />
      </>
    )
  }

  // Function to find the user by ID
  const findUserById = (id: string): UserDetails | undefined => {
    return usersData?.find((user: UserDetails) => user.id === id)
  }

  const user = userId ? findUserById(userId) : undefined

  const onBackClick = () => {
    navigate('/dashboard/users')
  }

  return (
    <main>
      <header className={styles.header}>
        <button className={styles.backButton} onClick={onBackClick}>
          <img src={ArrowLeft} alt='' />
          Back to Users
        </button>

        <div className={styles.headerContent}>
          <h1>User Details</h1>

          {user && (
            <>
              <div className={styles.actions}>
                <div>
                  <Button variant='outline' color='#E4033B'>
                    BLACKLIST USER
                  </Button>
                </div>
                <div>
                  <Button variant='outline' color='#39CDCC'>
                    ACTIVATE USER
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </header>

      {!user && (
        <div>
          <p>No User found with the given ID</p>
        </div>
      )}

      {user && (
        <>
          <div className={styles.userCard}>
            <div className={styles.userInfo}>
              <div className={styles.avatar}>
                <img src={Avatar} alt='' />
              </div>
              <div className={styles.mainInfo}>
                <p>{user.personalInformation.fullName}</p>
                <span>{user.bankDetails.accountNumber}</span>
              </div>
              <div className={styles.userTier}>
                <span>User's Tier</span>
                <div className={styles.stars}>
                  {renderStarRating(user.tier)}
                </div>
              </div>
              <div className={styles.accountInfo}>
                <p>{user.bankDetails.accountBalance}</p>
                <span>
                  {user.bankDetails.accountNumber}/{user.bankDetails.bankName}
                </span>
              </div>
            </div>

            <div className={styles.tabs}>
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`${styles.tab} ${
                    activeTab === tab ? styles.active : ''
                  }`}
                  onClick={() => setActiveTab(tab)}>
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.detailsContent}>
            <section className={styles.section}>
              <p>Personal Information</p>
              <div className={styles.grid}>
                <div className={styles.field}>
                  <span className={styles.label}>FULL NAME</span>
                  <span className={styles.value}>
                    {user.personalInformation.fullName}
                  </span>
                </div>
                <div className={styles.field}>
                  <span className={styles.label}>PHONE NUMBER</span>
                  <span className={styles.value}>
                    {user.personalInformation.phoneNumber}
                  </span>
                </div>
                <div className={styles.field}>
                  <span className={styles.label}>EMAIL ADDRESS</span>
                  <span className={styles.value}>{user.email}</span>
                </div>
                <div className={styles.field}>
                  <span className={styles.label}>BVN</span>
                  <span className={styles.value}>
                    {user.personalInformation.bvn}
                  </span>
                </div>
                <div className={styles.field}>
                  <span className={styles.label}>GENDER</span>
                  <span className={styles.value}>
                    {user.personalInformation.gender}
                  </span>
                </div>
                <div className={styles.field}>
                  <span className={styles.label}>MARITAL STATUS</span>
                  <span className={styles.value}>
                    {user.personalInformation.maritalStatus}
                  </span>
                </div>
                <div className={styles.field}>
                  <span className={styles.label}>CHILDREN</span>
                  <span className={styles.value}>
                    {user.personalInformation.children > 0
                      ? user.personalInformation.children
                      : 'None'}
                  </span>
                </div>
                <div className={styles.field}>
                  <span className={styles.label}>TYPE OF RESIDENCE</span>
                  <span className={styles.value}>
                    {user.personalInformation.typeOfResidence}
                  </span>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <p>Education and Employment</p>
              <div className={styles.grid}>
                <div className={styles.field}>
                  <span className={styles.label}>LEVEL OF EDUCATION</span>
                  <span className={styles.value}>
                    {user.educationEmployment.levelOfEducation}
                  </span>
                </div>
                <div className={styles.field}>
                  <span className={styles.label}>EMPLOYMENT STATUS</span>
                  <span className={styles.value}>
                    {user.educationEmployment.employmentStatus}
                  </span>
                </div>
                <div className={styles.field}>
                  <span className={styles.label}>SECTOR OF EMPLOYMENT</span>
                  <span className={styles.value}>
                    {user.educationEmployment.sectorOfEmployment}
                  </span>
                </div>
                <div className={styles.field}>
                  <span className={styles.label}>DURATION OF EMPLOYMENT</span>
                  <span className={styles.value}>
                    {user.educationEmployment.durationOfEmployment}
                  </span>
                </div>
                <div className={styles.field}>
                  <span className={styles.label}>OFFICE EMAIL</span>
                  <span className={styles.value}>
                    {user.educationEmployment.officeEmail}
                  </span>
                </div>
                <div className={styles.field}>
                  <span className={styles.label}>MONTHLY INCOME</span>
                  <span className={styles.value}>
                    {user.educationEmployment.monthlyIncomeRange}
                  </span>
                </div>
                <div className={styles.field}>
                  <span className={styles.label}>LOAN REPAYMENT</span>
                  <span className={styles.value}>
                    {user.educationEmployment.loanRepayment}
                  </span>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <p>Socials</p>
              <div className={styles.grid}>
                <div className={styles.field}>
                  <span className={styles.label}>TWITTER</span>
                  <span className={styles.value}>{user.socials.twitter}</span>
                </div>
                <div className={styles.field}>
                  <span className={styles.label}>FACEBOOK</span>
                  <span className={styles.value}>{user.socials.facebook}</span>
                </div>
                <div className={styles.field}>
                  <span className={styles.label}>INSTAGRAM</span>
                  <span className={styles.value}>{user.socials.linkedin}</span>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <p>Guarantor</p>

              <div className={styles.grid}>
                <div className={styles.field}>
                  <span className={styles.label}>FULL NAME</span>
                  <span className={styles.value}>
                    {user.guarantor.fullName}
                  </span>
                </div>
                <div className={styles.field}>
                  <span className={styles.label}>PHONE NUMBER</span>
                  <span className={styles.value}>
                    {user.guarantor.phoneNumber}
                  </span>
                </div>
                <div className={styles.field}>
                  <span className={styles.label}>EMAIL ADDRESS</span>
                  <span className={styles.value}>{user.guarantor.email}</span>
                </div>
                <div className={styles.field}>
                  <span className={styles.label}>RELATIONSHIP</span>
                  <span className={styles.value}>
                    {user.guarantor.relationship}
                  </span>
                </div>
              </div>
            </section>
          </div>
        </>
      )}
    </main>
  )
}

export default UserDetailsPage
