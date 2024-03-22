import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

export default function RootLayout() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
