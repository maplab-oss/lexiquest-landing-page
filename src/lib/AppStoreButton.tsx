"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import { contentConfig } from "./content-config";

interface Props {
  store: "apple" | "google";
  icon?: React.ReactNode;
  onClick?: () => void;
}

const AppStoreButton: React.FC<Props> = ({ store, icon, onClick }) => {
  const isApple = store === "apple";
  const storeConfig = isApple
    ? contentConfig.appStoreButton.apple
    : contentConfig.appStoreButton.google;

  return (
    <button
      onClick={onClick}
      className="flex min-w-[150px] items-center gap-3 rounded-lg bg-black px-4 py-3 text-white transition-opacity hover:opacity-80"
    >
      {/* Font Awesome Icon */}
      <div className="flex h-10 w-10 items-center justify-center">
        {icon || (
          <FontAwesomeIcon
            icon={isApple ? faApple : faGooglePlay}
            size="2x"
            className="text-white"
          />
        )}
      </div>

      {/* Text content */}
      <div className="flex flex-col items-start text-left">
        <span className="text-[10px] leading-tight uppercase">
          {storeConfig.downloadText}
        </span>
        <span className="text-lg leading-tight font-semibold">
          {storeConfig.storeText}
        </span>
      </div>
    </button>
  );
};

export default AppStoreButton;
