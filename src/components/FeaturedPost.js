import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  title: {
    fontSize: 40,
    fontFamily: 'Montsarat',
  },
  cover: {
    backgroundImage: `url(http://wallpapercave.com/wp/lBdslie.jpg)`,
    backgroundPosition: 'center',
    padding: '35px 25px',
  },
});

const FeaturedPost = () => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.cover}>
        <CardContent className={classes.textContainer}>
          <Typography className={classes.title} gutterBottom>
            This is a long title for the featured post.
          </Typography>
          <Typography variant="h5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
            asperiores omnis unde alias quod? Maxime nisi laborum esse qui
            dolore dolores quae asperiores sequi perspiciatis nobis, reiciendis
            accusantium ullam corporis.
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="text" className={classes.btn}>
            Read More
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default FeaturedPost;
