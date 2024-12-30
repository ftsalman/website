import { useEffect, useRef, useState } from 'react';
import logo from '../../assets/Img/sharaco_white_Logo.png';

const Navbar = () => {
  
  const [menuOpen, setMenuOpen] = useState(false);


    const modalRef = useRef(null);

      useEffect(()=>{
         
            const OutSideClick = (e) =>{

                 if(modalRef.current && !modalRef.current.contains(e.target)){
                  setMenuOpen(false);
                 }

            }
          
            document.addEventListener("mousedown",OutSideClick);

            return () =>{
              document.removeEventListener("mousedown",OutSideClick);
            }


      },[])
   
  return (
    <nav className="w-full px-3 md:px-7 bg-white shadow-md">
      {/* Navbar Container */}
      <div className="flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <img className="w-40" src={logo} alt="Sharaco Logo" />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-6 items-center">
          <ul className="flex gap-6 items-center">
            <li>
              <a href="#" className="text-gray-700 hover:text-purple-600">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-purple-600">
                Benefits
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-purple-600">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-purple-600">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-purple-600">
                FAQ
              </a>
            </li>
          </ul>

          {/* Button */}
          <button className="bg-[#543189] font-semibold text-white px-4 py-2 rounded-lg hover:bg-purple-700">
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div ref={modalRef} className="md:hidden flex p-4 items-center justify-center shadow-lg mt-4 bg-[#7C3AED] text-white font-medium rounded-lg  ">
          <ul className="flex flex-col gap-4 px-4 py-2">
            <li>
              <a href="#" >
                Products
              </a>
            </li>
            <li>
              <a href="#" >
                Benefits
              </a>
            </li>
            <li>
              <a href="#" >
                Services
              </a>
            </li>
            <li>
              <a href="#">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#">
                FAQ
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
