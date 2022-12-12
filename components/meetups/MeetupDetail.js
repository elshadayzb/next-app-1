import { Card, CardMedia, CardContent, Typography } from '@mui/material'
import classes from './MeetupDetail.module.css'

const MeetupDetail = (props) => {

    return(
        
            <Card className={classes.detail}>
                <CardMedia 
                    component="img"
                    height="30%"
                    image={props.image}
                    alt={`${props.meetupId} page`}/>
                <CardContent>
                    <Typography variant="h4"  color="textPrimary" gutterBottom>{props.title}</Typography>
                    <Typography variant="h6" color="textPrimary" gutterBottom>
                        <address>{props.address}</address>
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {props.description}
                    </Typography>
                </CardContent>
            </Card>
        
    )
}

export default MeetupDetail