
import React from "react";
import icon from "../../assets/icon.png"


function Header() {
  return (
    <div className="bg-black flex justify-between items-center p-4">
  
      <div className="text-white flex items-center gap-2">
        <img
          className="max-h-12 w-auto object-contain"
          src={icon}
          alt="icon"
          width="158"
          height="48"
        />
        <span className="text-xl font-semibold">tailwindss</span>
      </div>

      
      <div >
        <ul className="flex gap-6 text-white text-lg flex-justify">
          <li className="cursor-pointer hover:text-gray-300">Docs</li>
          <li className="cursor-pointer hover:text-gray-300">Components</li>
          <li className="cursor-pointer hover:text-gray-300">Blog</li>
          <li className="cursor-pointer hover:text-gray-300">GitHub</li>
        </ul>
      </div>
      <div>
        <button className="px-4 py-2 bg-white text-black border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 transition">Login</button>
      </div>
    </div>
    

    
  );
}

export default Header;
