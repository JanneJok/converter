// GDPR Cookie Consent Manager
// Universaali cookie-banneri kaikille sivuille

class CookieConsent {
    constructor() {
        this.COOKIE_NAME = 'image_converter_cookie_consent';
        this.ANALYTICS_ACCEPTED = 'analytics_accepted';
        this.COOKIE_DURATION = 365; // days
        this.GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your Google Analytics ID

        this.init();
    }

    init() {
        // Check if consent has been given
        const consent = this.getCookieConsent();

        if (!consent) {
            this.showCookieBanner();
        } else {
            // If analytics accepted, load Google Analytics
            if (consent.analytics) {
                this.loadGoogleAnalytics();
            }
        }

        // Listen for custom events for cookie settings changes
        document.addEventListener('updateCookieSettings', (e) => {
            this.updateConsent(e.detail);
        });
    }

    getCookieConsent() {
        const cookie = this.getCookie(this.COOKIE_NAME);
        if (cookie) {
            try {
                return JSON.parse(cookie);
            } catch (e) {
                console.warn('Cookie consent parsing failed');
                return null;
            }
        }
        return null;
    }

    setCookieConsent(consent) {
        const consentData = {
            analytics: consent.analytics || false,
            necessary: true, // Always true
            timestamp: new Date().toISOString()
        };

        this.setCookie(this.COOKIE_NAME, JSON.stringify(consentData), this.COOKIE_DURATION);

        // If analytics accepted, load Google Analytics
        if (consentData.analytics) {
            this.loadGoogleAnalytics();
        }

        return consentData;
    }

    showCookieBanner() {
        // Create banner element
        const banner = this.createCookieBanner();
        document.body.appendChild(banner);

        // Animate in
        setTimeout(() => {
            banner.classList.add('show');
        }, 100);
    }

    hideCookieBanner() {
        const banner = document.getElementById('cookieConsentBanner');
        if (banner) {
            banner.classList.remove('show');
            setTimeout(() => {
                if (banner.parentNode) {
                    banner.parentNode.removeChild(banner);
                }
            }, 300);
        }
    }

    createCookieBanner() {
        const banner = document.createElement('div');
        banner.id = 'cookieConsentBanner';
        banner.className = 'cookie-consent-banner';
        
        banner.innerHTML = `
            <div class="cookie-banner-content">
                <div class="cookie-banner-text">
                    <div class="cookie-banner-icon">🍪</div>
                    <div class="cookie-banner-info">
                        <p class="cookie-banner-title">Cookie Usage</p>
                        <p>We use necessary cookies to ensure site functionality. Analytics cookies help improve user experience.</p>
                    </div>
                </div>
                <div class="cookie-banner-actions">
                    <button class="cookie-btn cookie-btn-secondary" id="cookieSettings">
                        Settings
                    </button>
                    <button class="cookie-btn cookie-btn-decline" id="cookieDecline">
                        Decline Optional
                    </button>
                    <button class="cookie-btn cookie-btn-accept" id="cookieAccept">
                        Accept All
                    </button>
                </div>
            </div>
        `;
        
        // Lisää event listenerit
        banner.querySelector('#cookieAccept').addEventListener('click', () => {
            this.acceptAll();
        });

        banner.querySelector('#cookieDecline').addEventListener('click', () => {
            this.declineOptional();
        });

        banner.querySelector('#cookieSettings').addEventListener('click', () => {
            this.showCookieSettings();
        });

        return banner;
    }

    showCookieSettings() {
        const modal = this.createSettingsModal();
        document.body.appendChild(modal);
        
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    }

