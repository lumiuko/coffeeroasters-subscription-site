import { Outlet } from 'react-router-dom'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'

export default function RootLayout() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <ToastContainer position="top-center" pauseOnFocusLoss={false} theme="colored" autoClose={2000} closeOnClick={true} />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
