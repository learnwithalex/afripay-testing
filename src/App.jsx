import './assets/fontawesome-free-6.4.0-web/fontawesome-free-6.4.0-web/css/all.min.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './App.css'
import SplashScreen from './components/SplashScreen/SplashScreen'
import Login from './components/WelcomeScreen/Login/Login'
import Signup from './components/WelcomeScreen/Signup/Signup'
import Forgotpassword from './components/WelcomeScreen/Forgotpassword/Forgotpassword'
import Emailsent from './components/WelcomeScreen/Emailsent/Emailsent'
import Emaildelivered from './components/WelcomeScreen/Emaildelivered/Emaildelivered'
import Onboarding1 from './components/OnboardingScreen/Onboarding1'
import Onboarding2 from './components/OnboardingScreen/Onboarding2'
import Onboarding3 from './components/OnboardingScreen/Onboarding3'
import Welcome from './components/WelcomeScreen/Welcomepage/Welcome'


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
    {
      path: "/emailsent",
      element: <Emailsent/>,
    },
    {
      path: "/emaildelivered",
      element: <Emaildelivered/>,
    },
    {
      path: "/onboarding",
      element: <Onboarding1/>,
    },
    {
      path: "/onboarding2",
      element: <Onboarding2/>,
    },
    {
      path: "/onboarding3",
      element: <Onboarding3/>,
    },
    {
      path: "/welcome",
      element: <Welcome/>,
    },

    

  ])


  return (
    <RouterProvider router={router} /> 
  )
}

export default App
