import React, { useState } from 'react';
import './VendorManagementSystem.css'; // Import the CSS file

const VendorManagementSystemfarming = () => {
  const [vendors, setVendors] = useState([
    { id: 1, name: 'Bombay Burmah Trading Corporation Ltd', contact: 'Ness N Wadia' , age:'The Tea Board of India, in association with the United Planters Association of South India (UPASI), successfully conducted its third edition of the GOLDEN LEAF INDIA Awards  in 2007 and the Bombay Burmah Trading Corporation added yet another feather to its cap, by walking away with trophies for all the 4 samples that it took part in the competition. The Jury recognized BBTC teas as the best in the Anamallais with our Mukkottumudi and Anaimudi teas winning trophies. Manjolai, BBTC s CTC factory from Singampatti, bagged the trophy for CTC Fannings and Oothu bagged the Trophy under the Organic Tea Category.In 2008 too Bombay Burmah Trading Corporation bagged trophies for all the four samples collected in GOLDEN LEAF INDIA Awards Bombay Burmah Trading Corporation’s Mauritius arm, Leila Lands in April 2009, acquired 100% of Britannia Brand from Singapore based Danone Asia. This has resulted in Leila Lands’ indirect shareholding in Britannia Industries, increasing from 25.48% to 50.96%',sex:' Ness Nusli Wadia is a businessperson who has been the head of 6 different companies. Mr. Wadia holds the position of Non-Executive Chairman at National Peroxide Ltd., Managing Director & Executive Director at The Bombay Burmah Trading Corp. Ltd., Secretary of Modern Education Society and Co-Chairman at Indian Real Estate Forum.He is also Chairman at Young Leaders Forum and on the board of 22 other companies.In the past Ness Nusli Wadia occupied the position of Deputy Managing Director at The Wadia Group and Chairman-Maharashtra State Council at Federation of Indian Chambers of Commerce & Industry. Mr. Wadia received a graduate degree from the University of Warwick.',con:'67162222'},
    { id: 2, name: 'Dhunseri Tea & Industries Ltd', contact: ' C.K.Dhanuka',age:'Hatijan Tea Estate had achieved a yield of 3,585 Kg per hectare.Khagorijan and Orang Tea Estates had received special appreciation from M/s J. Thomas & Co. Private Limited for achieving attractive prices of on sale of orthodox / CTC teas.',sex:'Mr. C. K. Dhanuka is a graduate in Commerce and has over 33 years of experience in the industry. An industrialist by occupation, he is the Ex-Chairman of FICCI (Eastern Regional Council) and is also a member of the National Committee of FICCI. Mr. C.K Dhanuka was the Ex-Chairman of the Indian Tea Association and the Ex-Vice Chairman of the TeaBoard. Providing industry wide leadership and management strategy may be deemed as his areas of expertise. He was also the Ex-President of the All India Organization of Employers.',con:'033 2280-1950 to 54' },
    { id: 3, name: 'Nath Bio-Genes (India) Ltd ', contact: 'Shri. Satish Kagliwal',age:' Nath Bio-Genes (I) Ltd. is the flagship company of Nath Group, which is a well diversified business conglomerate. For over forty years, Nath Bio-Genes has played a pivotal role in shaping Indian agriculture by developing and supplying quality BT, hybrid and varietal seeds to farmers at affordable prices. We are as old as the industry itself! Some reputed cotton hybrids like Somnath, Jagannath which were introduced over two decades ago, still remain household names with farmers. Nath Bio-Genes has emerged as one of the most preferred seeds brands in India. In line with our commitment to providing farmers with world-class seeds, we also engage in extension work to help farmers leverage their relationship with us to the fullest; this includes a package of product awareness programs, crop demonstrations, knowledge transfer on agronomic inputs, fertigation practices and post-harvest management.',sex:' Satish Kagliwal has a master of management from the coveted institution BITS Pilani. He has always been an achiever and continues to be a prolific contributor to society. He dons many hats as he holds respectable positions at different organisations. He is the Chairman of the Aurangabad Vidya Mandir Trust, which runs Nath Valley School. He is also the President at the Aurangabad Management Association (AMA) and the Founder President of the National Seed Association of India (NSAI) and Seed Industries Association of Maharashtra (SIAM).In the past, he has been the President of the National Seed Association of India (NSAI), management committee member of Kamal Nayan Bajaj Hospital and the President of Chamber of Marathwada Industries and Agriculture (CMIA).',con:'2403502431 to 35' },
    { id: 4, name: 'Goodricke Group Ltd', contact: 'Mr. Atul Asthana',age:'Apart from fetching world record prices in the recent past, Goodricke Group Ltd Castleton brand is also the first tea garden in the world to receive the ISO 9002 certification.',sex:' Atul Asthana, based in Kolkata, WB, IN, is currently a Managing Director and CEO at Goodricke Group Limited, bringing experience from previous roles at GOODRICKE GROUP LTD.. Atul Asthana holds a 1980 - 1984 Mechanical Engineering @ B.I.T. Mesra, Ranchi. With a robust skill set that includes Food, Food Service, Food and Beverage, Restaurants, Menu Development and more, Atul Asthana contributes valuable insights to the industry.' ,con:' 40116723'},
    { id: 5, name: 'Monsanto India Limited', contact: 'Ravishankar Cherukuri',age:'Monsanto was most commonly known for producing genetically modified (GMO) seeds and the herbicide glyphosate known as “Roundup.” They produce cotton, soy, corn, alfalfa, sorghum, and canola, which are all sprayed with Roundup to manage the surrounding weeds ',sex:'1949' ,con:'42476450'},
    { id: 6, name: 'Bayer CropScience', contact: 'Bill Anderson',age:'Scores of pharmaceuticals, dyes, acetates, synthetic rubbers, plastics, fibres, insecticides, and other chemicals were first developed by Bayer. In addition to being the originator and first marketer of aspirin (1899), Bayer was the first company to mass-produce heroin for use in pain and cough medications (1898)',sex:'1 August 1863',con:'1800-120-4049.' },
    { id: 7, name: 'Krishi Rasayan Group', contact: 'Mr. Atul Churiwal' , age:'It has become a major Agro Chemical Company having separate dedicated manufacturing units for Technical and Formulated Insecticides, Herbicides, Fungicides and Plant Growth regulators for agricultural use.' ,sex:'1966',con:'1800 572 5065' },
    { id: 8, name: 'National Seeds Corporation', contact: 'Shri V.K. Gaur', age:'Starting as a small organization in 1963, NSC successfully performed the big task to produce paddy seed, for sowing in one Lakh acre area in Kharif,1966 and import and distribution of 18000 tons of wheat seed for sowing in Rabi 1967 and thus registered its presence as harbinger of Green Revolution in the country.' ,sex:'1963',con:'+91-9205160034'},
    { id: 9, name: 'JK Agri Genetics Ltd', contact: 'Vinayak Devarahall' , age:'New product launches – To refresh the product portfolio and offer better products for the farmer new products in Okra, Tomato and Chilli have been introduced. In field crops, during the last 2 years, we have introduced dozens of new products in rice, maize, cotton, millets & mustards etc for rapid scale up of volumes.' ,sex:'1989',con:'+91 40 27762342' },
    { id: 10, name: 'Monsanto India Limited', contact: 'Ravishankar Cherukuri',age:'Monsanto was most commonly known for producing genetically modified (GMO) seeds and the herbicide glyphosate known as “Roundup.” They produce cotton, soy, corn, alfalfa, sorghum, and canola, which are all sprayed with Roundup to manage the surrounding weeds ',sex:'1949' ,con:'42476450'},
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
          <h2>VENDOR COMPANIES OF FARMING</h2>
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
              <p>EXPERIENCE : {selectedVendor.sex}</p>
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

export default VendorManagementSystemfarming;
