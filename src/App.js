import './App.css';
import { Container, createTheme, Grid, ThemeProvider } from '@mui/material';
import { featuredPosts } from './data/Data';
import Header from './components/Header';
import FeaturedPost from './components/FeaturedPost';
import PostCard from './components/PostCard';

function App() {
  // dark theme
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Container>
          <Header />
          <FeaturedPost />
          <br />
          <Grid container>
            {featuredPosts.map(post => (
              <PostCard post={post} key={post.title} />
            ))}
          </Grid>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
