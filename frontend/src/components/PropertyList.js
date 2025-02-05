// PropertyList.js (Displaying List of Properties)

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropertyCard from './PropertyCard';

function PropertyList() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/properties');
        setProperties(response.data);
      } catch (error) {
        console.error('Error fetching properties', error);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div className="property-list">
      {properties.map(property => (
        <PropertyCard key={property._id} property={property} />
      ))}
    </div>
  );
}

export default PropertyList;

