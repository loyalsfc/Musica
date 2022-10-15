import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {ContextProvider} from './Context'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ContextProvider>
)
