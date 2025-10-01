/*
  # Fix RLS policy for interest_registrations table

  1. Security Changes
    - Drop existing policies that may be conflicting
    - Create simple INSERT policy for anonymous users
    - Allow authenticated users to read/update for admin purposes

  This fixes the RLS violation error when submitting interest registration forms.
*/

-- Drop existing policies that may be causing conflicts
DROP POLICY IF EXISTS "Allow anonymous interest submissions" ON interest_registrations;
DROP POLICY IF EXISTS "Allow authenticated users to read interest registrations" ON interest_registrations;
DROP POLICY IF EXISTS "Allow authenticated users to update interest status" ON interest_registrations;

-- Create simple INSERT policy for anonymous users
CREATE POLICY "Allow public insert" 
  ON interest_registrations 
  FOR INSERT 
  WITH CHECK (true);

-- Allow authenticated users to read all registrations (for admin)
CREATE POLICY "Allow authenticated read" 
  ON interest_registrations 
  FOR SELECT 
  TO authenticated 
  USING (true);

-- Allow authenticated users to update registrations (for admin)
CREATE POLICY "Allow authenticated update" 
  ON interest_registrations 
  FOR UPDATE 
  TO authenticated 
  USING (true);