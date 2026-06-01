import type { ReactNode, SVGProps } from 'react';

interface Props extends Omit<SVGProps<SVGSVGElement>, 'stroke'> {
  name: string;
  size?: number;
  stroke?: number;
}

const PATHS: Record<string, ReactNode> = {
  'home': <><path d="M3 12 12 4l9 8" /><path d="M5 10v10h14V10" /></>,
  'grid': <><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></>,
  'wallet': <><path d="M3 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3" /><path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3" /><path d="M16 13h5v-3h-5a1.5 1.5 0 0 0 0 3z" /></>,
  'file-text': <><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><path d="M14 3v6h6" /><path d="M8 13h8M8 17h6" /></>,
  'bell': <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></>,
  'user': <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
  'search': <><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></>,
  'sun': <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2 12h2M20 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></>,
  'moon': <><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></>,
  'menu': <><path d="M3 6h18M3 12h18M3 18h18" /></>,
  'log-out': <><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><path d="M16 17l5-5-5-5" /><path d="M21 12H9" /></>,
  'chevron-right': <><path d="m9 6 6 6-6 6" /></>,
  'chevron-down': <><path d="m6 9 6 6 6-6" /></>,
  'plus': <><path d="M12 5v14M5 12h14" /></>,
  'star': <><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor" stroke="none" /></>,
  'alert-triangle': <><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><path d="M12 9v4M12 17h.01" /></>,
  'id-card': <><rect x="2" y="5" width="20" height="14" rx="2" /><circle cx="8" cy="12" r="2.5" /><path d="M14 11h5M14 14h3" /></>,
  'check-circle': <><circle cx="12" cy="12" r="9" /><path d="m8 12 3 3 5-6" /></>,
  'info': <><circle cx="12" cy="12" r="9" /><path d="M12 8v0M12 11v6" strokeLinecap="round" /></>,
  'clock': <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  'arrow-right': <><path d="M5 12h14M13 6l6 6-6 6" /></>,
  'car': <><path d="M4 17h16l-2-6H6l-2 6z" /><path d="M4 17v3M20 17v3M7 14h.01M17 14h.01" /></>,
  'heart-pulse': <><path d="M19.5 12.572 12 20l-7.5-7.428A5 5 0 1 1 12 6.001a5 5 0 1 1 7.5 6.57z" /><path d="M3.22 12H8l2-4 3 6 2-3h5.78" /></>,
  'book-open': <><path d="M2 4h7a2 2 0 0 1 2 2v15M22 4h-7a2 2 0 0 0-2 2v15" /><path d="M2 4v14h7M22 4v14h-7" /></>,
  'users': <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>,
  'file-check': <><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><path d="M14 3v6h6" /><path d="m9 15 2 2 4-4" /></>,
  'syringe': <><path d="m18 2 4 4M17 3l4 4M15 5l4 4" /><path d="m11 9 8 8-3 3-8-8-2 2-3-3 2-2-2-2 3-3 2 2 3-3" /></>,
  'graduation-cap': <><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c0 1.5 2 3 6 3s6-1.5 6-3v-5" /></>,
  'briefcase': <><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><path d="M2 13h20" /></>,
  'qr': <><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><path d="M14 14h3v3h-3zM18 14h3v3M14 18h3v3M18 21h3v-3" /></>,
  'calendar': <><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></>,
  'more-v': <><circle cx="12" cy="5" r="1.5" fill="currentColor" /><circle cx="12" cy="12" r="1.5" fill="currentColor" /><circle cx="12" cy="19" r="1.5" fill="currentColor" /></>,
  'shield-check': <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></>,
  'sparkles': <><path d="m12 3 1.9 4.6L18 9.5l-4.1 1.9L12 16l-1.9-4.6L6 9.5l4.1-1.9zM19 14l.9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9zM5 4l.9 2.1L8 7l-2.1.9L5 10l-.9-2.1L2 7l2.1-.9z" fill="currentColor" stroke="none" /></>,
  'eye': <><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></>,
  'download': <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" /></>,
  'share': <><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="m8.59 13.51 6.83 3.98M15.41 6.51l-6.82 3.98" /></>,
  'accessibility': <><circle cx="12" cy="4" r="2" /><path d="M19 13v-2a7 7 0 0 0-14 0v2M12 8v8M9 16l-2 5M15 16l2 5" /></>,
  'leaf': <><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" /><path d="M2 21c0-3 1.85-5.36 5.08-6" /></>,
  'droplet': <><path d="M12 2.69 17.66 8.35a8 8 0 1 1-11.31 0z" /></>,
  'book': <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></>,
  'layers': <><path d="m12 2 9 5-9 5-9-5 9-5z" /><path d="m3 12 9 5 9-5M3 17l9 5 9-5" /></>,
};

export function Ic({ name, size = 18, stroke = 1.75, ...rest }: Props) {
  const node = PATHS[name];
  if (!node) return null;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      {node}
    </svg>
  );
}
