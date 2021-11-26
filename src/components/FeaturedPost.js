import {
  Button,
  Card,
  CardActions,
  CardContent,
  makeStyles,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
  title: {
    color: 'white',
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
            Using technology to create a better world
          </Typography>
          <Typography variant="h5" component="h2" style={{ color: 'white' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
            libero. Rem, et. Quibusdam animi porro voluptatum velit perspiciatis
            mollitia labore vel sunt incidunt maxime vero error est, iusto
            inventore nihil.
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="text" style={{ color: '#90caf9', fontWeight: 700 }}>
            Read More..
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default FeaturedPost;
