import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 
import Root from './Components/Root';
import ErrorPage from './Components/ErrorPage';
import DashBoard from './Components/DashBoard';
import Home from './Components/Home';
import BookDetail from './Components/BookDetail';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: 'books/:bookId',
        element: <BookDetail></BookDetail>,
        loader: () => fetch('/booksData.json')

      },
      {
        path: "/dashboard",
        element: <DashBoard />
      },
      {
        path: "/pages",
        element: <h2>Pages to Read Coming Soon...</h2> // or create a component
      }
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
