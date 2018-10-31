import React from 'react';

const displayName = 'Pawel';

const Pawel = () => (
  <a-entity rotation="0 -90 0" position="-3.804 -0.296 -3.860">
    <a-entity classname="pawel-head" position="0.598 1.300 -2.6442555311230107" scale="0.396 0.40214599896299696 0.103" rotation="-25 0 0">
      <a-box material="color: #ffd597" scale="0.576 0.579 1.571" />
    </a-entity>
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
      <a-animation
        attribute="rotation"
        dur="2000"
        direction="alternate-reverse"
        from="0 -11.862 0"
        to="0 -15 0"
        easing="ease-in-out-circ"
        repeat="indefinite"
      />
    </a-entity>
    <a-entity className="pawel-left-leg" position="0.455 0.654 -2.732" rotation="0 10.550 0">
      <a-box scale="-0.183 0.106 0.377" material="color: #009bff" />
      <a-box scale="-0.183 0.36543553946404106 0.09550669473152262" position="0 -0.130 -0.142" material="color: #009bff" />
      <a-box scale="-0.186 0.057 0.149" position="0.001 -0.314 -0.168" material="color: #093254" />
    </a-entity>
    <a-entity className="pawel-right-arm" position="0.862 1.086 -2.609" scale="-0.122 0.093 0.140" rotation="-40 -4 -15">
      <a-box material="color: #373737" />
      <a-box material="color: #ffd597" position="0.009 -0.001 -0.992" scale="0.897 0.9 1.2336008511848031" />
      <a-box material="color: #ffd597" position="0.593 0.009283690278304238 -1.8429885341109562" scale="2.031 0.894 0.595" rotation="0 29 0.5" />
    </a-entity>
    <a-entity className="pawel-left-arm" position="0.336 1.086 -2.609" scale="-0.122 0.093 0.140" rotation="-40 4 15">
      <a-box material="color: #373737" />
      <a-box material="color: #ffd597" position="0.009 -0.001 -0.992" scale="0.897 0.9 1.2336008511848031" />
      <a-box material="color: #ffd597" position="-0.593 0.009283690278304238 -1.8429885341109562" scale="2.031 0.894 0.595" rotation="0 -29 -0.5" />
    </a-entity>
  </a-entity>
);

Pawel.displayName = displayName;

export default Pawel;
