import React from 'react';
import NavBar from "../components/NavBar";
import FooterBox from "../components/FooterBox";
import customLogo from "../assets/AKHRealtyLogoRed.png";
import customFooterLogo from "../assets/AKHRealtyLogo.png";
import customMenu from "../assets/hamMenuRed.svg";

const TermsOfUse = () => {
  return (
    <div>
        {/* Navigation */}
        <NavBar logo={customLogo} menu={customMenu} shadow="shadow-xs" />

        <div className="bg-white min-h-screen p-8 md:p-12 lg:p-24 text-[#822e27]">
          <div className="mx-auto mt-20 md:mt-12">
            <h1 className="text-4xl font-bold text-[#822e27] mb-6">Terms Of Use</h1>

            <div className=" space-y-6">
              <p className="text-sm">
                These Terms of use govern your use of the services provided by we AKHCON Realty and your access to our website and any other online platforms operated by 
                us. By using our services, you agree to be bound by these Terms and Conditions. If you do not agree to these Terms and Conditions, please do not use our 
                services.
              </p>

              <p className="text-sm">
                This Terms of use was last Updated on 20th February, 2023.
              </p>

              <div className="space-y-2">
                <h2 className="text-xl font-semibold">Use of Services</h2>
                <p className="text-sm">
                  You must be at least 18 years old to make use of our services. By using our services, you represent and warrant that you are of a legal age to form a binding 
                  contract with us.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-xl font-semibold ">Property Listings</h2>
                <p className="text-sm">
                  We provide property listings for general information purposes only. You have the option of touring in person before making any payment. We do not guarantee 
                  the accuracy, completeness or reliability of any information provided in the listings. You acknowledge that the prices and availability of properties are subject to 
                  change without notice.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-xl font-semibold">Communication and Feedback</h2>
                <p className="text-sm">
                  By using our services, you consent to receive information from us including promotional emails, newsletters and updates. You may opt-out of receiving 
                  marketing at any time following the instructions provided in the communication. We welcome any feedback or suggestions you have as regards our services. 
                  However, any feedback or suggestions you provide will be considered non-confidential and non-proprietary. We may use your feedback and suggestion for any 
                  purpose without any compensation to you.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-xl font-semibold">Intellectual Property</h2>
                <p className="text-sm">
                  All content included in our services such as text, graphics, logos, images and software, is the property of AKHCON Realty and its licensors and is protected by 
                  copyright and other intellectual property laws. You may not reproduce, distribute, modify or create derivative works of any content without our prior written 
                  consent.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-xl font-semibold">Privacy</h2>
                <p className="text-sm">
                  Your privacy is of utmost importance to us. Please refer to our Privacy Policy for information about how we collect and make use of your personal information.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-xl font-semibold">Limitation and Liability</h2>
                <p className="text-sm">
                  To the fullest extent permitted by Law, we shall not be liable for any incidental, special, indirect, consequential or punitive damages, or any loss of profits or 
                  revenues, whether incurred directly or indirectly, arising out of the use of our services.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-xl font-semibold">Indemnification</h2>
                <p className="text-sm">
                  You agree to indemnify and hold harmless AKHCON Realty and its officers, directors, employees and agents from any claims, damages, losses, liabilities or 
                  expenses, including legal fees, arising out of or in connection with your use of our services or your violations of these Terms.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-xl font-semibold">Governing Law</h2>
                <p className="text-sm">
                  These Terms shall be governed in accordance with the Laws of the Federal Republic of Nigeria, without regard to its conflict of law principles. Any dispute in 
                  connection with these Terms shall be subject to the exclusive jurisdiction of the courts of Nigeria.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-xl font-semibold">Changes to Terms</h2>
                <p className="text-sm">
                  We reserve the right to update or modify these Terms at any time without prior notice. Any changes to these Terms will be effective immediately upon posting 
                  the revised Terms on our website. Your continued use of our services after the posting of the revised Terms and Conditions constitutes your acceptance of the 
                  changes.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-xl font-semibold">Contact Us</h2>
                <p className="text-sm">
                  If you have any questions or concerns about these Terms and Conditions, please contact us through any of the channels below:
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
  );
};

export default TermsOfUse;