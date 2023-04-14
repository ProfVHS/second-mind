interface IconProps {
  isSelected: boolean;
}

export function CalendarIcon({ isSelected }: IconProps) {
  return (
    <>
      <svg
        width="27"
        height="30"
        viewBox="0 0 27 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`navbar_button ${isSelected && "selected"}`}
      >
        <path
          d="M3 30C2.175 30 1.4685 29.706 0.880502 29.118C0.292502 28.53 -0.000997453 27.824 2.54669e-06 27V6C2.54669e-06 5.175 0.294003 4.4685 0.882003 3.8805C1.47 3.2925 2.176 2.999 3 3H4.5V0H7.5V3H19.5V0H22.5V3H24C24.825 3 25.5315 3.294 26.1195 3.882C26.7075 4.47 27.001 5.176 27 6V27C27 27.825 26.706 28.5315 26.118 29.1195C25.53 29.7075 24.824 30.001 24 30H3ZM3 27H24V12H3V27ZM3 9H24V6H3V9ZM13.5 18C13.075 18 12.7185 17.856 12.4305 17.568C12.1425 17.28 11.999 16.924 12 16.5C12 16.075 12.144 15.7185 12.432 15.4305C12.72 15.1425 13.076 14.999 13.5 15C13.925 15 14.2815 15.144 14.5695 15.432C14.8575 15.72 15.001 16.076 15 16.5C15 16.925 14.856 17.2815 14.568 17.5695C14.28 17.8575 13.924 18.001 13.5 18ZM7.5 18C7.075 18 6.7185 17.856 6.4305 17.568C6.1425 17.28 5.999 16.924 6 16.5C6 16.075 6.144 15.7185 6.432 15.4305C6.72 15.1425 7.076 14.999 7.5 15C7.925 15 8.2815 15.144 8.5695 15.432C8.8575 15.72 9.001 16.076 9 16.5C9 16.925 8.856 17.2815 8.568 17.5695C8.28 17.8575 7.924 18.001 7.5 18ZM19.5 18C19.075 18 18.7185 17.856 18.4305 17.568C18.1425 17.28 17.999 16.924 18 16.5C18 16.075 18.144 15.7185 18.432 15.4305C18.72 15.1425 19.076 14.999 19.5 15C19.925 15 20.2815 15.144 20.5695 15.432C20.8575 15.72 21.001 16.076 21 16.5C21 16.925 20.856 17.2815 20.568 17.5695C20.28 17.8575 19.924 18.001 19.5 18ZM13.5 24C13.075 24 12.7185 23.856 12.4305 23.568C12.1425 23.28 11.999 22.924 12 22.5C12 22.075 12.144 21.7185 12.432 21.4305C12.72 21.1425 13.076 20.999 13.5 21C13.925 21 14.2815 21.144 14.5695 21.432C14.8575 21.72 15.001 22.076 15 22.5C15 22.925 14.856 23.2815 14.568 23.5695C14.28 23.8575 13.924 24.001 13.5 24ZM7.5 24C7.075 24 6.7185 23.856 6.4305 23.568C6.1425 23.28 5.999 22.924 6 22.5C6 22.075 6.144 21.7185 6.432 21.4305C6.72 21.1425 7.076 20.999 7.5 21C7.925 21 8.2815 21.144 8.5695 21.432C8.8575 21.72 9.001 22.076 9 22.5C9 22.925 8.856 23.2815 8.568 23.5695C8.28 23.8575 7.924 24.001 7.5 24ZM19.5 24C19.075 24 18.7185 23.856 18.4305 23.568C18.1425 23.28 17.999 22.924 18 22.5C18 22.075 18.144 21.7185 18.432 21.4305C18.72 21.1425 19.076 20.999 19.5 21C19.925 21 20.2815 21.144 20.5695 21.432C20.8575 21.72 21.001 22.076 21 22.5C21 22.925 20.856 23.2815 20.568 23.5695C20.28 23.8575 19.924 24.001 19.5 24Z"
          fill="currentColor"
        />
      </svg>
    </>
  );
}

