import './assets/fontawesome-free-6.4.0-web/fontawesome-free-6.4.0-web/css/all.min.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './App.css'
import SplashScreen from './components/WelcomeScreen/SplashScreen/SplashScreen'
import Login from './components/WelcomeScreen/Login/Login'
import Signup from './components/WelcomeScreen/Signup/Signup'
import Forgotpassword from './components/WelcomeScreen/Forgotpassword/Forgotpassword'


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
    {
      path: "/forgotpassword",
      element: <Forgotpassword/>,
    },
    

  ])


  return (
    <RouterProvider router={router} /> 
  )
}

export default App
