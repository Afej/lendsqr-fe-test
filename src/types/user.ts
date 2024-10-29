export interface User {
  id: string
  fullName: string
  email: string
  phoneNumber: string
  organization: string
  status: 'active' | 'inactive' | 'blacklisted' | 'pending'
  dateJoined: string
  tier: number
  bvn: string
  gender: string
  maritalStatus: string
  children: string
  typeOfResidence: string
  education: {
    level: string
    employmentStatus: string
    sector: string
    duration: string
  }
  socials: {
    twitter: string
    facebook: string
    instagram: string
  }
  guarantor: {
    fullName: string
    phoneNumber: string
    email: string
    relationship: string
  }
}
