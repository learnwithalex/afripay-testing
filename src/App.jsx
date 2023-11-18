// import { BrowserRouter as Router , Route } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './App.css'
import SplashScreen from './components/SplashScreen/SplashScreen'


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SplashScreen />,
    },

  ])


  return (
    <RouterProvider router={router} /> 
  )
}

export default App
