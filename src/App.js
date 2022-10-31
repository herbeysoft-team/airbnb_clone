import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import React from 'react';
import './App.css';
import OptionsTab from './components/OptionsTab';
import LocationCards from './components/LocationCards';
import { Container } from '@mui/material';
import Footer from './components/Footer';
import MobileFooter from './components/MobileFooter';
import { displayOnDesktop } from './themes/CommonStyles';
import FooterMenu from './components/FooterMenu';


function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
        }}
      >
        <Box>
          <Header />
          <OptionsTab/>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            height: 1000,
            overflowY: 'scroll',
          }}
        >
          <Container maxWidth="xl" sx={{ mb: 3 }}>
            <LocationCards/>
            <Box
              sx={{
                display: { xs: 'flex', md: 'none' },
              }}
            >
              <MobileFooter />
            </Box>
          </Container>
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
          <FooterMenu />
        </Box>
        <Box sx={displayOnDesktop}>
          <Footer />
        </Box>
        </Box>
    </React.Fragment>
  );
}

export default App;