import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Root from './components/Root/Root';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Blog from './components/Blog/Blog';
import ErrorPage from './components/ErrorPage/ErrorPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/applied',
        element:<AppliedJobs></AppliedJobs>
      },
      {
        path:'blog',
        element:<Blog></Blog>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
