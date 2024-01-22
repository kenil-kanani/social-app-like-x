import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements, defer } from 'react-router-dom'
import SocialApp from './components/SocialApp'
import UserDetails from './components/UserDetails/UserDetails'
import axios from 'axios'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={
        <>
          <Navbar />
          <Outlet />
        </>
      }
    >
      <Route
        path='/'
        element={<SocialApp />}
      />
      <Route
        path='user/:id'
        element={<UserDetails />}
        loader={async ({ params }) => {
          const response = axios.get(`https://dummyapi.io/data/v1/user/${params.id}`, {
            headers: {
              'app-id': import.meta.env.VITE_APP_ID
            }
          })
          return defer({
            userPromise: response
          })
        }}
      />
    </Route>
  ))

function App() {

  return (
    <>
      {/* <CustomRoutes /> */}
      <RouterProvider router={router} />
    </>
  )
}

export default App