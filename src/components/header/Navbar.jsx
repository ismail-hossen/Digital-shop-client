import { Link, useLocation, useNavigate } from "react-router-dom";
import Banner from "./Banner";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../authContext/AuthContext";

const Navbar = () => {
  const { user, logout, watchAddToCart } = useContext(AuthContext);
  const [myCart, setMyCart] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/add-to-cart/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyCart(data));
  }, [user, watchAddToCart]);

  const handleLogout = () => {
    logout().then(() => {
      navigate("/");
    });
  };

  return (
    <>
      <div className="navbar">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            DigitalShop
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            {user ? (
              <li>
                <Link to="/add-product">Add Product</Link>
              </li>
            ) : (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
          {user && (
            <>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="badge badge-sm indicator-item">
                      {myCart.length}
                    </span>
                  </div>
                </label>
                <div
                  tabIndex={0}
                  className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
                >
                  <div className="card-body">
                    <span className="font-bold text-lg">
                      {myCart.length} Items
                    </span>
                    <span className="text-info">Subtotal: $999</span>
                    <div className="card-actions">
                      <Link to="/my-cart" className="btn btn-primary btn-block">
                        View cart
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      src={
                        user.photoURL
                          ? user.photoURL
                          : "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&q=80&w=1931&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      }
                    />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <Link onClick={handleLogout}>Logout</Link>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
      {location?.pathname == "/" && <Banner />}
    </>
  );
};

export default Navbar;
