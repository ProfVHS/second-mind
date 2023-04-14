import React from "react";

function AddTaskBtn() {
  return (
    <div className="AddTaskBtn">
      <svg
        width="83"
        height="83"
        viewBox="0 0 83 83"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_348_50)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M41.5 0C20.7893 0 4 16.7893 4 37.5C4 58.2107 20.7893 75 41.5 75C62.2107 75 79 58.2107 79 37.5C79 16.7893 62.2107 0 41.5 0ZM39.0715 54.0001C39.0715 55.1046 39.9669 56.0001 41.0715 56.0001H42.4286C43.5332 56.0001 44.4286 55.1046 44.4286 54.0001V41.9286C44.4286 40.8241 45.324 39.9286 46.4286 39.9286H58.5C59.6046 39.9286 60.5 39.0332 60.5 37.9286V36.5715C60.5 35.4669 59.6046 34.5715 58.5 34.5715H46.4286C45.324 34.5715 44.4286 33.6761 44.4286 32.5715V20.5001C44.4286 19.3955 43.5332 18.5001 42.4286 18.5001H41.0715C39.9669 18.5001 39.0715 19.3955 39.0715 20.5001V32.5715C39.0715 33.6761 38.176 34.5715 37.0715 34.5715H25C23.8955 34.5715 23 35.4669 23 36.5715V37.9286C23 39.0332 23.8955 39.9286 25 39.9286H37.0715C38.176 39.9286 39.0715 40.8241 39.0715 41.9286V54.0001Z"
            fill="currentColor"
            fill-opacity="0.75"
            shape-rendering="crispEdges"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_348_50"
            x="0"
            y="0"
            width="83"
            height="83"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_348_50"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_348_50"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default AddTaskBtn;
