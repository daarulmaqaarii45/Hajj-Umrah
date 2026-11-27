type IconProps = { size?: number; width?: number; height?: number; color?: string };

export function Logo() {
  return (
    <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M13 80V48C13 28 29 13 50 5C71 13 87 28 87 48V80" fill="none" stroke="#c8a24a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 80V50C20 33 33 20 50 13C67 20 80 33 80 50V80" fill="none" stroke="#c8a24a" strokeWidth="1.2" strokeOpacity=".7" />
      <g fill="#0a3d2a">
        <path d="M36 66C36 50 42 42 50 39C58 42 64 50 64 66Z" />
        <rect x="49.2" y="30" width="1.6" height="9" />
        <path d="M52.6 28.2A3.4 3.4 0 1 1 48.4 24.2A2.6 2.6 0 1 0 52.6 28.2Z" fill="#c8a24a" />
        <rect x="23" y="42" width="5.4" height="24" />
        <path d="M22.4 42L25.7 34L29 42Z" />
        <rect x="71.6" y="42" width="5.4" height="24" />
        <path d="M71 42L74.3 34L77.6 42Z" />
        <path d="M28.4 66C28.4 58 32 54 36 54C40 54 43 58 43 66Z" fillOpacity=".92" />
        <path d="M57 66C57 58 60 54 64 54C68 54 71.6 58 71.6 66Z" fillOpacity=".92" />
        <rect x="23" y="66" width="54" height="8" />
        <path d="M18 74C26 70 32 76 38 76L38 80L18 80Z" />
        <path d="M82 74C74 70 68 76 62 76L62 80L82 80Z" />
      </g>
      <path d="M6 88C28 76 52 94 94 72" fill="none" stroke="#c8a24a" strokeWidth="3" strokeLinecap="round" />
      <path d="M10 94C38 86 62 98 90 82" fill="none" stroke="#d9bb74" strokeWidth="1.6" strokeLinecap="round" strokeOpacity=".85" />
    </svg>
  );
}

export function UserIcon({ size = 20, color = "#fff" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <circle cx="12" cy="7.5" r="4.3" />
      <path d="M3.8 21.5C3.8 16.9 7.4 14.2 12 14.2C16.6 14.2 20.2 16.9 20.2 21.5Z" />
    </svg>
  );
}

export function ChevronDown({ size = 12, color = "#171717", width = 3 }: IconProps & { width?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 9l7 7 7-7" />
    </svg>
  );
}

export function ArrowRight({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 12h16" />
      <path d="M13 5l7 7-7 7" />
    </svg>
  );
}

export function PlayIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#0a3d2a" aria-hidden="true">
      <path d="M8 5.2L19 12L8 18.8Z" />
    </svg>
  );
}

export function KaabaIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ flex: "none" }}>
      <polygon points="5,17 30,6 55,17 30,29" fill="#0a3d2a" />
      <polygon points="5,17 30,29 30,56 5,45" fill="#0a3d2a" />
      <polygon points="30,29 55,17 55,45 30,56" fill="#0a3d2a" fillOpacity=".86" />
      <path d="M5 25.5L30 37.5L55 25.5" fill="none" stroke="#c8a24a" strokeWidth="2.4" />
      <path d="M30 37.5V56" stroke="#c8a24a" strokeWidth="2" />
      <path d="M14 38.5L22 42.5V52L14 48Z" fill="#c8a24a" fillOpacity=".9" />
    </svg>
  );
}

export function CalendarIcon() {
  return (
    <svg width="40" height="42" viewBox="0 0 40 42" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ flex: "none" }}>
      <rect x="2" y="6" width="36" height="34" rx="5" fill="none" stroke="#0a3d2a" strokeWidth="3" />
      <path d="M2 16H38" stroke="#0a3d2a" strokeWidth="3" />
      <path d="M11 2V10M29 2V10" stroke="#0a3d2a" strokeWidth="3.4" strokeLinecap="round" />
      <g fill="#0a3d2a">
        <rect x="8" y="21" width="5" height="4" rx="1" />
        <rect x="17.5" y="21" width="5" height="4" rx="1" />
        <rect x="27" y="21" width="5" height="4" rx="1" />
        <rect x="8" y="28" width="5" height="4" rx="1" />
        <rect x="17.5" y="28" width="5" height="4" rx="1" />
        <rect x="27" y="28" width="5" height="4" rx="1" />
      </g>
    </svg>
  );
}

export function PeopleIcon() {
  return (
    <svg width="50" height="40" viewBox="0 0 50 40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ flex: "none" }}>
      <g fill="#0a3d2a">
        <circle cx="25" cy="10" r="7.2" />
        <path d="M11.5 34C11.5 24.6 17.4 20 25 20C32.6 20 38.5 24.6 38.5 34Z" />
        <circle cx="8.5" cy="14.5" r="5.2" />
        <path d="M0 33C0 26 3.6 22 9 22C10.6 22 12 22.3 13.2 23C10.6 25.6 9.5 29 9.5 33Z" />
        <circle cx="41.5" cy="14.5" r="5.2" />
        <path d="M50 33C50 26 46.4 22 41 22C39.4 22 38 22.3 36.8 23C39.4 25.6 40.5 29 40.5 33Z" />
      </g>
    </svg>
  );
}

export function SearchIcon({ size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="10.5" cy="10.5" r="7" />
      <path d="M16 16L21 21" />
    </svg>
  );
}

const goldStroke = {
  fill: "none",
  stroke: "#c8a24a",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ShieldCheckIcon() {
  return (
    <svg width="50" height="58" viewBox="0 0 24 24" {...goldStroke} strokeWidth="1.15" aria-hidden="true">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function HeadsetIcon() {
  return (
    <svg width="56" height="58" viewBox="0 0 24 24" {...goldStroke} strokeWidth="1.15" aria-hidden="true">
      <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
      <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
    </svg>
  );
}

export function PlaneIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 24 24" {...goldStroke} strokeWidth="1.1" aria-hidden="true">
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
  );
}

export function HandshakeIcon() {
  return (
    <svg width="76" height="62" viewBox="0 0 24 24" {...goldStroke} strokeWidth="1" aria-hidden="true">
      <path d="m11 17 2 2a1 1 0 1 0 3-3" />
      <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
      <path d="m21 3 1 11h-2" />
      <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
      <path d="M3 4h8" />
    </svg>
  );
}