export function CategoriesIcon({ isSelected }: IconProps) {
  return (
    <>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`navbar_button ${isSelected && "selected"}`}
        onClick={() => {
          alert("Categories");
        }}
      >
        <path
          d="M3.75 30C2.71875 30 1.83563 29.6325 1.10063 28.8975C0.365628 28.1625 -0.00124682 27.28 3.18336e-06 26.25C3.18336e-06 25.2187 0.367503 24.3356 1.1025 23.6006C1.8375 22.8656 2.72 22.4987 3.75 22.5C4.78125 22.5 5.66438 22.8675 6.39938 23.6025C7.13438 24.3375 7.50125 25.22 7.5 26.25C7.5 27.2812 7.1325 28.1644 6.3975 28.8994C5.6625 29.6344 4.78 30.0012 3.75 30ZM15 30C13.9688 30 13.0856 29.6325 12.3506 28.8975C11.6156 28.1625 11.2488 27.28 11.25 26.25C11.25 25.2187 11.6175 24.3356 12.3525 23.6006C13.0875 22.8656 13.97 22.4987 15 22.5C16.0312 22.5 16.9144 22.8675 17.6494 23.6025C18.3844 24.3375 18.7512 25.22 18.75 26.25C18.75 27.2812 18.3825 28.1644 17.6475 28.8994C16.9125 29.6344 16.03 30.0012 15 30ZM26.25 30C25.2187 30 24.3356 29.6325 23.6006 28.8975C22.8656 28.1625 22.4987 27.28 22.5 26.25C22.5 25.2187 22.8675 24.3356 23.6025 23.6006C24.3375 22.8656 25.22 22.4987 26.25 22.5C27.2812 22.5 28.1644 22.8675 28.8994 23.6025C29.6344 24.3375 30.0012 25.22 30 26.25C30 27.2812 29.6325 28.1644 28.8975 28.8994C28.1625 29.6344 27.28 30.0012 26.25 30ZM3.75 18.75C2.71875 18.75 1.83563 18.3825 1.10063 17.6475C0.365628 16.9125 -0.00124682 16.03 3.18336e-06 15C3.18336e-06 13.9688 0.367503 13.0856 1.1025 12.3506C1.8375 11.6156 2.72 11.2488 3.75 11.25C4.78125 11.25 5.66438 11.6175 6.39938 12.3525C7.13438 13.0875 7.50125 13.97 7.5 15C7.5 16.0312 7.1325 16.9144 6.3975 17.6494C5.6625 18.3844 4.78 18.7512 3.75 18.75ZM15 18.75C13.9688 18.75 13.0856 18.3825 12.3506 17.6475C11.6156 16.9125 11.2488 16.03 11.25 15C11.25 13.9688 11.6175 13.0856 12.3525 12.3506C13.0875 11.6156 13.97 11.2488 15 11.25C16.0312 11.25 16.9144 11.6175 17.6494 12.3525C18.3844 13.0875 18.7512 13.97 18.75 15C18.75 16.0312 18.3825 16.9144 17.6475 17.6494C16.9125 18.3844 16.03 18.7512 15 18.75ZM26.25 18.75C25.2187 18.75 24.3356 18.3825 23.6006 17.6475C22.8656 16.9125 22.4987 16.03 22.5 15C22.5 13.9688 22.8675 13.0856 23.6025 12.3506C24.3375 11.6156 25.22 11.2488 26.25 11.25C27.2812 11.25 28.1644 11.6175 28.8994 12.3525C29.6344 13.0875 30.0012 13.97 30 15C30 16.0312 29.6325 16.9144 28.8975 17.6494C28.1625 18.3844 27.28 18.7512 26.25 18.75ZM3.75 7.5C2.71875 7.5 1.83563 7.1325 1.10063 6.3975C0.365628 5.6625 -0.00124682 4.78 3.18336e-06 3.75C3.18336e-06 2.71875 0.367503 1.83563 1.1025 1.10063C1.8375 0.365628 2.72 -0.00124682 3.75 3.18336e-06C4.78125 3.18336e-06 5.66438 0.367503 6.39938 1.1025C7.13438 1.8375 7.50125 2.72 7.5 3.75C7.5 4.78125 7.1325 5.66438 6.3975 6.39938C5.6625 7.13438 4.78 7.50125 3.75 7.5ZM15 7.5C13.9688 7.5 13.0856 7.1325 12.3506 6.3975C11.6156 5.6625 11.2488 4.78 11.25 3.75C11.25 2.71875 11.6175 1.83563 12.3525 1.10063C13.0875 0.365628 13.97 -0.00124682 15 3.18336e-06C16.0312 3.18336e-06 16.9144 0.367503 17.6494 1.1025C18.3844 1.8375 18.7512 2.72 18.75 3.75C18.75 4.78125 18.3825 5.66438 17.6475 6.39938C16.9125 7.13438 16.03 7.50125 15 7.5ZM26.25 7.5C25.2187 7.5 24.3356 7.1325 23.6006 6.3975C22.8656 5.6625 22.4987 4.78 22.5 3.75C22.5 2.71875 22.8675 1.83563 23.6025 1.10063C24.3375 0.365628 25.22 -0.00124682 26.25 3.18336e-06C27.2812 3.18336e-06 28.1644 0.367503 28.8994 1.1025C29.6344 1.8375 30.0012 2.72 30 3.75C30 4.78125 29.6325 5.66438 28.8975 6.39938C28.1625 7.13438 27.28 7.50125 26.25 7.5Z"
          fill="currentColor"
        />
      </svg>
    </>
  );
}

