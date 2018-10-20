import React, { Fragment } from 'react';

// styles
import GlobalStyles from './styles/global';

// components
import Header from './components/header/header';

const App = () => (
  <Fragment>
    <Header />
    <main>
      Test content
    </main>
    <footer>
      Test footer
    </footer>
    <GlobalStyles />
  </Fragment>
);

export default App;
