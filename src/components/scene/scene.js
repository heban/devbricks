import React from 'react';

const displayName = 'Scene';

const Scene = () => (
  <a-scene physics>
    <a-box position="-1 4 -3" rotation="0 45 0" color="#4CC3D9" dynamic-body />
    <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4" static-body />
    <a-sky color="#ECECEC" />
  </a-scene>
);

Scene.displayName = displayName;

export default Scene;
