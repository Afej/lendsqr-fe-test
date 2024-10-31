export interface User {
  organization: string
  username: string
  email: string
  phoneNumber: string
  dateJoined: string
  status: 'active' | 'inactive' | 'pending' | 'blacklisted'
}

export interface UserDetails extends User {
  id: string
  tier: string
  balance: number
  personalInfo: {
    fullName: string
    gender: string
    maritalStatus: string
    children: string
    typeOfResidence: string
  }
  education: {
    level: string
    employmentStatus: string
    sector: string
    duration: string
    officeEmail: string
    monthlyIncome: string
    loanRepayment: string
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
  }[]
}
