// Re-export master configuration from siteConfig for backwards compatibility
import { SITE_CONFIG, getWhatsAppLink, getJourneyWhatsAppLink } from '../data/siteConfig';

export const COMPANY_NAME = SITE_CONFIG.brandName;
export const TAGLINE = SITE_CONFIG.positioning;
export const SUBTAGLINE = SITE_CONFIG.tagline;

export const WHATSAPP_NUMBER = SITE_CONFIG.whatsappNumber; 
export const INSTAGRAM_HANDLE = SITE_CONFIG.instagramHandle;
export const INSTAGRAM_URL = SITE_CONFIG.instagramUrl;
export const EMAIL_ADDRESS = SITE_CONFIG.email;
export const LOCATION = SITE_CONFIG.location;

export { getWhatsAppLink };
export const getYatraWhatsAppLink = (yatraTitle: string) => getJourneyWhatsAppLink(yatraTitle);
