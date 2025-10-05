/// <reference types="vite/client" />

interface CookieConsentClass {
  showCookieSettings(): void;
}

interface Window {
  CookieConsent?: CookieConsentClass;
}
