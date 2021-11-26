import './App.css';
import { Container, createTheme, Grid, ThemeProvider } from '@mui/material';
import Header from './components/Header';
import FeaturedPost from './components/FeaturedPost';

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
          <Grid></Grid>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
