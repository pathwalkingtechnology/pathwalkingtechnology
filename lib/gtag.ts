declare global {
  interface Window {
    gtag: (action: string, config?: { [key: string]: string | number | boolean }) => void;
    dataLayer: (string | number | boolean)[];
  }
}

export const GA_TRACKING_ID = process.env.GA_TRACKING_ID;

if (!GA_TRACKING_ID) {
  throw new Error('GA_TRACKING_ID no está definido');
}

// Función para rastrear vistas de página
export const pageview = (url: string) => {
  window.gtag('config', { tracking_id: GA_TRACKING_ID });
  window.gtag('event', {
    action: 'pageview',
    send_to: GA_TRACKING_ID,
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
  window.gtag('event', {
    action,
    event_category: category,
    event_label: label,
    value,
  });
};
