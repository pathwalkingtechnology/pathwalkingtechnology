// lib/gtag.ts
export const GA_TRACKING_ID = 'G-1Q69KJEDRF';

declare global {
  interface Window {
    gtag: (action: string, config?: { [key: string]: any }) => void;
    dataLayer: any[];
  }
}

// Función para rastrear vistas de página
export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// Función para rastrear eventos
export const event = ({ action, category, label, value }: { 
  action: string; 
  category: string; 
  label: string; 
  value: number;
}) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
