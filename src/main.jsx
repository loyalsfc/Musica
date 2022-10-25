import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {ContextProvider} from './Context'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  useLocation
} from "react-router-dom";
import ErrorPage from './ErrorPage'
import Home from './pages/home/Home'
import Playlist from './pages/playlist/Playlist'
import Collection from './pages/collection/Collection'

// const location = useLocation()

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, 
        element: <Home />
      },
      {
        path: 'playlist/:playlistId',
        element: <Playlist />
      },
      {
        path: '/collection',
        element: <Collection />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ContextProvider>
)
