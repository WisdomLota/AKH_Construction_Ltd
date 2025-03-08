import realtyImageGroup from "../assets/realtyImageGroup.png";
import directArrow from "../assets/directArrow.svg";

const Features = () => {
    return (
        <div>
            <section className="background text-white h-fit mb-32">
                <div className="mx-auto">
                  <div className="flex flex-col lg:flex-row">
                    <div className="space-y-6 w-full md:w-1/2 flex flex-col justify-center items-center p-4">
                      <h1 className="text-4xl font-semibold -ml-20">REALTY</h1>
                      <ul className="space-y-4">
                        <li>&nbsp;• Spacious</li>
                        <li>&nbsp;• Pre wired AC</li>
                        <li>&nbsp;• Maid Quarters</li>
                        <li>&nbsp;• Home Security</li>
                        <li>&nbsp;• Home Automation</li>
                        <li>&nbsp;• Dedicated Laundry Space</li>
                      </ul>
                      <div className="inline-flex items-center pb-2 group cursor-pointer">
                        <span className="mr-4 font-semibold border-b-2 border-white w-36">EXPLORE REALTY</span>
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                          <img src={directArrow} alt="arrow-direction" className="w-4 h-4"/>
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2">
                      <img src={realtyImageGroup} alt="group of images" className="h-full"/>
                    </div>
                  </div>
                </div>
            </section>
        </div>
    )
}

export default Features;