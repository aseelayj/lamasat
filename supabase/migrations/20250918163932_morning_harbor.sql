/*
  # Create properties table

  1. New Tables
    - `properties`
      - `id` (uuid, primary key)
      - `title` (text, required)
      - `subtitle` (text, optional)
      - `description` (text, optional)
      - `location` (text, optional)
      - `latitude` (numeric, optional)
      - `longitude` (numeric, optional)
      - `price` (numeric, optional)
      - `price_per_meter` (numeric, optional)
      - `status` (text, default 'available')
      - `accepts_financing` (boolean, default false)
      - `completion_date` (text, optional)
      - `total_area` (numeric, optional)
      - `built_area` (numeric, optional)
      - `bedrooms` (integer, optional)
      - `bathrooms` (integer, optional)
      - `parking_spaces` (integer, optional)
      - `construction_year` (integer, optional)
      - `amenities` (text[], optional)
      - `main_image` (text, optional)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `properties` table
    - Add policy for public to read available properties
    - Add policy for authenticated users to manage properties (admin access)
*/

CREATE TABLE IF NOT EXISTS properties (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  subtitle text,
  description text,
  location text,
  latitude numeric,
  longitude numeric,
  price numeric,
  price_per_meter numeric,
  status text DEFAULT 'available',
  accepts_financing boolean DEFAULT false,
  completion_date text,
  total_area numeric,
  built_area numeric,
  bedrooms integer,
  bathrooms integer,
  parking_spaces integer,
  construction_year integer,
  amenities text[],
  main_image text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE properties ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read available properties
CREATE POLICY "Anyone can read available properties"
  ON properties
  FOR SELECT
  TO anon
  USING (status = 'available' OR status = 'sold' OR status = 'coming-soon');

-- Allow authenticated users to read all properties
CREATE POLICY "Authenticated users can read all properties"
  ON properties
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow authenticated users to manage properties (admin access)
CREATE POLICY "Authenticated users can manage properties"
  ON properties
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE TRIGGER update_properties_updated_at 
  BEFORE UPDATE ON properties 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();