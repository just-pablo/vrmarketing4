import { dev } from '$app/environment';
export const BASE_URL = dev ? 'http://localhost:5173' : 'https://vrmarketing4-production.up.railway.app';
//SDK LINK needs to be changed
export const CURRENT_SDK_LINK = BASE_URL + "/static/sdk/v1.1/VirtuPoster.unitypackage"
export const APP_NAME = 'VirtuPoster';
export const CONTACT_EMAIL = 'yourname@email.com';
export const DOMAIN = 'virtuposter.com';
/* WARNING!!! TERMS AND CONDITIONS AND PRIVACY POLICY 
WERE CREATED BY CHATGPT AS AN EXAMPLE ONLY. 
CONSULT A LAWYER AND DEVELOP YOUR OWN TERMS AND PRIVACY POLICY!!! */
export const TERMS_PRIVACY_CONTACT_EMAIL = 'yourname@email.com';
export const TERMS_PRIVACY_WEBSITE = 'yourdomain.com';
export const TERMS_PRIVACY_COMPANY = 'Your Company';
export const TERMS_PRIVACY_EFFECTIVE_DATE = 'January 1, 2023';
export const TERMS_PRIVACY_APP_NAME = 'Your App';
export const TERMS_PRIVACY_APP_PRICING_AND_SUBSCRIPTIONS =
	'[Details about the pricing, subscription model, refund policy]';
export const TERMS_PRIVACY_COUNTRY = 'United States';
