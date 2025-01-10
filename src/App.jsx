
import { Suspense, lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// ERROR
import ErrorBoundary from './components/ErrorBoundery';

// PUBLIC
import Layout from './layout/Layout'
const Home = lazy( () => import( './pages/Home' ) )
const Posts = lazy( () => import( './pages/Posts' ) )
import Login from './pages/Login'

// ADMIN
import LayoutAdmin from './layout/admin/LayoutAdmin'
const HomeAdmin = lazy( () => import( './pages/admin/HomeAdmin' ) )
const TodosAdmin = lazy( () => import( './pages/admin/TodosAdmin' ) )
import Loader from './components/Loader'
// ALL
import PageNotFound from './pages/PageNotFound'




// CSS
import './App.css'


function App () {

  // errorboundary opsnapper fejl i states mv. i components - mens pagenotfound fanger fejl i routes

  const router = createBrowserRouter(
    [
      {
        element: <ErrorBoundary><Layout /></ErrorBoundary>,
        errorElement: <PageNotFound />,
        children: [
          { path: "/", element: <Suspense fallback={ <Loader /> }><Home /></Suspense> },
          { path: "/posts", element: <Suspense fallback={ <Loader /> }><Posts /></Suspense> },
          { path: "login", element: <Login /> },
        ],
      },
      {
        element: <ErrorBoundary><LayoutAdmin /></ErrorBoundary>,
        errorElement: <PageNotFound />,
        children: [
          { path: "/admin", element: <Suspense fallback={ <Loader /> }><HomeAdmin /></Suspense> },
          { path: "admin/todosadmin", element: <Suspense fallback={ <Loader /> }><TodosAdmin /></Suspense> },
        ],
      },
    ]
  )


  return (
    <ErrorBoundary>
      <div>
        <RouterProvider router={ router } />
      </div>
    </ErrorBoundary>
  )
}

export default App
