/*
  # Create interest registrations table

  1. New Tables
    - `interest_registrations`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `phone` (text, required) 
      - `email` (text, optional)
      - `property_type` (text, required)
      - `budget` (text, required)
      - `location` (text, optional)
      - `bedrooms` (text, optional)
      - `timeframe` (text, optional)
      - `financing_needed` (text, optional)
      - `additional_info` (text, optional)
      - `status` (text, default 'new')
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `interest_registrations` table
    - Add policy for public to insert registrations
    - Add policy for authenticated users to read registrations (admin access)
*/

CREATE TABLE IF NOT EXISTS interest_registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text,
  property_type text NOT NULL,
  budget text NOT NULL,
  location text,
  bedrooms text,
  timeframe text,
  financing_needed text,
  additional_info text,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE interest_registrations ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit interest registrations
CREATE POLICY "Anyone can submit interest registrations"
  ON interest_registrations
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to read all registrations (for admin)
CREATE POLICY "Authenticated users can read all registrations"
  ON interest_registrations
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow authenticated users to update registration status
CREATE POLICY "Authenticated users can update registration status"
  ON interest_registrations
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE TRIGGER update_interest_registrations_updated_at 
  BEFORE UPDATE ON interest_registrations 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();