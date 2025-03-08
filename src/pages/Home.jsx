import NavBar from "../components/NavBar";
import explorePic from "../assets/explorePic.png";
import directArrow from "../assets/directArrow.svg";
import "../styles/general.css";
const Home = () => {
    return (
      <div className="min-h-screen flex flex-col">
      <div style={{backgroundImage: `url(${explorePic})`, backgroundSize: "cover", backgroundPosition: "center"}} className="h-fit border-bottom-left-rounded">
        {/* Navigation */}
        <NavBar/>

        {/* Hero Section */}
        <section className="h-screen relative">
          <div className="absolute bottom-0 left-0 right-0 p-12 md:p-20 text-white">
            <div className="container">
              <h1 className="text-4xl md:text-6xl font-semibold mb-4">Welcome to<br />AKHCON Realty</h1>
              <p className="mb-8 max-w-md">An estate full of modernized homes with beautiful aesthetics.</p>

              <div className="inline-flex items-center pb-2 group cursor-pointer">
                <span className="mr-4 font-medium border-b-2 border-white w-36">EXPLORE REALTY</span>
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <img src={directArrow} alt="arrow-direction" className="w-4 h-4"/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* About Section */}
      <section className="p-12 md:p-16 text">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-around h-fit">
            <div className="w-full md:w-1/2 flex md:items-center md:justify-center mb-4">
              <h1 className="text-4xl md:text-6xl font-semibold">ABOUT</h1>
            </div>
            <div className="w-full md:w-1/2">
              <div className="max-w-3xl space-y-8 font-medium">
                <p>
                  At AKHCON Realty, we pride ourselves on offering a seamless blend of 
                  modernized homes and stunning aesthetics. Our mission is to cater to aspiring 
                  homeowners, ensuring they find properties that match their taste while 
                  providing an environment that complements the beauty of their homes—
                  minus the hassle of excessive paperwork.
                </p>
                <p>
                  Our innovative approach has led us to develop an online platform where 
                  prospective homeowners can easily explore potential properties and 
                  complete necessary paperwork with just a click. Additionally, we offer the 
                  option for in-person house tours before any financial commitment is made. 
                  We are committed to providing a stress-free, efficient, and enjoyable home-
                  buying experience, ensuring that our clients can focus on the joy of finding 
                  their perfect home.
                </p>
              </div>
          </div>
        </div>
        </div>
      </section>
      {/* <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 mb-10 md:mb-0">
              <h2 className="text-5xl font-bold text-red-800">ABOUT</h2>
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-gray-700 mb-8">
                At AKHCON Realty, we pride ourselves on offering a seamless blend of 
                modernized homes and stunning aesthetics. Our mission is to cater to aspiring 
                homeowners, ensuring they find properties that match their taste while 
                providing an environment that complements the beauty of their homes—
                minus the hassle of excessive paperwork.
              </p>
              <p className="text-gray-700">
                Our innovative approach has led us to develop an online platform where 
                prospective homeowners can easily explore potential properties and 
                complete necessary paperwork with just a click. Additionally, we offer the 
                option for in-person house tours before any financial commitment is made. 
                We are committed to providing a stress-free, efficient, and enjoyable home-
                buying experience, ensuring that our clients can focus on the joy of finding 
                their perfect home.
              </p>
            </div>
          </div>
        </div> */}
      {/* </section> */}

      {/* Features Section */}
      <section className="bg-red-800 py-16 md:py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/4 mb-10 lg:mb-0">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">REALTY</h2>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Spacious</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Pre wired AC</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Maid quarters</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Home security</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Home Automation</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Dedicated laundry space</span>
                </li>
              </ul>
              
              <div className="inline-flex items-center border-b-2 border-white pb-2 mt-12 group cursor-pointer">
                <span className="mr-4 font-medium">EXPLORE REALTY</span>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-800 transform group-hover:translate-x-1 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:row-span-1">
                <img src="/api/placeholder/600/400" alt="Kitchen" className="w-full h-64 object-cover" />
              </div>
              <div className="md:row-span-2 md:h-full">
                <img src="/api/placeholder/600/800" alt="Bathroom" className="w-full h-64 md:h-full object-cover" />
              </div>
              <div className="md:row-span-1">
                <img src="/api/placeholder/600/400" alt="Bedroom" className="w-full h-64 object-cover" />
              </div>
              <div className="md:row-span-2 md:h-full flex md:hidden lg:flex">
                <img src="/api/placeholder/600/800" alt="Wardrobe" className="w-full h-64 md:h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    )
}

export default Home;