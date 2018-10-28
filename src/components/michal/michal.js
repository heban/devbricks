import React from 'react';

const displayName = 'Michal';

const Michal = () => (
  <a-entity rotation="0 -90 0" position="-3.804 -0.296 -3.860">
    <a-entity classname="michal-head" position="0.5 0.982 -2.5" scale="0.6 0.6 0.6">
      <a-box material="color:#fcdac4" position="0.25 1.08 -3.5" geometry="" />
    </a-entity>
  </a-entity>
);

Michal.displayName = displayName;

export default Michal;
