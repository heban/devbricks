import React from 'react';

// Styles
import styled from 'styled-components';

// Components
import Pawel from '../pawel/pawel';

const displayName = 'Scene';

const SceneWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  body:not(.aframe-inspector-opened) & {
    z-index: -1;
  }
`;

const Scene = () => (
  <SceneWrapper>
    <a-scene embedded stats vr-mode-ui="enabled: false" background="color: #eee">
      <Pawel />
      <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4" />
    </a-scene>
  </SceneWrapper>
);

Scene.displayName = displayName;

export default Scene;
