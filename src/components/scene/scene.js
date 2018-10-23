import React from 'react';

// Styles
import styled from 'styled-components';

const displayName = 'Scene';

const SceneWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const Scene = () => (
  <SceneWrapper>
    <a-scene embedded stats vr-mode-ui="enabled: false" background="color: #eee">
      <a-box position="-1 4 -3" rotation="0 45 0" color="#4CC3D9" />
      <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4" />
    </a-scene>
  </SceneWrapper>
);

Scene.displayName = displayName;

export default Scene;
