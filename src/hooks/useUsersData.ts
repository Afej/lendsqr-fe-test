import { useQuery } from '@tanstack/react-query'
import { UserDetails } from '@/types/user'

const STORAGE_KEY = 'dashboard_users'

const getUsers = async (): Promise<UserDetails[]> => {
  const storedUsers = localStorage.getItem(STORAGE_KEY)
  if (storedUsers) {
    return JSON.parse(storedUsers)
  }
  // Fetch from API and store in localStorage
  const response = await fetch(
    'https://api.jsonsilo.com/public/be765ece-d0ff-4df1-a498-ba9183037b93'
  )
  const users = await response.json()
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users))
  return users
}

export const useUsersData = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  })
}
