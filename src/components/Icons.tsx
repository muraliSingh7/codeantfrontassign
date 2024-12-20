// src/components/Navbar/Icons.tsx
import React from "react";
interface IconProps {
  className?: string;
}

export const IconHome: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
  </svg>
);

export const IconCode: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

export const IconCloud: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
  </svg>
);

export const IconBook: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
  </svg>
);

export const IconSettings: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </svg>
);

export const IconPhone: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

export const IconLogout: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
    <polyline points="16 17 21 12 16 7"></polyline>
    <line x1="21" y1="12" x2="9" y2="12"></line>
  </svg>
);

export const IconMenu: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 448 512"
  >
    <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
  </svg>
);

export const IconClose: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 384 512"
    className={className}
  >
    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
  </svg>
);

export const IconRefresh: React.FC<IconProps> = ({ className }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.9609 10.4102C16.418 10.5508 16.6641 11.0078 16.5234 11.4648C15.5391 14.8047 12.4453 17.125 8.96484 17.125C6.1875 17.125 3.62109 15.6133 2.21484 13.2578V16.8438C2.21484 17.3359 1.86328 17.6875 1.37109 17.6875C0.914062 17.6875 0.527344 17.3359 0.527344 16.8438V11.2188C0.527344 10.7617 0.914062 10.375 1.37109 10.375H6.99609C7.48828 10.375 7.83984 10.7617 7.83984 11.2188C7.83984 11.7109 7.45312 12.0625 6.99609 12.0625H3.44531C4.5 14.1016 6.60938 15.4375 8.96484 15.4375C11.707 15.4375 14.168 13.6094 14.9062 10.9727C15.0469 10.5156 15.5039 10.2695 15.9609 10.4102ZM16.5938 0.8125C17.0508 0.8125 17.4375 1.19922 17.4375 1.65625V7.28125C17.4375 7.77344 17.0508 8.125 16.5938 8.125H10.9688C10.4766 8.125 10.125 7.77344 10.125 7.28125C10.125 6.82422 10.4766 6.4375 10.9688 6.4375H14.4844C13.4297 4.43359 11.3203 3.0625 9 3.0625C6.25781 3.0625 3.79688 4.92578 3.02344 7.52734C2.91797 7.98438 2.46094 8.23047 2.00391 8.08984C1.54688 7.98438 1.30078 7.49219 1.40625 7.07031C2.39062 3.73047 5.51953 1.375 9 1.375C11.7773 1.375 14.3438 2.92188 15.75 5.27734V1.65625C15.75 1.19922 16.1016 0.8125 16.5938 0.8125Z"
      fill="#414651"
    />
  </svg>
);

export const IconAdd: React.FC<IconProps> = ({ className }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.1875 8.25C15.1875 8.74219 14.8008 9.09375 14.3438 9.09375H8.71875V14.7188C8.71875 15.2109 8.33203 15.5977 7.875 15.5977C7.38281 15.5977 7.03125 15.2109 7.03125 14.7188V9.09375H1.40625C0.914062 9.09375 0.5625 8.74219 0.5625 8.28516C0.5625 7.79297 0.914062 7.40625 1.40625 7.40625H7.03125V1.78125C7.03125 1.32422 7.38281 0.972656 7.875 0.972656C8.33203 0.972656 8.71875 1.32422 8.71875 1.78125V7.40625H14.3438C14.8008 7.40625 15.1875 7.79297 15.1875 8.25Z"
      fill="white"
    />
  </svg>
);

export const IconUparrow: React.FC<IconProps> = ({ className }) => (
  <svg
    width="25"
    height="25"
    className={className}
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.83325 10.6567L12.8333 6.65674L16.8333 10.6567"
      stroke="#0049C6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.8333 6.65674L12.8333 16.9858"
      stroke="#0049C6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconPieChart: React.FC<IconProps> = ({ className }) => (
  <svg
    width="57"
    height="57"
    className={className}
    viewBox="0 0 57 57"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse
      cx="28.8333"
      cy="28.5883"
      rx="28"
      ry="28.3832"
      fill="#9D90FA"
      fillOpacity="0.25"
    />
    <path
      d="M38.4336 27.7545H28.6555V17.8425C28.6555 17.7206 28.5571 17.6208 28.4368 17.6208H27.7258C26.2911 17.6193 24.8701 17.905 23.5445 18.4615C22.219 19.018 21.0148 19.8344 20.0012 20.8638C19.0033 21.8723 18.2083 23.0678 17.6606 24.384C17.0918 25.7505 16.802 27.2001 16.802 28.6969C16.802 30.1936 17.0918 31.6405 17.6606 33.007C18.2102 34.3236 18.9977 35.5099 20.0012 36.5272C21.0047 37.5444 22.1723 38.3427 23.4739 38.8999C24.8196 39.4786 26.2668 39.7756 27.7286 39.773C29.1633 39.7745 30.5843 39.4887 31.9099 38.9322C33.2354 38.3757 34.4396 37.5593 35.4532 36.53C36.4567 35.5127 37.2442 34.3292 37.7938 33.0098C38.3647 31.6457 38.6577 30.1787 38.6551 28.6969V27.9762C38.6524 27.8542 38.554 27.7545 38.4336 27.7545ZM40.8372 26.2161L40.7661 25.4345C40.5336 22.8844 39.418 20.4785 37.6188 18.663C35.8213 16.8424 33.4525 15.7158 30.9223 15.4782L30.1485 15.4061C30.02 15.395 29.9106 15.4948 29.9106 15.6251V26.2605C29.9106 26.3824 30.009 26.4822 30.1293 26.4822L40.6184 26.4545C40.7469 26.4517 40.8481 26.3436 40.8372 26.2161Z"
      fill="#9D90FA"
    />
  </svg>
);
