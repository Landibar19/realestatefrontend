import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material'
import { Section3Content } from '../../SectionsContent/Section3Content';

export const Section3 = () => {
  return (
    <div style={{height:'auto'}}>
      <Box>
        <Typography sx={{color:'black', fontSize: 40, fontWeight:'bold', paddingTop: 5}}>
          Find Properties in this city
        </Typography>
        <Typography sx={{ color: 'black', fontSize: 17}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Typography>
        <Box display="flex" justifyContent="center" flexWrap="wrap" padding={2}>
          {Section3Content.map((item, index) => (
            <Card 
            key={index} 
            style={{
            
              width: index === 0 || index === 5 ? '620px' : '300px',
              height:'300px', 
              position: 'relative', 
              margin: 10, 
              padding:5 ,
              borderRadius: '16px',
              }}>
              <img  src={item.image} alt={item.city} 
              style={{ 
                width: '100%', 
                height:'100%', 
                objectFit: 'cover', 
                borderRadius:'16px',
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 1
                }}/>
                <CardContent style={{ position: 'absolute', top: 10, left:10, zIndex: 2 }}>
                <Typography sx={{fontSize: 17, fontWeight:'regular'}}>{item.propertyNumber}</Typography>
                <Typography  sx={{fontSize: 24, fontWeight: 'bold'}}>{item.city}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </div>
  )
}