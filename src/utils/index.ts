export const formattedNumber = (number: string | number) => {
  // Convert the input to a number if it's a string
  const numericValue = typeof number === 'string' ? parseFloat(number) : number

  // Check if the conversion is successful and then format the number
  if (!isNaN(numericValue)) {
    return numericValue.toLocaleString()
  } else {
    // Handle cases where the input cannot be converted to a number
    return 'Invalid Number'
  }
}

export const shortDateFormat = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

// export const shortDateTimeFormat = (dateString: string) => {
//   return new Date(dateString).toLocaleString('en-US', {
//     year: 'numeric',
//     month: 'short',
//     day: '2-digit',
//     hour: 'numeric',
//     minute: '2-digit',
//     hour12: true,
//   })
// }

export const shortDateTimeFormat = (dateString: string) => {
  // Remove space before timezone offset if it exists
  const normalizedDate = dateString.replace(/\s(?=[-+]\d{2}:?\d{2}$)/, '')

  const date = new Date(normalizedDate)

  // Check if date is valid
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date string provided')
  }

  return date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  })
}
