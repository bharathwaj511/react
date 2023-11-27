import React, { useState } from 'react';
import './VendorManagementSystem.css'; // Import the CSS file

const VendorManagementSystemgovt = () => {
  const [vendors, setVendors] = useState([
    { id: 1, name: 'TCS - Tata Consultancy Services', contact: 'Natarajan Chandrasekaran ' , age:'22 Nov 2023 TCS Ranked #1 in Spain for Customer Satisfaction in Service Delivery Among IT and Cloud Services Providers. 20 Nov 2023 ASX signs agreement with TCS to replace its cash equities clearing and settlement platform. TCS is an Azure Expert Managed Service Provider and IoT Elite Partner. It has achieved all 6 Microsoft Partner Designations, received a record-setting 17 Microsoft Advanced Specializations, and is a member of the 2022/2023 Inner Circle for Microsoft Business Applications.',sex:'April 1, 1968 ',con:'global.marketing@tcs.com'},
    { id: 2, name: 'Wipro', contact: 'Thierry Delaporte',age:'With awards galore, Wipro is one of the most recognized companies in the IT space. Our longstanding reputation is poised to continue with strong growth in the future. We have received innumerable corporate awards that speak for the innovations introduced by us and the various milestones achieved.',sex:' 29 December 1945' ,con:'55 41 3028 2507'},
    { id: 3, name: 'BHEL - Bharat Heavy Electricals Limited', contact: 'Nalin Singhal',age:'Certified to ISO 9001:2000,Rajiv Gandhi Quality Award: 1995,Golden Peacock – National Quality Award: 1999,Golden Peacock – National Quality Award: 1999–2000,CII–EXIM Strong Commitment to Total Quality Management– 2000,Rajiv Gandhi Quality Award: 2000–01.',sex:'13 November 1964' ,con:'05361-224-154'},
    { id: 4, name: 'NIC - National Informatics Centre', contact: 'Shri Rajesh Gera',age:'NIC Haryana has received two CSI-SIG awards of appreciation at 20th CSI SIG e-Governance awards, 2022. The award ceremony was held at Delhi Technical University, Delhi on 25th March 2023. The awards were conferred upon NIC Haryana for two state level projects: Online Release Orders and Billing...',sex:'77% of National Informatics Centre employees would recommend working there to a friend based on Glassdoor reviews. Employees also rated National Informatics Centre 4.0 out of 5 for work life balance, 3.4 for culture and values and 3.6 for career opportunities.' ,con:'011-24305000'},
    { id: 5, name: 'Tech Mahindra', contact: 'Mohit Joshi',age:'Tech Mahindra has been identified as a Top Performing Business Partner - Managed Service Provider for the year 2022 at the IBM Partner Connect & Awards 2023. Tech Mahindra was positioned as the #3 Strongest Brand in the IT Services Industry for 2023 in the Brand Finance India 100 report',sex:'1986',con:'0422 458 6300' },
    { id: 6, name: 'HCL Technologies', contact: 'C Vijayakumar',age:'HCL has been named a Diamond award winner by the IT Services Marketing Association (ITSMA), the leading marketing association for technology, communications and professional services providers, for its “CIO Straight Talk” initiative, recognizing it as industrys best-in-class program for customer engagement.',sex:'1991',con:'0120 430 6000' },
    { id: 7, name: 'Hindustan Construction Company ', contact: 'Arjun Dhawan' , age:'HCC is a pioneer in India s infrastructure industry, having executed landmark projects that have defined the country s progress since 1926.' ,sex:'1926',con:'+91 22 2575 1000 ' },
    { id: 8, name: 'Bharat Dynamics Limited', contact: 'Commodore A Madhavarao', age:'BDL at Glance | BHARAT DYNAMICS LIMITED INDIA BDL, with its over five decades of missile and allied defence equipment manufacturing experience, developed skill-sets and state-of-the-art infrastructure, is poised to enter new avenues of manufacturing, covering a wide range of weapon systems such as Air-to-Air Missiles, Air-to-Surface Missiles, Air Defence Systems' ,sex:'1970',con:'040-23456110'},
    { id: 9, name: 'Apollo Hospitals', contact: 'Suneeta Reddy' , age:'By 1992, Apollo Hospitals introduced Artery Stenting for the first time in India. First private healthcare provider to perform a heart transplant in 1995. Pioneered open heart surgeries and cardiac catheterization, in the early 80 s.' ,sex:'1983',con:'0422 420 0444' },
    { id: 10, name: 'NIC - National Informatics Centre', contact: 'Shri Rajesh Gera',age:'NIC Haryana has received two CSI-SIG awards of appreciation at 20th CSI SIG e-Governance awards, 2022. The award ceremony was held at Delhi Technical University, Delhi on 25th March 2023. The awards were conferred upon NIC Haryana for two state level projects: Online Release Orders and Billing...',sex:'77% of National Informatics Centre employees would recommend working there to a friend based on Glassdoor reviews. Employees also rated National Informatics Centre 4.0 out of 5 for work life balance, 3.4 for culture and values and 3.6 for career opportunities.' ,con:'011-24305000'},
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
          <h2>VENDOR COMPANIES OF GOVERNMENT</h2>
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
              <p>EXERIENCE : {selectedVendor.sex}</p>
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

export default VendorManagementSystemgovt;
