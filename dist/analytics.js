// Supabase Analytics - Tracks all user interactions
// Tracks: image uploads and convert button clicks

// Supabase configuration
const SUPABASE_URL = 'https://ysuhexvvgjoizrcdrxso.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlzdWhleHZ2Z2pvaXpyY2RyeHNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI2MDQzODksImV4cCI6MjA3ODE4MDM4OX0.0UFYz-xd_QmUEdVcKWqRo6D4QcwvAmlKDKSdu7M4ENA';

// Simple Supabase client
const supabase = {
    from: (table) => ({
        insert: async (data) => {
            try {
                const response = await fetch(`${SUPABASE_URL}/rest/v1/${table}`, {
                    method: 'POST',
                    headers: {
                        'apikey': SUPABASE_ANON_KEY,
                        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                        'Content-Type': 'application/json',
                        'Prefer': 'return=minimal'
                    },
                    body: JSON.stringify(data)
                });
                return { data: response.ok ? data : null, error: response.ok ? null : await response.json() };
            } catch (error) {
                return { data: null, error };
            }
        }
    })
};

const LocalAnalytics = window.LocalAnalytics = {
    async track(eventType, metadata = {}) {
        try {
            const today = new Date().toISOString().split('T')[0];
            const page = window.location.pathname;
            const referrer = document.referrer ? new URL(document.referrer).hostname : 'direct';

            const { error } = await supabase.from('converter_analytics').insert({
                date: today,
                event_type: eventType,
                page: page,
                referrer: referrer,
                ...metadata,
                count: 1
            });

            if (error) {
                console.debug('Analytics error:', error);
            } else {
                console.debug('Analytics tracked:', eventType);
            }
        } catch (error) {
            // Fail silently - analytics should never break the site
            console.debug('Analytics tracking failed:', error);
        }
    },

    imageUpload(fileCount = 1) {
        this.track('image_upload', {
            file_count: fileCount
        });
    },

    convertClick(formatFrom = null, formatTo = null) {
        this.track('convert_click', {
            format_from: formatFrom,
            format_to: formatTo
        });
    },

    pageView() {
        this.track('page_view');
    }
};
