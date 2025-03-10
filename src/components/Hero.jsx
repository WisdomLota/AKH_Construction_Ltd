import directArrow from "../assets/directArrow.svg";

const Hero = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="h-screen relative">
              <div className="absolute bottom-0 left-0 right-0 p-12 md:p-20 text-white">
                <div className="container">
                  <h1 className="text-4xl md:text-6xl font-semibold mb-4">Welcome to<br />AKHCON Realty</h1>
                  <p className="mb-8 max-w-md">An estate full of modernized homes with beautiful aesthetics.</p>
    
                  <div className="inline-flex items-center pb-2 group cursor-pointer">
                    <span className="mr-4 font-medium border-b-2 border-white w-36 pb-1">EXPLORE REALTY</span>
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                      <img src={directArrow} alt="arrow-direction" className="w-4 h-4"/>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        </div>
    )
}

export default Hero;