import React, { useState } from 'react';
import './VendorManagementSystem.css'; // Import the CSS file

const VendorManagementSystem = () => {
  const [vendors, setVendors] = useState([
    { id: 1, name: 'Bharathwaj', contact: '123-456-7890' , age:'19',sex:'Male'},
    { id: 2, name: 'Ashwin', contact: '987-654-3210',age:'18',sex:'Male' },
    { id: 3, name: 'Varma', contact: '987-654-3210',age:'18',sex:'Male' },
    { id: 4, name: 'Daya', contact: '987-654-3210',age:'18',sex:'Male' },
    { id: 5, name: 'Anand', contact: '987-654-3210',age:'17',sex:'Male' },
    { id: 6, name: 'Hari', contact: '987-654-3210',age:'18',sex:'Male' },
    { id: 7, name: 'Hemant', contact: '987-654-3210' , age:'18' ,sex:'male' },
    { id: 8, name: 'Dharnish', contact: '987-654-3210', age:'19' ,sex:'Male'},
    { id: 9, name: 'Dharshini', contact: 'Not much useful to contact' , age:'18' ,sex:'Female' },
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
          <h2>Vendor List</h2>
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
              <p>Name: {selectedVendor.name}</p>
              <p>Contact: {selectedVendor.contact}</p>
              <p>age: {selectedVendor.age}</p>
              <p>sex: {selectedVendor.sex}</p>

            </div>
          ) : (
            <p>Select a vendor to view details.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default VendorManagementSystem;