export function HomeIcon({ isSelected }: IconProps) {
  return (
    <>
      <svg
        width="28"
        height="30"
        viewBox="0 0 28 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`navbar_button ${isSelected && "selected"}`}
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

export function SettingsIcon({ isSelected }: IconProps) {
  return (
    <>
      <svg
        width="31"
        height="30"
        viewBox="0 0 31 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`navbar_button navbar_settings ${isSelected && "selected"}`}
      >
        <path
          d="M10.95 30L10.35 25.2C10.025 25.075 9.7185 24.925 9.4305 24.75C9.1425 24.575 8.8615 24.3875 8.5875 24.1875L4.125 26.0625L0 18.9375L3.8625 16.0125C3.8375 15.8375 3.825 15.6685 3.825 15.5055V14.4945C3.825 14.3315 3.8375 14.1625 3.8625 13.9875L0 11.0625L4.125 3.9375L8.5875 5.8125C8.8625 5.6125 9.15 5.425 9.45 5.25C9.75 5.075 10.05 4.925 10.35 4.8L10.95 0H19.2L19.8 4.8C20.125 4.925 20.4315 5.075 20.7195 5.25C21.0075 5.425 21.2885 5.6125 21.5625 5.8125L26.025 3.9375L30.15 11.0625L26.2875 13.9875C26.3125 14.1625 26.325 14.3315 26.325 14.4945V15.5055C26.325 15.6685 26.3 15.8375 26.25 16.0125L30.1125 18.9375L25.9875 26.0625L21.5625 24.1875C21.2875 24.3875 21 24.575 20.7 24.75C20.4 24.925 20.1 25.075 19.8 25.2L19.2 30H10.95ZM15.15 20.25C16.6 20.25 17.8375 19.7375 18.8625 18.7125C19.8875 17.6875 20.4 16.45 20.4 15C20.4 13.55 19.8875 12.3125 18.8625 11.2875C17.8375 10.2625 16.6 9.75 15.15 9.75C13.675 9.75 12.431 10.2625 11.418 11.2875C10.405 12.3125 9.899 13.55 9.9 15C9.9 16.45 10.406 17.6875 11.418 18.7125C12.43 19.7375 13.674 20.25 15.15 20.25Z"
          fill="currentColor"
        />
      </svg>
    </>
  );
}
