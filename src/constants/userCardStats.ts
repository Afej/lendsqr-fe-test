import { formattedNumber } from '@/utils'

import ActiveUsers from '@/assets/images/active-users-icon.png'
import UsersLoan from '@/assets/images/users-loans-icon.png'
import UsersSaving from '@/assets/images/users-savings-icon.png'
import Users from '@/assets/images/users-icon.png'

export const usersCardStats = [
  {
    title: 'Users',
    key: 'users',
    icon: Users,
    value: formattedNumber(2453),
  },
  {
    title: 'Active Users',
    key: 'active',
    icon: ActiveUsers,
    value: formattedNumber(2453),
  },
  {
    title: 'Users With Loans',
    key: 'loans',
    icon: UsersLoan,
    value: formattedNumber(12453),
  },
  {
    title: 'Users With Savings',
    key: 'savings',
    icon: UsersSaving,
    value: formattedNumber(102453),
  },
]
