import React from "react";
import { Link ,useLocation} from "react-router-dom";

const HomeNav = () => {
  const location = useLocation();
  console.log(location.pathname);
  const isActive = (path) => {
   return location.pathname === path
   ?'text-blue-500 font-bold' // Active style
    : 'text-gray-700 font-medium'; // Inactive style
     }
  return (
    <nav className="px-6 py-4 bg-cyan-50 shadow-md rounded-lg lg:mx-32 my-3">
      <div className="text-shadow-md text-xl flex justify-center space-x-12">
        <Link to="/" className={`text-gray-700 hover:text-gray-400 transition ${isActive('/')}`}>Dashboard</Link>
        <Link to="/exercise" className={`text-gray-700 hover:text-gray-400 transition ${isActive('/exercise')}`}>Exercise</Link>
        <Link to="/music" className={`text-gray-700 hover:text-gray-400 transition ${isActive('/music')}`}>MindTunes</Link>
        <Link to="/resources" className={`text-gray-700 hover:text-gray-400 transition ${isActive('/resources')}`}>Resources</Link>
        <Link to="/support" className={`text-gray-700 hover:text-gray-400 transition ${isActive('/support')}`}>Support</Link>
      </div>
    </nav>
  );
};

export default HomeNav;
