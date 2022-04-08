import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressBar = () => (
  <div style={{ minWidth: '40%', height: '50%' }}>
    <CircularProgressbar value={66} />
  </div>
);

export default ProgressBar;
