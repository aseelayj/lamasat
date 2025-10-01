/*
# Fix Row Level Security Policies

1. Security Updates
   - Fix RLS policies for anonymous users to submit forms
   - Allow INSERT operations for anon role on all form tables
   - Maintain read access for authenticated users

2. Tables Updated
   - `contacts` - Allow anon INSERT
   - `interest_registrations` - Allow anon INSERT  
   - `quick_interests` - Allow anon INSERT
   - `properties` - Allow anon SELECT for available properties
   - `property_images` - Allow anon SELECT for available property images
*/

-- Drop existing policies to recreate them correctly
DROP POLICY IF EXISTS "Anyone can submit contacts" ON contacts;
DROP POLICY IF EXISTS "Authenticated users can read all contacts" ON contacts;
DROP POLICY IF EXISTS "Anyone can submit interest registrations" ON interest_registrations;
DROP POLICY IF EXISTS "Authenticated users can read all registrations" ON interest_registrations;
DROP POLICY IF EXISTS "Authenticated users can update registration status" ON interest_registrations;
DROP POLICY IF EXISTS "Anyone can submit quick interests" ON quick_interests;
DROP POLICY IF EXISTS "Authenticated users can read all quick interests" ON quick_interests;
DROP POLICY IF EXISTS "Authenticated users can update quick interest status" ON quick_interests;
DROP POLICY IF EXISTS "Anyone can read available properties" ON properties;
DROP POLICY IF EXISTS "Authenticated users can manage properties" ON properties;
DROP POLICY IF EXISTS "Authenticated users can read all properties" ON properties;
DROP POLICY IF EXISTS "Anyone can read property images" ON property_images;
DROP POLICY IF EXISTS "Authenticated users can manage property images" ON property_images;
DROP POLICY IF EXISTS "Authenticated users can read all property images" ON property_images;

-- Contacts table policies
CREATE POLICY "Allow anonymous submissions"
  ON contacts
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to read contacts"
  ON contacts
  FOR SELECT
  TO authenticated
  USING (true);

-- Interest registrations table policies
CREATE POLICY "Allow anonymous interest submissions"
  ON interest_registrations
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to read interest registrations"
  ON interest_registrations
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to update interest status"
  ON interest_registrations
  FOR UPDATE
  TO authenticated
  USING (true);

-- Quick interests table policies
CREATE POLICY "Allow anonymous quick interest submissions"
  ON quick_interests
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to read quick interests"
  ON quick_interests
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to update quick interest status"
  ON quick_interests
  FOR UPDATE
  TO authenticated
  USING (true);

-- Properties table policies
CREATE POLICY "Allow public to read available properties"
  ON properties
  FOR SELECT
  TO anon, authenticated
  USING (
    status IN ('available', 'sold', 'coming-soon')
  );

CREATE POLICY "Allow authenticated users to manage properties"
  ON properties
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Property images table policies
CREATE POLICY "Allow public to read property images"
  ON property_images
  FOR SELECT
  TO anon, authenticated
  USING (
    EXISTS (
      SELECT 1 FROM properties
      WHERE properties.id = property_images.property_id
      AND properties.status IN ('available', 'sold', 'coming-soon')
    )
  );

CREATE POLICY "Allow authenticated users to manage property images"
  ON property_images
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);