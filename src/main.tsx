import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter } from 'react-router'
import AppRoutes from './routes/routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify'


const queryClient = new QueryClient();


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AppRoutes />
        <ToastContainer position='top-center' autoClose={300} />
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
