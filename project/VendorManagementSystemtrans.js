import React, { useState } from 'react';
import './VendorManagementSystem.css'; // Import the CSS file

const VendorManagementSystemtrans = () => {
  const [vendors, setVendors] = useState([
    { id: 1, name: 'Blue Dart Express Ltd', contact: 'MR.BALFOUR MANUEL ' , age:'Successfully reduced transportation costs by negotiating favorable contracts with third-party carriers.',sex:'40 years of experience in this field',con:'75060 30931'},
    { id: 2, name: 'Gati Ltd', contact: 'Mr. Mahendra Agarwal',age:'Won “ CIO of the Year Award 2017 for Category Transport & Logistics “ by BSE – CIO Klub Won “CIO Powerlist 2017 award for Category Transport & Logistics Icon” by CORE (Centre of Recognition and Excellence). Won “Intelligent Enterprise Award 2017, Category – Enterprise Mobility” presented by Express Computer 2016 10th ELSC Leadership Awards: 10th ELSC Leadership awards- Best Service Provider of the Year ‘16 10th ELSC Leadership awards- Best 3 PL company of the Year ‘16 10th ELSC Leadership awards for Gati Kausar Cold Chain Warehouse of the Year ‘16 Cold Chain Transporter of the Year ‘16 Gati Kausar wins CII Food and Safety Award of the Year ‘16',sex:'Gati, which was founded in 1989, is India’s pioneer in Express Distribution and Supply Chain Solutions, with a strong presence in Asia Pacific region and SAARC countries, along with an extensive network across India providing timely deliveries to 99% districts in India, covering 672 out of 676 districts in India.',con:'1860-123-4284' },
    { id: 3, name: 'Mahindra Logistics Ltd', contact: 'Mr. Rampraveen Swaminathan',age:'MLL has won the Best Warehousing Practices Award for its innovative techniques & practices at its MSB Bhivandi warehouse. This recognition was received at the IIMM (Indian Institute of Materials Management) Awards on 19th December 2015 at Mumbai.',sex:' Mahindra Logistics Limited was incorporated as a Public Limited Company on 24th August 2007. The Company was granted the Certificate for Commencement of Business on 15th October 2007 by the Registrar of Companies.',con:'enquiries@mahindralogistics.com' },
    { id: 4, name: 'Tata Motors Limited', contact: 'Natarajan Chandrasekaran',age:'Tata Motors Pune PVBU Kaizen CFT bagged two prestigious awards, 2nd Rank and 3rd Rank in the large scale category for the Productivity Improvement Kaizen Case Study , TOPS Convention by ICQ announced Team Jamshedpur as a winner and Team Dharwad as 2nd Runner up , CV parts entry “DigiVOR” received three awards in rapid succession – TML Innovista Award, Golden Peacock Award and World Innovation Congress Award. It also made it to the final round of the Tata Group Innovista competition , Our CV Teams won 2 silver and 3 bronze awards. The P&BPE LCA team secured the 1st position by winning the Platinum Award in the OEM category at CII’s Digitalisation, Robotics & Automation Industry 4.0 , History. Tata Motors was founded in 1945, as a locomotive manufacturer. Tata Group entered the commercial vehicle sector in 1954 after forming a joint venture with Daimler-Benz of Germany in which Tata developed a manufacturing facility in Jamshedpur for Daimler lorries.',sex:'History. Tata Motors was founded in 1945, as a locomotive manufacturer. Tata Group entered the commercial vehicle sector in 1954 after forming a joint venture with Daimler-Benz of Germany in which Tata developed a manufacturing facility in Jamshedpur for Daimler lorries.',con:'1800 258 2553' },
    { id: 5, name: 'Eicher Motors Limited', contact: 'Siddhartha Lal',age:'selected as Company of the Year for 1990–91 in the four–wheeler category comprising commercial vehicles, passenger cars, jeeps and tractors. 1993: Eicher adopts new identifier. Eicher acquires majority stake in Enfield India (60% equity shareholding) 1994: Eicher Motors Ltd.',sex:'Eicher :: Eicher Motors Limited :: Home. Incorporated in 1982, Eicher Motors Limited is the flagship company of the Eicher Group in India and a leading player of the Indian automobile industry.',con:'+91-124-4415600' },
    { id: 6, name: 'DHL Express India', contact: 'R S Subramanian',age:'Strategy Study: The DHL Growth Study The company has created a work environment where employees are respected, valued, and motivated to deliver results. This is the secret to DHL s ability to remain the number one choice of customers for over 50 years, even as other logistics companies have come and gone.',sex:'DHL Express (india) Private Limited is a Non-govt company, incorporated on 24 Apr, 2001.',con:'1800 111 345' },
    { id: 7, name: 'DTDC Express Limited', contact: 'Subhasish Chakraborty' , age:'DTDC has been recognised as one the Best Companies to Work For by Business Today, India s most esteemed business magazine. We lead the Others and Diversified category, scoring highly on Communication, Work Environment and Challenging Work Opportunities.' ,sex:'We commenced operations in 1990 and were the first express logistics company in India to implement a network of entrepreneurs (Channel Partners) that operate DTDC branded Customer Access Points.',con:'9994082076'},
    { id: 8, name: 'Ashok Leyland', contact: 'Shenu Agarwal', age:'Ashok Leyland Pantnagar has become the first truck and bus plant in the world and also the only CV manufacturer outside of Japan to win the Deming Prize. Receiving the Deming Prize in Japan, Mr. Vinod K.' ,sex:'Ashok Leyland is an Indian multinational automotive manufacturer, with their headquarters in Chennai. It is owned by the Hinduja Group. It was founded in 1948 as Ashok Motors which became Ashok Leyland in the year 1955 after collaboration with British Leyland',con:'044 – 2220 6000'},
    { id: 9, name: 'Maersk Line', contact: 'Vincent Clerc' , age:'Maersk won the prestigious Customer Service Award at the 2019 Global Freight Awards. The Customer Care Award recognises real examples of industry-leading customer care strategies. The award ceremony took place on November 14th, at the Royal Lancaster Hotel in London, England.' ,sex:'Foundation — 1904-1912. A.P. Moller - Maersk was established on 16 April 1904, in the midst of the second industrial revolution, in a little town called Svendborg on the Danish island of Funen.',con:'8610807985' },
    { id: 10, name: 'Tata Motors Limited', contact: 'Natarajan Chandrasekaran',age:'Tata Motors Pune PVBU Kaizen CFT bagged two prestigious awards, 2nd Rank and 3rd Rank in the large scale category for the Productivity Improvement Kaizen Case Study , TOPS Convention by ICQ announced Team Jamshedpur as a winner and Team Dharwad as 2nd Runner up , CV parts entry “DigiVOR” received three awards in rapid succession – TML Innovista Award, Golden Peacock Award and World Innovation Congress Award. It also made it to the final round of the Tata Group Innovista competition , Our CV Teams won 2 silver and 3 bronze awards. The P&BPE LCA team secured the 1st position by winning the Platinum Award in the OEM category at CII’s Digitalisation, Robotics & Automation Industry 4.0 , History. Tata Motors was founded in 1945, as a locomotive manufacturer. Tata Group entered the commercial vehicle sector in 1954 after forming a joint venture with Daimler-Benz of Germany in which Tata developed a manufacturing facility in Jamshedpur for Daimler lorries.',sex:'History. Tata Motors was founded in 1945, as a locomotive manufacturer. Tata Group entered the commercial vehicle sector in 1954 after forming a joint venture with Daimler-Benz of Germany in which Tata developed a manufacturing facility in Jamshedpur for Daimler lorries.',con:'1800 258 2553' },
  ]);

  const [selectedVendor, setSelectedVendor] = useState(null);

  const handleVendorClick = (vendor) => {
    setSelectedVendor(vendor);
  };

  return (
    <div className="vendor-management-container">
      <h1 className="vendor-management-heading">Vendor Management System</h1>

      <div className="vendor-management-flex-container">
        {/* Vendor List */}
        <div className="vendor-list">
          <h2>VENDOR COMPANIES OF TRANSPORT</h2>
          <ul>
            {vendors.map((vendor) => (
              <li key={vendor.id} onClick={() => handleVendorClick(vendor)}>
                {vendor.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Vendor Details */}
        <div className="vendor-details">
          <h2>Vendor Details</h2>
          {selectedVendor ? (
            <div>
              <p>COMPANY NAME : {selectedVendor.name}</p>
              <p>MANAGING DIRECTOR : {selectedVendor.contact}</p>
              <p>ACHIEVEMENTS : {selectedVendor.age}</p>
              <p>EXPERIENCE: {selectedVendor.sex}</p>
              <p>CONTACT INFO : {selectedVendor.con}</p>

            </div>
          ) : (
            <p>Select a vendor to view details.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default VendorManagementSystemtrans;
