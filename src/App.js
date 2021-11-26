import './App.css';
import { Container, createTheme } from '@mui/material';
import Header from './components/Header';
import { ThemeProvider } from '@emotion/react';
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
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
