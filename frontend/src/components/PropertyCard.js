// PropertyCard.js (Displaying Individual Property Details)

import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Button } from '@mui/material';

function PropertyCard({ property }) {
  return (
    <Card className="property-card">
      <CardContent>
        <Typography variant="h6">{property.title}</Typography>
        <Typography variant="body2">{property.location}</Typography>
        <Typography variant="body2">£{property.price}</Typography>
        <Link to={`/property/${property._id}`}>
          <Button variant="outlined">View Details</Button>
        </Link>
      </CardContent>
    </Card>
  );
}

export default PropertyCard;

