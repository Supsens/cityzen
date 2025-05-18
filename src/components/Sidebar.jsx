// src/components/Sidebar.jsx
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { AiOutlineHome, AiOutlineFileAdd, AiOutlineUnorderedList, AiOutlineDashboard, AiOutlineLogout } from "react-icons/ai";

export default function Sidebar() {
  const { user, logout } = useContext(AuthContext);
  if (!user) return null;

  const links = user.role === "admin"
    ? [
        { to: "/admin", label: "Dashboard", icon: <AiOutlineDashboard /> },
      ]
    : [
        { to: "/", label: "Home", icon: <AiOutlineHome /> },
        { to: "/report", label: "Report", icon: <AiOutlineFileAdd /> },
        { to: "/complaints", label: "My Complaints", icon: <AiOutlineUnorderedList /> },
      ];

  return (
    <aside className="w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-4 text-lg font-bold">Hello, {user.role}</div>
      <nav className="flex-1">
        {links.map(l => (
          <NavLink
            key={l.to}
            to={l.to}
            className={({ isActive }) =>
              `flex items-center p-3 hover:bg-gray-700 ${isActive && "bg-gray-700"}`
            }
          >
            <span className="mr-2">{l.icon}</span>
            {l.label}
          </NavLink>
        ))}
      </nav>
      <button
        onClick={logout}
        className="p-3 flex items-center hover:bg-gray-700"
      >
        <AiOutlineLogout className="mr-2" /> Logout
      </button>
    </aside>
  );
}
