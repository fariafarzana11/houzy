
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './Main/Main'
import Home from './components/Home/Home'
import ErrorPage from './components/ErrorPage/ErrorPage'
import Blog from './components/Blog/Blog'
import HouseDetails from './components/House/HouseDetails'
import About from './components/About/About'
import Register from './components/Login/Register'
import Login from './components/Login/Login'
import PrivateRoute from './Routes/PrivateRoute'
import Profile from './components/Login/Profile'


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/about',
          element:<PrivateRoute><About></About></PrivateRoute> 
        },
        {
          path:'/blogs',
          element:<PrivateRoute><Blog></Blog></PrivateRoute>
        }, 
        {
          path: "/allhouses/:id",
          loader: async ({ params }) => {
            const response = await fetch(`https://api2-kohl.vercel.app/allhouses`);
            const data = await response.json();
            const house = data.find(house => house._id === params.id);
            return house;
          },
          element: <PrivateRoute><HouseDetails></HouseDetails></PrivateRoute>,
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/profile',
          element:<PrivateRoute><Profile></Profile></PrivateRoute>
        },
        {
          path:'/register',
          element:<Register></Register>
        }  
      ]
    }
  ])


  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
