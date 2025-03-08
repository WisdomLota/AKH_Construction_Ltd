import AKH_Logo from "../assets/AKHRealtyLogo.png";
const NavBar = () => {
    return (
      <div>
      <nav className="bg-transparent absolute w-full z-10 px-4 py-6">
        <div className="container flex space-x-4 justify-end">
          <div className="justify-center space-x-8 text-white font-medium mt-2">
            <a href="#" >HOME</a>
            <a href="#" >EXPLORE</a>
            <a href="#" >ABOUT</a>
            <a href="#" >CONTACT</a>
          </div>
          <div className="px-16">
            <img src={AKH_Logo} alt="AKHCON Realty Logo" className="h-12" />
          </div>
        </div>
      </nav>
      </div>
    )
}

export default NavBar;