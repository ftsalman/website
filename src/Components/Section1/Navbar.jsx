
const Navbar = () => {
  return (
    <nav className="w-full  px-6 py-4  ">
      {/* Navbar Container */}
      <div className="flex  items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
            <span className='w-10 h-10 bg-violet-800 rounded-full'></span>
           <span className="text-lg font-semibold text-gray-800 hidden sm:hidden lg:block md:block   ml-2">Sharaco <br /> Technologies</span>
        </div>

        {/* Navigation Links */}
        <div className=' flex p-2 px-3'>
        <ul className="hidden md:flex gap-6  items-center">
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
        <button className="bg-[#543189] hidden md:block  font-semibold text-white px-4 py-2 rounded-lg hover:bg-purple-700 md:ml-6">
          Contact Us
        </button>
        </div>
        {/* Mobile Menu Icon */}
        {/* <div className="md:hidden">
          <button>
            {/* Add your hamburger menu icon here */}
            {/* <svg
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
        </div> */} 
      </div>
    </nav>
  );
};

export default Navbar;