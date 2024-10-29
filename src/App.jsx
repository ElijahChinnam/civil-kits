import React from 'react';
import Home from './Pages/Home';
import Signup from './Components/Signup';
import Register from './Components/Register';
import RootLayout from './Components/RootLayout';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import OrderNow from './Pages/OrderNow';
import Build from './Pages/Build';
import Documentation from './Pages/Documentation';
import AboutUs from './Pages/AboutUs';


export default function App() {

  const browserRouterObject = createBrowserRouter([
    {
      path:"",
      element:<RootLayout />,
      children:[
        {
          path:"",
          element:<Home />,
        },
        {
          path:"signup",
          element:<Signup />
        },
        {
          path:"register",
          element:<Register/>
        },
        {
          path:"home",
          element:<Home/>
        },
        {
          path:"ordernow",
          element:<OrderNow />,
        },
        {
          path:"build",
          element:<Build />,
        },
        {
          path:"documentation",
          element:<Documentation />,
        },
        {
          path:"aboutus",
          element:<AboutUs />,
        }
      ]
    }
  ]);

  return (
    <>
      {/* <Navbar></Navbar> */}
      {/* <Home></Home> */}
      {/* <Register></Register> */}

      <RouterProvider router={browserRouterObject}></RouterProvider>


    </>
  )

}
