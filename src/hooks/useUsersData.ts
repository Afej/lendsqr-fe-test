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
    'https://api.jsonsilo.com/public/03ab422c-be7b-44f2-baed-0bfd847b26ae'
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
