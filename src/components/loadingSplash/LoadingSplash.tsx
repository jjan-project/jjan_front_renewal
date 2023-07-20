import "./LoadingSplash.css";

import { LoadingSplashProps } from "./types";

const LoadingSplash = ({ imageUrl }: LoadingSplashProps) => {
  return (
    <div className="loading-splash-container">
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
