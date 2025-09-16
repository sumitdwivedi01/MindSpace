import React from 'react'
import { Link } from "react-router-dom";
const EmergencyBtn = () => {
  return (
    <div className=" fixed bottom-5 right-5 m-5 bg-gradient-to-b from-red-400 to-red-600 text-white rounded-full shadow-lg p-4 hover:scale-105 transition-transform duration-300 text-sm font-semibold max-w-5xl max-w-2.5">
    <Link to="/support">
      <button>Quick Help</button>
    </Link>
    </div>
  )
}

export default EmergencyBtn
