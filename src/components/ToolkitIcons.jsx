import React from 'react'

// SVG Icon Components based on jaberelferkh.com toolkit icons
export const XcodeIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="56" height="56" rx="14" fill="url(#xcode-bg)"/>
    <path d="M43.84 19.82a2.5 2.5 0 0 1 .72 3.47l-7.18 11.7 5.75 10.12a2.5 2.5 0 0 1-4.35 2.47L33.85 39l-6.91 11.25a2.5 2.5 0 0 1-4.27-2.62l7.26-11.82-5.94-10.46a2.5 2.5 0 0 1 4.35-2.47l5.12 9.01 6.91-11.24a2.5 2.5 0 0 1 3.47-.73z" fill="#fff"/>
    <path d="M18.66 18.58a2.5 2.5 0 0 1 3.26-1.36l5.17 2.07a2.5 2.5 0 0 1-1.86 4.64l-5.17-2.08a2.5 2.5 0 0 1-1.4-3.27z" fill="#fff" fillOpacity=".92"/>
    <defs>
      <linearGradient id="xcode-bg" x1="10" y1="8" x2="54" y2="58" gradientUnits="userSpaceOnUse">
        <stop stopColor="#44B2FF"/>
        <stop offset="1" stopColor="#007AFF"/>
      </linearGradient>
    </defs>
  </svg>
)

export const FigmaIcon = ({ size = 24, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z" fill="#0ACF83"/>
    <path d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z" fill="#A259FF"/>
    <path d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z" fill="#F24E1E"/>
    <path d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z" fill="#FF7262"/>
    <path d="M16 12c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4v-4h4z" fill="#1ABCFE"/>
  </svg>
)

export const VSCodeIcon = ({ size = 24, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a1.001 1.001 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a1 1 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" fill="#007ACC"/>
  </svg>
)

export const AndroidStudioIcon = ({ size = 24, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm1.12-1.12L21 11.34 6.05 2.66l2.27 2.27L17.93 14.1zm-1.12-1.12l-9.62-9.62L13.69 12l-2.27 2.27z" fill="#3DDC84"/>
  </svg>
)

export const CursorIcon = ({ size = 24, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill={color}/>
  </svg>
)

export const GitHubIcon = ({ size = 24, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
)

export const ChatGPTIcon = ({ size = 24, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.62 4.76a1.2 1.2 0 0 0-1.22-.19L2.38 11.35a1.15 1.15 0 0 0 0 2.13l2.56 1.28 1.58 7.66a1.19 1.19 0 0 0 1.16.95h.08a1.2 1.2 0 0 0 1.08-.86l2.18-6.65 7.37-2.51-2.18 6.65a1.27 1.27 0 0 0 1.19 1.64 1.15 1.15 0 0 0 .95-.57l3.38-5.75 2.37-1.19a1.2 1.2 0 0 0 .68-1.1 1.23 1.23 0 0 0-.52-1.04z" fill="#10A37F"/>
  </svg>
)

export const GeminiIcon = ({ size = 24, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
)

