import React from 'react';
import NavBar from "../components/NavBar";
import FooterBox from "../components/FooterBox";
import customLogo from "../assets/AKHRealtyLogoRed.png";
import customFooterLogo from "../assets/AKHRealtyLogo.png";
import customMenu from "../assets/hamMenuRed.svg";

const PrivacyPolicy = () => {
  return (
    <div>
        {/* Navigation */}
        <NavBar logo={customLogo} menu={customMenu} shadow="shadow-md" />

        <div className="bg-white min-h-screen p-8 md:p-12 lg:p-24 text-[#822e27]">
          <div className="mx-auto mt-20 md:mt-12">
            <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>

            <div className="space-y-6">
              <p className="text-sm">
                This privacy policy describes how we AKHCON Realty collect, use and disclose your personal information when you use our services.
                By using our services, you consent to the collection, use and disclosure of your personal information as described in accordance with this Privacy Policy.
              </p>

              <p className="text-sm">
                This Privacy Policy was last Updated on 20th February, 2023.
              </p>

              <div className="space-y-2">
                <h2 className="text-xl font-semibold">Information We Collect</h2>
                <p className="text-sm">
                  Interaction with our services such as when you visit our website, contact us through email, phone or other means may yield collection of personal information 
                  like: Name, Contact Information (e.g. email address, phone number), Address, Payment information, Preferences and interests alongside other information you 
                  choose to share with us.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-xl font-semibold">How we Use your Information</h2>
                <p className="text-sm">
                  The information you provide may be used for the following purposes:
                </p>
                <ul className="list-disc list-inside text-sm ml-4 space-y-1">
                  <li>To provide and maintain Top Notch services to you.</li>
                  <li>To communicate with you and respond to your inquiries</li>
                  <li>To process transactions and payments</li>
                  <li>To fulfill Contractual obligations</li>
                  <li>To personalized your experience and contents being tailored to you</li>
                  <li>To conduct market research and analysis</li>
                  <li>To send you marketing communications and promotional offers at any point in time</li>
                  <li>To comply with legal and regulatory requirements</li>
                </ul>
                <p className="text-sm">
                  We will use this information only in respond to your requests and to provide our services.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-xl font-semibold">How we Disclose your Information</h2>
                <p className="text-sm">
                  The information you provide may be disclosed to third parties for the following purposes:
                </p>
                <ul className="list-disc list-inside text-sm ml-4 space-y-1">
                  <li>Service Providers: Information may be shared with third-party service providers who assist us in operating our business and providing our services</li>
                  <li>Business Partners: Information may be shared with our business partners for joint marketing and other joint legitimate business purpose.</li>
                  <li>Legal Purposes: We may disclose your information to comply with legal obligations, legal processes, or to protect our rights.</li>
                  <li>Business Transfers: If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction</li>
                  <li>Otherwise with consent and direction: We may disclose your information other certain third parties based on your consent and direction</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h2 className="text-xl font-semibold">Your Choices</h2>
                <p className="text-sm">
                  You have the choice to update or correct your information by contacting us directly. You can opt-out of receiving marketing communications from us. You can 
                  disable cookies in your browser settings, although this may affect your ability to use certain features of our website.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-xl font-semibold">Data Security</h2>
                <p className="text-sm">
                  We engage in reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. We value your trust in 
                  providing us Your personal information. However, no method of transmission over the internet or electronic storage is 100% secure, so we cannot guarantee 
                  absolute security.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-xl font-semibold">Children's Privacy</h2>
                <p className="text-sm">
                  Our services are not directed to individuals under the age of 18, and we do knowingly collect personal information from children. In the case we discover that a 
                  child under the age of 18 has provided us with personal information, we immediately delete from our servers. If you believe that we have collected personal 
                  information from a child without parental consent, please contact us to enable us take appropriate actions.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-xl font-semibold">Changes to this Privacy Policy</h2>
                <p className="text-sm">
                  We may update this Privacy Policy from time to time, and any changes will be effective immediately upon posting the revised policy on our website. We 
                  encourage you to review this Privacy Policy from time to time for any updates or changes.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-xl font-semibold">Contact Us</h2>
                <p className="text-sm">
                  If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us through any of the channels below:
                </p>
                <ul className="list-disc list-inside text-sm ml-4">
                  <li>WhatsApp/Phone Number: +2348037037734</li>
                  <li>Email: akhgroupofcompanies@gmail.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <FooterBox mainBgColor='bg-[#822e27]' mainTextColor='text-white' footerBgColor='bg-white' footerTextColor='text-[#822e27]' logo={customFooterLogo}/>
    </div>
  )
}

export default PrivacyPolicy