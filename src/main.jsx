import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 
import Root from './Components/Root';
import ErrorPage from './Components/ErrorPage';
import Bookmarks from './Components/Bookmarks';
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
        element: <Home></Home>
      },
      {
        path: 'books/:bookId',
        element: <BookDetail></BookDetail>,
        loader: () => fetch('/booksData.json')

      },
      {
        path: "/bookmarks",
        element: <Bookmarks></Bookmarks>,
        loader: () => fetch('/booksData.json'),
      },
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
