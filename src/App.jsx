import './assets/fontawesome-free-6.4.0-web/fontawesome-free-6.4.0-web/css/all.min.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './App.css'
import SplashScreen from './components/SplashScreen/SplashScreen'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SplashScreen />,
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/signup",
      element: <Signup/>,
    },
    

  ])


  return (
    <RouterProvider router={router} /> 
  )
}

export default App
