import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressBar = () => (
  <div style={{ width: 200, height: 200 }}>
    <CircularProgressbar value={66} />
  </div>
);
