import React from 'react';

import Content from '../Content/Loadable';
import { Web3ContextProvider } from '../../contexts/Web3Context';

const App = () => (
  <Web3ContextProvider>
    <Content />
  </Web3ContextProvider>
);

export default App;
