import React from 'react';

const displayName = 'Pawel';

const Pawel = () => (
  <a-entity>
    <a-entity classname="pawel-body" position="0.598 0.982 -2.58" scale="0.396 0.40214599896299696 0.103">
      <a-box material="color: #373737" position="0 -0.039 0" />
      <a-box material="color: #009bff" position="0 -0.786 0" scale="1 0.318 1" />
      <a-box material="color: #6a5842" position="0 -0.583 0" scale="1 0.089 1" />
    </a-entity>
    <a-entity className="pawel-right-leg" position="0.745 0.654 -2.732" rotation="0 -11.862 0">
      <a-box scale="-0.183 0.106 0.377" material="color: #009bff" />
      <a-entity position="0 -0.130 -0.016" rotation="-51.671 0 0">
        <a-box scale="-0.183 0.36543553946404106 0.09550669473152262" material="color: #009bff" />
        <a-box scale="-0.186 0.057 0.149" position="0.001 -0.184 -0.026" material="color: #093254" />
      </a-entity>
    </a-entity>
    <a-entity className="pawel-left-leg" position="0.455 0.654 -2.732" rotation="0 10.550 0">
      <a-box scale="-0.183 0.106 0.377" material="color: #009bff" />
      <a-box scale="-0.183 0.36543553946404106 0.09550669473152262" position="0 -0.130 -0.142" material="color: #009bff" />
      <a-box scale="-0.186 0.057 0.149" position="0.001 -0.314 -0.168" material="color: #093254" />
    </a-entity>
    <a-entity className="pawel-right-arm" position="0.862 1.086 -2.601" rotation="-24.663 -16.862 -1.486" scale="-0.142 0.103 0.151">
      <a-box material="color: #373737" />
      <a-box material="color: #ffd597" position="0.009 -0.001 -0.992" scale="0.897 0.9 1.2336008511848031" />
    </a-entity>
  </a-entity>
);

Pawel.displayName = displayName;

export default Pawel;
