const About = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            {/* About Section */}
            <section className="py-20 lg:px-20 px-4 text">
              <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row justify-around h-fit">
                  <div className="w-full lg:w-1/2 flex lg:items-center lg:justify-start mb-4">
                    <h1 className="text-6xl lg:text-8xl font-semibold">ABOUT</h1>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <div className="max-w-4xl space-y-12 font-medium">
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
        </div>
    )
}

export default About;