import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// TanStack Query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();

import LoginContextProvider from './context/LoginContext.jsx'
// import './index.css'

ReactDOM.createRoot( document.getElementById( 'root' ) ).render(
  <React.StrictMode>
    <QueryClientProvider client={ queryClient }>
      <LoginContextProvider>
        <App />
      </LoginContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
