import './assets/fontawesome-free-6.4.0-web/fontawesome-free-6.4.0-web/css/all.min.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './App.css'
import SplashScreen from './components/SplashScreen/SplashScreen'
import Login from './components/WelcomeScreen/Login/Login'
import Signup from './components/WelcomeScreen/Signup/Signup'
import Forgotpassword from './components/WelcomeScreen/Forgotpassword/Forgotpassword'
import Emailverification from './components/WelcomeScreen/Emailverification/Emailverification'
import Emaildelivered from './components/WelcomeScreen/Emaildelivered/Emaildelivered'
import Onboarding1 from './components/OnboardingScreen/Onboarding1'
import Onboarding2 from './components/OnboardingScreen/Onboarding2'
import Onboarding3 from './components/OnboardingScreen/Onboarding3'
import Welcome from './components/WelcomeScreen/Welcomepage/Welcome'
import Getstarted from './components/WelcomeScreen/Getstarted/Getstarted'
import Accountverified from './components/WelcomeScreen/Accountverified/Accountverified'
import Setpassword from './components/Setpassword/Setpassword'
import Screenload from './components/Screenload/Screenload'
import Profile from './components/Profile/Profile'
import Myaccount from './components/Myaccount/Myaccount'
import Settings from './components/Settings/Settings'
import Resetpassword from './components/Reset-Password/Resetpassword'
import Notification from './components/Notification/Notification'
import Help from './components/Helpcenter/Help'


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
      path: "/emailverification",
      element: <Emailverification/>,
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
    {
      path: "/getstarted",
      element: <Getstarted/>,
    },
    {
      path: "/accountverified",
      element: <Accountverified/>,
    },
    {
      path: "/setpassword",
      element: <Setpassword/>,
    },
    {
      path: "/screenload",
      element: <Screenload/>,
    },
    {
      path: "/profile",
      element: <Profile/>,
    },
    {
      path: "/myaccount",
      element: <Myaccount/>,
    },
    {
      path: "/settings",
      element: <Settings/>,
    },
    {
      path: "/reset-password",
      element: <Resetpassword/>,
    },
    {
      path: "/notification",
      element: <Notification/>,
    },
    {
      path: "/helpcenter",
      element: <Help/>,
    },
   
   
    
    

  ])


  return (
    <RouterProvider router={router} /> 
  )
}

export default App
