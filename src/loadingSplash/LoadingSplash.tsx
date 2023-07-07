import "./LoadingSplash.css";

import { LoadingSplashProps } from "./types";

const LoadingSplash = ({ imageUrl }: LoadingSplashProps) => {
  return (
    <div className="loading-splash-container">
      <h4>잠시만 기다려주세요!</h4>
      <div className="loading-splash">
        <img
          src={imageUrl}
          className="loading-splash-img"
          alt="loading-splash"
        />
        <img
          src={imageUrl}
          className="loading-splash-img"
          alt="loading-splash"
        />
      </div>
    </div>
  );
};

export { LoadingSplash };
