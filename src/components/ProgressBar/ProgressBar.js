import React from "react";
import { Progress } from "semantic-ui-react";
import './ProgressBar.css';

const ProgressBar = ({ uploadState, percentUploaded }) =>
  uploadState === "uploading" && (
    <Progress
      className="progress-bar"
      percent={percentUploaded}
      progress
      indicating
      size="medium"
      inverted
    />
  );

export default ProgressBar;
