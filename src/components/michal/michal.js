import React from 'react';

import { colors } from '../../styles/global';

const displayName = 'Michal';

const Michal = () => (
  <a-entity rotation="0 -90 0" position="-3.804 -0.296 -3.860">
    <a-entity classname="michal-head" position="0.5 1 -5" scale="0.6 0.6 0.6">
      <a-box material={`color: ${colors.skin}`} position="0 1 -0.56" geometry="" />
      <a-box material={`color: ${colors.blue}`} scale="0.1 0.1 0.1" position="0.5 1.2 -0.25" geometry="" />
      <a-box material={`color: ${colors.blue}`} scale="0.1 0.1 0.1" position="0.5 1.2 -0.75" geometry="" />
    </a-entity>
  </a-entity>
);

Michal.displayName = displayName;

export default Michal;