    createSettingsModal() {
        const modal = document.createElement('div');
        modal.id = 'cookieSettingsModal';
        modal.className = 'cookie-settings-modal';
        
        modal.innerHTML = `
            <div class="cookie-modal-overlay"></div>
            <div class="cookie-modal-content">
                <div class="cookie-modal-header">
                    <h2>Cookie Settings</h2>
                    <button class="cookie-modal-close" id="closeSettingsModal">&times;</button>
                </div>

                <div class="cookie-modal-body">
                    <p class="cookie-modal-description">
                        You can manage your cookie settings below. Necessary cookies are always enabled to ensure basic site functionality.
                    </p>

                    <div class="cookie-categories">
                        <div class="cookie-category">
                            <div class="cookie-category-header">
                                <div class="cookie-category-info">
                                    <h4>Necessary Cookies</h4>
                                    <p>These cookies are essential for basic site functionality.</p>
                                </div>
                                <div class="cookie-toggle">
                                    <input type="checkbox" id="necessaryCookies" checked disabled>
                                    <label for="necessaryCookies" class="toggle-label">
                                        <span class="toggle-slider"></span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="cookie-category">
                            <div class="cookie-category-header">
                                <div class="cookie-category-info">
                                    <h4>Analytics Cookies</h4>
                                    <p>Google Analytics helps us understand site usage and improve our service.</p>
                                </div>
                                <div class="cookie-toggle">
                                    <input type="checkbox" id="analyticsCookies">
                                    <label for="analyticsCookies" class="toggle-label">
                                        <span class="toggle-slider"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="cookie-modal-actions">
                        <button class="cookie-btn cookie-btn-secondary" id="saveSettingsDecline">
                            Save Settings
                        </button>
                        <button class="cookie-btn cookie-btn-accept" id="saveSettingsAccept">
                            Accept Settings
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        // Event listenerit
        modal.querySelector('#closeSettingsModal').addEventListener('click', () => {
            this.hideSettingsModal();
        });
        
        modal.querySelector('.cookie-modal-overlay').addEventListener('click', () => {
            this.hideSettingsModal();
        });
        
        modal.querySelector('#saveSettingsAccept').addEventListener('click', () => {
            this.saveSettings();
        });
        
        modal.querySelector('#saveSettingsDecline').addEventListener('click', () => {
            this.saveSettings();
        });
        
        // FIX: Set current cookie state in checkboxes
        setTimeout(() => {
            this.setCurrentCookieStates(modal);
        }, 50);

        return modal;
    }

    // NEW FUNCTION: Sets checkbox state according to current cookie settings
    setCurrentCookieStates(modal) {
        const consent = this.getCookieConsent();
        const analyticsCheckbox = modal.querySelector('#analyticsCookies');

        console.log('Setting cookie states. Current consent:', consent);

        if (analyticsCheckbox) {
            // Set analytics checkbox according to current consent
            analyticsCheckbox.checked = consent && consent.analytics;
            console.log('Analytics checkbox set to:', analyticsCheckbox.checked);

            // Force CSS update by adding/removing checked attribute
            if (analyticsCheckbox.checked) {
                analyticsCheckbox.setAttribute('checked', 'checked');
            } else {
                analyticsCheckbox.removeAttribute('checked');
            }

            // Trigger change event to ensure CSS updates
            analyticsCheckbox.dispatchEvent(new Event('change'));
        }
    }

    hideSettingsModal() {
        const modal = document.getElementById('cookieSettingsModal');
        if (modal) {
            modal.classList.remove('show');
            setTimeout(() => {
                if (modal.parentNode) {
                    modal.parentNode.removeChild(modal);
                }
            }, 300);
        }
    }

    acceptAll() {
        const consent = this.setCookieConsent({
            analytics: true
        });
        this.hideCookieBanner();
        this.showConsentNotification('All cookies accepted');

        // Trigger event for other applications
        this.triggerConsentEvent(consent);
    }

    declineOptional() {
        const consent = this.setCookieConsent({
            analytics: false
        });
        this.hideCookieBanner();
        this.showConsentNotification('Only necessary cookies accepted');

        // Trigger event
        this.triggerConsentEvent(consent);
    }

    saveSettings() {
        const analyticsCheckbox = document.getElementById('analyticsCookies');
        const analyticsAccepted = analyticsCheckbox ? analyticsCheckbox.checked : false;

        console.log('Saving settings. Analytics accepted:', analyticsAccepted);

        const consent = this.setCookieConsent({
            analytics: analyticsAccepted
        });

        this.hideSettingsModal();
        this.hideCookieBanner();

        const message = analyticsAccepted ?
            'Cookie settings saved - Analytics enabled' :
            'Cookie settings saved - Only necessary';
        this.showConsentNotification(message);

        // Trigger event
        this.triggerConsentEvent(consent);
    }

    showConsentNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'cookie-notification';
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    triggerConsentEvent(consent) {
        const event = new CustomEvent('cookieConsentUpdated', {
            detail: consent
        });
        document.dispatchEvent(event);
    }

    updateConsent(newConsent) {
        const currentConsent = this.getCookieConsent();
        if (currentConsent) {
            const updatedConsent = { ...currentConsent, ...newConsent };
            this.setCookieConsent(updatedConsent);
        }
    }

    loadGoogleAnalytics() {
        // Check if already loaded
        if (window.gtag || document.querySelector(`script[src*="googletagmanager.com/gtag/js?id=${this.GA_MEASUREMENT_ID}"]`)) {
            console.log('Google Analytics already loaded');
            return;
        }

        console.log('Loading Google Analytics...');

        // Load Google Analytics
        const script1 = document.createElement('script');
        script1.async = true;
        script1.src = `https://www.googletagmanager.com/gtag/js?id=${this.GA_MEASUREMENT_ID}`;
        document.head.appendChild(script1);

        // Initialize gtag
        const script2 = document.createElement('script');
        script2.textContent = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${this.GA_MEASUREMENT_ID}', {
                anonymize_ip: true,
                cookie_flags: 'SameSite=Strict;Secure'
            });
        `;
        document.head.appendChild(script2);

        // Set global gtag function
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        window.gtag = gtag;

        console.log('Google Analytics loaded with privacy settings');
    }

    // Utility methods
    setCookie(name, value, days) {
        const expires = new Date();
        expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Strict;Secure`;
    }

    getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    // Public API methods
    static getInstance() {
        if (!window.cookieConsentInstance) {
            window.cookieConsentInstance = new CookieConsent();
        }
        return window.cookieConsentInstance;
    }

    static hasAnalyticsConsent() {
        const instance = CookieConsent.getInstance();
        const consent = instance.getCookieConsent();
        return consent && consent.analytics;
    }

    static updateCookieSettings(newSettings) {
        const event = new CustomEvent('updateCookieSettings', {
            detail: newSettings
        });
        document.dispatchEvent(event);
    }

    static showCookieSettings() {
        const instance = CookieConsent.getInstance();
        instance.showCookieSettings();
    }
}

// Auto-init when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        CookieConsent.getInstance();
    });
} else {
    CookieConsent.getInstance();
}

// Export for use in other scripts
window.CookieConsent = CookieConsent;