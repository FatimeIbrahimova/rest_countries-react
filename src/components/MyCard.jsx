import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const MyCard = ({data}) => {
  return (
    <div>
         <Grid item md={24}>
            <Card sx={{border:"2px solid red"}}>
                <CardContent>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {/* {data.flags.svg} */}
                        <Link to={`${data.id}`}><img src="{data.flags.png}" alt='img'/></Link>
                    </Typography>
                    <Typography variant="body2">
                        {data.name.common}
                    </Typography>
                    <Typography variant="body2">
                        Population:{data.population}
                    </Typography>
                    <Typography variant="body2">
                       Region:{data.region}
                    </Typography>
                    <Typography variant="body2">
                       Capital:{data.capital}
                    </Typography>
                </CardContent>
                <CardActions>
                    {/* <Link to={`${data.id}`}><Button size="small">Detail of {data.name}</Button></Link> */}
                </CardActions>
            </Card>
            </Grid>
    </div>
  )
}

export default MyCard