import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="navbar bg-foreground text-white shadow-sm border-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-md dropdown-content bg-base-100 text-gray-900 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/allBikes">All Bikes</Link>
            </li>
            <li>
              <Link href="/aboutus">About us</Link>
            </li>
            <li>
              <Link href="/contactus">Contact us</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Bike Store</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          {/* <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li> */}
          <li>
            <Link href="/allBikes">All Bikes</Link>
          </li>
          <li>
            <Link href="/aboutus">Aboutus</Link>
          </li>
          <li>
            <Link href="/contactus">Contactus</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end  gap-6 p-4">
        <Link href="/cart">
          <button className="btn btn-outline btn-info">
            <IoCartOutline />
            Cart
          </button>
        </Link>
        <Link href="/login">
          <button className="btn btn-primary ">Login</button>
        </Link>
      </div>
      <div>
        <Link href="/signup">
          <button className="btn btn-primary ">Signup</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
