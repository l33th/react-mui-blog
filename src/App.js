import './App.css';
import { Container, createTheme } from '@mui/material';
import Header from './components/Header';
import { ThemeProvider } from '@emotion/react';

function App() {
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
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
