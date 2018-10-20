import React from 'react';

// Styles
import styled from 'styled-components';

const displayName = 'Header';

const HeaderWrapper = styled.div`
  text-align: center;
  overflow: hidden;
`;

const Header = () => (
  <HeaderWrapper>
    <h1>DevBricks</h1>
  </HeaderWrapper>
);

Header.displayName = displayName;

export default Header;
