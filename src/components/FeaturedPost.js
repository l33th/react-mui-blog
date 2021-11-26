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
});

const FeaturedPost = () => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.cover}>
        <CardContent className={classes.textContainer}>
          <Typography className={classes.title}>
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
          <Button>Read More</Button>
        </CardActions>
      </Card>
    </>
  );
};

export default FeaturedPost;
