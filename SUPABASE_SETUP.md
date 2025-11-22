# Supabase Analytics Setup

## 1. Create Supabase Project (if you don't have one)

1. Go to [supabase.com](https://supabase.com)
2. Sign in or create account
3. Click "New Project"
4. Fill in:
   - Name: `converter-analytics` (or any name)
   - Database Password: (generate strong password)
   - Region: Choose closest to you
5. Wait for project to be created (~2 minutes)

## 2. Create Analytics Table

1. In your Supabase project, go to **SQL Editor**
2. Click **New Query**
3. Paste this SQL and click **Run**:

```sql
-- Create converter_analytics table
CREATE TABLE converter_analytics (
    id BIGSERIAL PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    date DATE NOT NULL,
    event_type TEXT NOT NULL,
    page TEXT,
    referrer TEXT,
    file_count INTEGER,
    format_from TEXT,
    format_to TEXT,
    count INTEGER DEFAULT 1
);

-- Create index for faster queries
CREATE INDEX idx_converter_analytics_date ON converter_analytics(date DESC);
CREATE INDEX idx_converter_analytics_event_type ON converter_analytics(event_type);

-- Enable Row Level Security (RLS)
ALTER TABLE converter_analytics ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public inserts (for tracking)
CREATE POLICY "Allow public inserts" ON converter_analytics
    FOR INSERT
    TO anon
    WITH CHECK (true);

-- Create policy to allow public reads (for stats viewer)
CREATE POLICY "Allow public reads" ON converter_analytics
    FOR SELECT
    TO anon
    USING (true);
```

## 3. Get Your Supabase Credentials

1. In Supabase, go to **Project Settings** (gear icon)
2. Go to **API** section
3. Copy these values:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **anon/public key** (long string starting with `eyJ...`)

## 4. Update Your Code

### Update `public/analytics.js`:

Replace lines 5-6:
```javascript
const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';
```

With your actual values:
```javascript
const SUPABASE_URL = 'https://xxxxx.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGci...your-actual-key...';
```

### Update `stats-viewer.html`:

Replace lines 260-261 with the same values.

## 5. Test It!

1. Build your project: `npm run build`
2. Open `dist/index.html` in browser
3. Upload an image and click convert
4. Check Supabase → Table Editor → `converter_analytics` to see the data!
5. Open `stats-viewer.html` to see the dashboard

## Optional: Use Same Supabase as Inflaatio

If you want to reuse your Inflaatio Supabase project:

1. Use the same URL and anon key from Inflaatio
2. Just create the new table (Step 2 above)
3. Both projects will share the same Supabase project but have separate tables

---

## Troubleshooting

**No data appearing?**
- Check browser console for errors
- Verify Supabase URL and key are correct
- Check Supabase → Table Editor to see if rows are being inserted
- Make sure RLS policies are enabled (Step 2)

**CORS errors?**
- This shouldn't happen with Supabase, but if it does:
- Go to Supabase → Project Settings → API → CORS
- Make sure your domain is allowed
