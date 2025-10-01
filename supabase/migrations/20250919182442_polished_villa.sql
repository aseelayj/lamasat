/*
  # Add property slugs for SEO-friendly URLs

  1. New Features
    - Add `slug` column to `properties` table
    - Add unique index on `slug` column
    - Update existing properties with generated slugs
  
  2. SEO Benefits
    - Unique URLs for each property
    - Better search engine indexing
    - Human-readable URLs
*/

-- Add slug column to properties table
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'properties' AND column_name = 'slug'
  ) THEN
    ALTER TABLE properties ADD COLUMN slug text;
  END IF;
END $$;

-- Create unique index on slug
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_class c
    JOIN pg_namespace n ON n.oid = c.relnamespace
    WHERE c.relname = 'properties_slug_key' AND n.nspname = 'public'
  ) THEN
    CREATE UNIQUE INDEX properties_slug_key ON properties(slug);
  END IF;
END $$;

-- Update existing properties with SEO-friendly slugs
UPDATE properties SET slug = 
  CASE title
    WHEN 'دافوديل بلس' THEN 'daffodil-plus'
    WHEN 'دافوديل' THEN 'daffodil'
    WHEN 'نارسس بلس' THEN 'narcissus-plus'
    WHEN 'نارسس فلور' THEN 'narcissus-floor'
    WHEN 'توليب بلس' THEN 'tulip-plus'
    WHEN 'توليب' THEN 'tulip'
    WHEN 'اوبال' THEN 'opal'
    WHEN 'ازدان تاور' THEN 'izdan-tower'
    WHEN 'برج العليا' THEN 'al-olaya-tower'
    WHEN 'بالاس فيلا' THEN 'palace-villa'
    WHEN 'ماي فير' THEN 'mayfair'
    WHEN 'ماي فير بلس 67' THEN 'mayfair-plus-67'
    WHEN 'هافن' THEN 'haven'
    WHEN 'واحة الأعمال' THEN 'business-oasis'
    WHEN 'A57 النخيل' THEN 'a57-palm'
    WHEN 'A58' THEN 'a58-villas'
    WHEN 'A59 حطين' THEN 'a59-hittin'
    WHEN 'A60 النخيل' THEN 'a60-palm'
    WHEN 'A62' THEN 'a62-project'
    WHEN 'A72' THEN 'a72-development'
    WHEN 'A73' THEN 'a73-residence'
    ELSE lower(
      regexp_replace(
        regexp_replace(title, '[^\w\s-]', '', 'g'),
        '\s+', '-', 'g'
      )
    )
  END
WHERE slug IS NULL;

-- Add NOT NULL constraint after setting initial values
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'properties' 
    AND column_name = 'slug' 
    AND is_nullable = 'YES'
  ) THEN
    ALTER TABLE properties ALTER COLUMN slug SET NOT NULL;
  END IF;
END $$;