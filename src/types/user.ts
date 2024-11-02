export interface User {
  id: string
  organization: string
  username: string
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  dateJoined: string
  status: 'Active' | 'Inactive' | 'Pending' | 'Blacklisted'
}

export interface UserDetails extends User {
  personalInformation: {
    fullName: string
    phoneNumber: string
    emailAddress: string
    bvn: number
    gender: 'Male' | 'Female' | 'Others'
    maritalStatus: 'Single' | 'Married' | 'Divorced' | 'Widowed'
    children: number
    typeOfResidence: 'Apartment' | 'House' | 'Condo' | 'Shared' | 'Dormitory'
  }
  educationEmployment: {
    levelOfEducation:
      | 'High School'
      | 'Associate'
      | 'Bachelor'
      | 'Master'
      | 'PhD'
    employmentStatus: 'Employed' | 'Unemployed' | 'Self-employed' | 'Student'
    sectorOfEmployment:
      | 'Technology'
      | 'Finance'
      | 'Healthcare'
      | 'Education'
      | 'Retail'
    durationOfEmployment: string
    officeEmail: string
    monthlyIncomeRange: string
    loanRepayment: string
  }
  tier: number
  bankDetails: {
    bankName: string
    accountBalance: string // You can use 'number' if you want to represent it as a numerical value
    accountNumber: string // Use 'string' to accommodate leading zeros or specific formatting
  }
  socials: {
    facebook: string
    twitter: string
    linkedin: string
  }
  guarantor: {
    fullName: string
    relationship: 'Friend' | 'Family' | 'Colleague' | 'Other'
    phoneNumber: string
    email: string
  }
}
