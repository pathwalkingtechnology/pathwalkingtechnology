// lib/gtag.ts
declare global {
  interface Window {
    gtag: (action: string, config?: { [key: string]: string | number | boolean }) => void;
    dataLayer: any[];
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

if (!GA_TRACKING_ID) {
  throw new Error('GA_TRACKING_ID no está definido');
}

// Función para rastrear vistas de página
export const pageview = (url: string) => {
  if (window.gtag) {
    window.gtag('config', GA_TRACKING_ID, { page_path: url });
  }
};

// Función para rastrear eventos
export const event = ({ action, category, label, value }: { 
  action: string; 
  category: string; 
  label: string; 
  value: number;
}) => {
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
    });
  }
};
