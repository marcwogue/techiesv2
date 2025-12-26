import { Link } from "react-router"

const Navbar = () => {

    const navLinks = [
        { label: "Accueil", to: "/" },
        {label: "Nos initiatives", to: "/initiatives"},
        { label: "Communauté", to: "/community" },
        { label: "Chapitre", to: "/chapter" },
        { label: "Blog", to: "/blog" },
        { label: "À propos", to: "/about" },
      ]
      
  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
      {/* LEFT */}
      <div className="navbar-start">
        {/* Mobile menu */}
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost lg:hidden">
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-50"
          >
            {navLinks.map((link, i) =>
              (
                <li key={i}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Logo */}
        <Link to="/" className="btn btn-ghost text-xl">
        <img src="/Logo.png" alt="" className="w-44 h-44" />
        </Link>
      </div>

      {/* CENTER (desktop only) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks.map((link, i) =>
             (
              <li key={i}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            )
          )}
        </ul>
      </div>

      {/* RIGHT */}
      <div className="navbar-end">
        <Link to="/login" className="btn btn-primary">
          Connexion
        </Link>
      </div>
    </div>
  )
}

export default Navbar
