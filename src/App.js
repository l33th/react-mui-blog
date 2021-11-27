import './App.css';
import { Container, createTheme, Grid, ThemeProvider } from '@mui/material';
import { featuredPosts, sidebar } from './data/Data';
import Header from './components/Header';
import FeaturedPost from './components/FeaturedPost';
import PostCard from './components/PostCard';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

function App() {
  // dark theme
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const classes = useStyles();

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Container>
          <Header />
          <FeaturedPost />
          <br />
          <Grid container spacing={4}>
            {featuredPosts.map(post => (
              <PostCard post={post} key={post.title} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="From the Firehouse" />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
