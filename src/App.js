import React, { Fragment } from 'react';
import 'aframe';

// styles
import GlobalStyles from './styles/global';

// components
import Header from './components/header/header';
import Scene from './components/scene/scene';

const App = () => (
  <Fragment>
    <Header />
    <main>
      <Scene />
    </main>
    <footer>
      Test footer
    </footer>
    <GlobalStyles />
  </Fragment>
);

export default App;
