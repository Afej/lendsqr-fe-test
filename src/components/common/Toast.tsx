import { Toaster } from 'react-hot-toast'

export const Toast = () => {
  return (
    <Toaster
      position='top-right'
      toastOptions={{
        duration: 3000,
        style: {
          background: '#333',
          color: '#fff',
          padding: '16px',
          borderRadius: '8px',
        },
        success: {
          iconTheme: {
            primary: '#3ACDCC',
            secondary: '#fff',
          },
        },
        error: {
          iconTheme: {
            primary: '#FF0000',
            secondary: '#fff',
          },
        },
      }}
    />
  )
}
