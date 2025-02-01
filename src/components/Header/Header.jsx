
import { Link, NavLink, useLocation } from "react-router-dom";
import { GiMushroomHouse } from "react-icons/gi";
import { useContext } from "react";
import { authContext } from "../../Providers/AuthProviders";
import { ToastContainer, toast } from "react-toastify";



const Header = () => {
  const location = useLocation()
  //console.log(location)

  const { user, logout } = useContext(authContext)


  const handleLogout = () => {
    logout()
      .then(() => {
        toast("Logout successfully")
      })
      .catch(err => console.log(err.message))
  };

  const list = (
    <>
      <li> <NavLink to="/" className="text-gray-900 font-bold text-lg"> Home </NavLink> </li>
      <li> <NavLink to="/about" className="text-gray-900 font-bold text-lg"> About </NavLink></li>
      <li><NavLink to="/blogs" className="text-gray-900 font-bold text-lg"> Blog </NavLink></li>
      <li> <NavLink to="/services" className="text-gray-900 font-bold text-lg"> Service </NavLink></li>
      <li> <NavLink to="/Contact" className="text-gray-900 font-bold text-lg" > Contact</NavLink></li>
      {user && (
        <li>
          <NavLink to="/profile" className="text-gray-900 font-bold text-lg bg-white px-3 py-1 rounded">
            Updated Profile
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className={`${(location.pathname === '/login' || location.pathname === '/register' ? 'my-0' : 'my-10')}`}>
      <div className="navbar bg-base-100 max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {list}
            </ul>
          </div>
          <Link to="/" className="text-xl flex items-center">
            <GiMushroomHouse className="text-accent-content" /> <span className="text-accent-content font-bold">Houzy</span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{list}</ul>
        </div>

        <div className="navbar-end">
          <div className='flex gap-2'>
            {
              user ? <div className='flex gap-3'>
                <img className='h-12 w-12 rounded-full' src={user.photoURL} alt="" />
                <button className="bg-gradient-to-r from-accent-content via-gray-900 to-gray-900 text-white rounded px-9 mt-1" onClick={handleLogout}>logout</button>
              </div> :
                <div>
                  {user ? (
                    <div className="flex items-center gap-4">
                      <img src={user.photoURL} alt="Profile" className="w-10 h-10 rounded-full border-2 border-gray-300" />
                    </div>
                  ) : (
                    <Link to='/login'><button className="bg-gradient-to-r from-accent-content via-gray-900 to-gray-900 p-2 w-30 rounded text-white">Login</button></Link>
                  )}
                </div>
            }
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Header;
