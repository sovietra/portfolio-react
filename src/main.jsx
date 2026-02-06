import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import DocumentsPage from './pages/Documentspage.jsx'
import DocumentDetailPage from './pages/Documentdetailpage.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/documents",
    element: <DocumentsPage />
  },
  {
    path: "/documents/:documentId",
    element: <DocumentDetailPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)