import { useState } from "react";
import AKH_Logo from "../assets/AKHRealtyLogo.png";
import hamMenu from "../assets/hamMenu.svg";
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
    return (
      <div>
      <nav className="bg-transparent absolute w-full z-10 px-4 py-6 mt-2">

        {/*Mobile Menu Button -only visible on mobiles*/}
        <div className="flex md:hidden justify-between">
          <button onClick={toggleMenu}>
            <img src={hamMenu} alt="hamburger menu" className="h-8"/>
          </button>
          <div className="md:order-2 md:px-16">
            <img src={AKH_Logo} alt="AKH Realty Logo" className="h-8 md:h-12"/>
          </div>
        </div>

        {/* Logo */}

        {/*Desktop Menu - hidden on mobile */}
        <div className="hidden md:flex md:order-1 md:justify-end md:space-x-8 text-white font-medium">
          <div className="space-x-8 mt-2">
            <a href="#" >HOME</a>
            <a href="#" >EXPLORE</a>
            <a href="#" >ABOUT</a>
            <a href="#" >CONTACT</a>
          </div>
          <div className="md:order-2 md:px-16">
            <img src={AKH_Logo} alt="AKH Realty Logo" className="h-16 md:h-12"/>
          </div>
        </div>

        {/*Mobile Menu - slide down when open */}
        {isMenuOpen && (
          <div className="md:hidden border-white border-2 w-fit h-fit bg-transparent mt-4 p-4 rounded">
            <div className="flex flex-col space-y-4 text-white font-medium">
              <a href="#" >HOME</a>
              <a href="#" >EXPLORE</a>
              <a href="#" >ABOUT</a>
              <a href="#" >CONTACT</a>
            </div>
          </div>
        )}

      </nav>
      </div>
    )
}

export default NavBar;