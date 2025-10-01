/*
  # Fix Row Level Security for Quick Interests

  1. Security Changes
    - Drop existing policies that may be conflicting
    - Create a simple, permissive INSERT policy for anonymous users
    - Ensure anonymous users can submit quick interest forms

  2. Policy Details
    - Allow all anonymous users to INSERT into quick_interests
    - No conditions - any anonymous user can submit
*/

-- Drop existing policies to start fresh
DROP POLICY IF EXISTS "Allow anonymous quick interest submissions" ON quick_interests;
DROP POLICY IF EXISTS "Allow authenticated users to read quick interests" ON quick_interests;
DROP POLICY IF EXISTS "Allow authenticated users to update quick interest status" ON quick_interests;

-- Create a simple INSERT policy for anonymous users
CREATE POLICY "Enable insert for anonymous users" 
ON quick_interests FOR INSERT 
TO anon 
WITH CHECK (true);

-- Create SELECT policy for authenticated users (admin access)
CREATE POLICY "Enable read for authenticated users" 
ON quick_interests FOR SELECT 
TO authenticated 
USING (true);

-- Create UPDATE policy for authenticated users (admin access)
CREATE POLICY "Enable update for authenticated users" 
ON quick_interests FOR UPDATE 
TO authenticated 
USING (true);