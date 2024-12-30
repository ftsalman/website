import logo from '../../assets/Img/sharaco_white_Logo.png';
const Navbar = () => {
  return (
    <nav className="w-full  px-6 py-4  ">
      {/* Navbar Container */}
      <div className="flex   justify-center items-center md:justify-between">
        {/* Logo Section */}
        <div className=" justify-center items-center">
            <img className='w-40' src={logo} alt="" />
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