/**
 * Utility functions for tracking conversions via Google Ads and Meta Pixel
 */

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

/**
 * Dispara um evento de conversão no Google e Meta Ads quando o usuário clica em um botão de ação.
 * 
 * @param eventName O nome da ação (ex: 'click_whatsapp', 'submit_form')
 * @param googleConversionLabel (Opcional) A label de conversão específica do Google Ads (ex: AW-18371206874/XXXXX). Se não passado, envia um evento genérico.
 */
export const trackConversion = (eventName: string, googleConversionLabel?: string) => {
  try {
    // 1. Dispara evento customizado para o Google Analytics 4 / Google Ads Global tag
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, {
        'event_category': 'Leads',
        'event_label': 'Criação de Sites',
      });
      
      // Se houver uma label específica de conversão
      if (googleConversionLabel) {
        window.gtag('event', 'conversion', {
          'send_to': googleConversionLabel
        });
      }
    } else if (window.dataLayer) {
      window.dataLayer.push({
        'event': eventName,
        'event_category': 'Leads',
        'event_label': 'Criação de Sites'
      });
    }

    // 2. Dispara evento para o Meta Pixel
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'Lead', {
        content_name: 'Criação de Sites',
        content_category: eventName
      });
    }
    
    console.log(`[Tracking] Conversão registrada: ${eventName}`);
  } catch (err) {
    console.error('Erro ao registrar conversão:', err);
  }
};
