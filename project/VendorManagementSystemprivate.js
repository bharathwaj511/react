import React, { useState } from 'react';
import './VendorManagementSystem.css'; // Import the CSS file

const VendorManagementSystemprivate = () => {
  const [vendors, setVendors] = useState([
    { id: 1, name: 'Byjus', contact: 'Byju Raveendran' , age:' In July 2017, Think and Learn acquired TutorVista (including Edurite) from Pearson.[47][48][49] In January 2019, Byju s acquired American-based Osmo, a maker of educational games for children aged 3–8 years for US$120 million.[50] Byju s also acquired Indian startup WhiteHat Jr for US$300 million.[51] In September 2020, Byju s acquires virtual labs simulation startup LabInApp.[52][53][54] In February 2021, Byju s acquires Mumbai-based doubt clearing platform Scholr.[55]In April 2021, Byju s acquired test prep firm Aakash Educational Services Ltd. in an estimated US$950 million cash and stock deal. Aakash s founders and Blackstone Group will receive minority stakes in Byju s as part of the deal.[56][57] In July 2021, Byju s acquired American-based kids learning platform Epic! in a US$500 million cash-and-stock deal. The Epic acquisition was part of Byju s foray into the overseas market, from where it expects annual revenue of US$300 million per financial year.[58] In July 2021, Byju s acquired Singapore-based higher education platform Great Learning at a cost of US$600 million and after-school learning app Toppr.[59] In September 2021, Byju s acquired two startups including online test preparation platform Gradeup for an undisclosed price and rebranded it to BYJU’S Exam Prep[60][61] and American based coding platform Tynker for US$200 million.[62][63] In December 2021, Byju s acquired GeoGebra in a US$100 million cash-and-stock deal.[64] In February 2022, Byju s-owned upskilling platform Great Learning acquires Bengaluru-based campus recruitment platform Superset.[65]',sex:'Byju founded the test preparation business Byju s Classes,[6] and the company grew to stadium-size classes.[10] In 2011, he founded Byju s with his wife, Divya Gokulnath,[5] whom he met while she was a student in his exam preparation class.[11][12]',con:'9241333666'},
    { id: 2, name: 'NIIT', contact: 'Vijay K. Thadani',age:' The President of India honoured Rajendra Singh Pawar with the prestigious civilian honour of the nation, the Padma Bhushan, in 2011 Rajendra Singh Pawar, Chairman & Founder, NIIT has been honoured with ‘Lifetime Achievement Award 2022’ by apex industry body FICCI (Federation of Indian Chambers of Commerce & Industry) Rajendra S Pawar was felicitated with the Lifetime Achievement Award at Dataquest ICT Awards in August 2020 NIIT earned 72 Brandon Hall Awards including 51 awards for Excellence in Human Capital Management and 19 Excellence in Technology awards jointly with customers in 2021 Dataquest has conferred upon NIIT the Top Training Company 2014, award successively for the past 20 years, since the inception of this category NIIT has been awarded as ‘India’s Most Trusted Training Brand’ for the 5th consecutive year (2018) NIIT won the Best Skill Learning Company award at the 11th Annual Indian Education Awards 2021 NIIT has been featured as the ‘Most Respected Education Company’ 2016 by Business World NIIT has been ranked the "4th Best Company to~ Work For" in India by Great Place to Work Institute (2014) NIIT Digital won “Best E-Learning Platform Award 2022” by Assocham NIIT ranked as Top 20 Learning Services company by Training Industry, Inc. for the 15th consecutive year',sex:' Vijay K Thadani is the Co-Founder of NIIT Group and serves as Vice Chairman and Managing Director of NIIT Ltd, a leading Global Talent Development Corporation. He is also the Co-Founder of the not-for-profit NIIT University, established with a vision of being the role model of learning, research, innovation and sustainability for the Knowledge Society. ',con:'1 800 3000 6448' },
    { id: 3, name: 'Vedantu', contact: 'Vamsi Krishna',age:'In February 2021, Vedantu made its first acquisition by acquiring Instasolv in an undisclosed deal. Vedantu had invested US$2 million in Instasolv in July 2020.[20]In July 2021, it invested in AI-enabled learning platform Pedagogy',sex:'Vamsi co-founded Vedantu - an online tutoring platform. Initially, the company provided services to students of grades 4th to 12th for the Indian Certificate of Secondary Education (ICSE) & the Central Board of Secondary Education.Currently, the company’s primary business is live online tutoring in STEM, Hindi, English, Sanskrit, German, French, Environmental Science and Social Science, using WAVE method for their 1-1 student-teacher live sessions. It also claims to provide test preparation courses for the Indian Institute of Technology Joint Entrance Examination (JEE) Foundation,  National Talent Search Examination (NTSE) and Problem Solving Assessment (PSA).',con:'1800-120-456-456' },
    { id: 4, name: 'Toppr', contact: 'Zishaan Hayath',age:'TOP 50 INTERNATIONAL EDUCATION COMPANY Tyton Global Growth 2018 Indian Education AwardsBEST EDUCATION PLATFORM Indian Education Awards 2018 IAMAI AwardsBEST EDUCATIONAL WEBSITE IAMAI Awards 2018 AWS Mobility AwardsBEST IN EDUCATION INDUSTRY AWS Mobility Awards 2017 EdTechX Global AwardsTOP 20 STARTUPS EdTechX Global Awards 2017',sex:'Zishaan Hayath is known for co-founding Toppr, an Indian edtech company that focuses on providing personalized learning solutions for students preparing for various competitive exams. Toppr offers a platform that incorporates adaptive practice, live classes, and other educational resources.Zishaan Hayath has been involved in the startup and technology ecosystem in India. Before Toppr, he was associated with Chaupaati Bazaar, an online marketplace for mobile recharge. Zishaan has also been an angel investor, supporting and mentoring startups in the Indian startup ecosystem.',con:'1800 2099 199' },
    { id: 5, name: 'Simply learn', contact: 'Krishna Kumar',age:'2019 Winner for online Learning Training Industry',sex:'since 2010',con:'1800 212 7688' },
    { id: 6, name: 'Educomp', contact: 'Shantanu Prakash',age:'In 2005, Educomp was conferred the "CNBC-ICICI Bank Emerging India Award',sex:'1994',con:'0124-4529000 ' },
    { id: 7, name: 'Unacademy', contact: 'Gaurav Munjal' , age:'Unacademy was the second company in India to receive a direct investment from Facebook. In the year 2020, Unacademy achieved a unicorn status after closing a $150m investment round with SoftBank Vision Fund at a $1.5 billion valuation.' ,sex:'2015',con:'help@unacademy.com.' },
    { id: 8, name: 'Aakash', contact: 'Abhishek', age:'Started as a single centre with just 12 students, Aakash Institute has been ranked as the No. 1 Coaching Institute among Top 25 Best Coaching Institutes in the country for preparation of medical entrance exams by India Today Magazine.' ,sex:'1988',con:' 1800-103-2727'},
    { id: 9, name: 'Kanagaraj institute', contact: 'Dr. P. Kanagaraj ' , age:'They include 17 who entered IAS and 27 who got IPS. Kanagaraj teaches General Studies and Political Science subjects for civil service aspirants. “I render my service for free. I tell my students, I promise you I will never come to you saying that I have taught you, so you should do this for me.' ,sex:'2008',con:'01204694690, 8800222298' },
    { id: 10, name: 'Vedantu', contact: 'Vamsi Krishna',age:'In February 2021, Vedantu made its first acquisition by acquiring Instasolv in an undisclosed deal. Vedantu had invested US$2 million in Instasolv in July 2020.[20]In July 2021, it invested in AI-enabled learning platform Pedagogy',sex:'Vamsi co-founded Vedantu - an online tutoring platform. Initially, the company provided services to students of grades 4th to 12th for the Indian Certificate of Secondary Education (ICSE) & the Central Board of Secondary Education.Currently, the company’s primary business is live online tutoring in STEM, Hindi, English, Sanskrit, German, French, Environmental Science and Social Science, using WAVE method for their 1-1 student-teacher live sessions. It also claims to provide test preparation courses for the Indian Institute of Technology Joint Entrance Examination (JEE) Foundation,  National Talent Search Examination (NTSE) and Problem Solving Assessment (PSA).',con:'1800-120-456-456' },
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
          <h2>VENDOR COMPANIES OF EDUCATION</h2>
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

export default VendorManagementSystemprivate;
