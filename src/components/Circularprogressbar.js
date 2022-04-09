import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressBar = () => (
  <div style={{ minWidth: '40%', height: '50%', color: 'linear-gradient(to bottom, #307bbe, #379cf6);' }}>
    <CircularProgressbar value={66} />
  </div>
);

export default ProgressBar;
