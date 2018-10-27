import React, { Fragment } from 'react';
import 'aframe';

// Styles
import GlobalStyles from './styles/global';

// Components
import Header from './components/header/header';
import Scene from './components/scene/scene';

const App = () => (
  <Fragment>
    <GlobalStyles />
    <Scene />
    <Header />
  </Fragment>
);

export default App;
