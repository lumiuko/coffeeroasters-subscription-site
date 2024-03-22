import { Route } from 'react-router-dom'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Navigate } from 'react-router-dom'

import RootLayout from './layouts/RootLayout'
import Homepage from './pages/Homepage'
import About from './pages/About'
import CreatePlan from './pages/CreatePlan'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route index element={<Homepage />} />
      <Route path="about" element={<About />} />
      <Route path="create" element={<CreatePlan />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
