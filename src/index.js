import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.render(
  <StrictMode>
    <ChakraProvider>
      <ColorModeScript />
      <Routes />
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root')
);
