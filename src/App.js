import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Nav from './components/Navbar'; // Verifique o nome e caminho do arquivo
import Footer from './components/Footer'; // Verifique o nome e caminho do arquivo
import HomePage from './pages/HomePage';

function App() {
  return (
    <ChakraProvider>
      <Nav />
      <HomePage />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
