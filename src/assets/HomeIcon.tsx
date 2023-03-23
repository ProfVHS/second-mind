import React from "react";

function HomeIcon() {
  return (
    <>
      <svg
        width="28"
        height="30"
        viewBox="0 0 28 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="navbar_button"
        onClick={() => {
          alert("Strona główna");
        }}
      >
        <path
          d="M4.00002 26.6667H9.00002V16.6667H19V26.6667H24V11.6667L14 4.16667L4.00002 11.6667V26.6667ZM0.666687 30V10L14 0L27.3334 10V30H15.6667V20H12.3334V30H0.666687Z"
          fill="currentColor"
        />
      </svg>
    </>
  );
}

export default HomeIcon;
