import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./pages/Root.jsx";
import Behavior from "./pages/Behavior.jsx";
import Structural from "./pages/Structural.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import Merise from "./pages/Merise.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: '/', element: <Root /> },
            { path: '/comportementaux', element: <Behavior /> },
            { path: '/structurels', element: <Structural /> },
            { path: '/merise', element: <Merise/>}
        ]
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
)
