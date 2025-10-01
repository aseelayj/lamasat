/*
  # Create quick interests table

  1. New Tables
    - `quick_interests`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `phone` (text, required)
      - `property_type` (text, required)
      - `status` (text, default 'new')
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `quick_interests` table
    - Add policy for public to insert quick interests
    - Add policy for authenticated users to read quick interests (admin access)
*/

CREATE TABLE IF NOT EXISTS quick_interests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  property_type text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE quick_interests ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit quick interests
CREATE POLICY "Anyone can submit quick interests"
  ON quick_interests
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to read all quick interests (for admin)
CREATE POLICY "Authenticated users can read all quick interests"
  ON quick_interests
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow authenticated users to update quick interest status
CREATE POLICY "Authenticated users can update quick interest status"
  ON quick_interests
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE TRIGGER update_quick_interests_updated_at 
  BEFORE UPDATE ON quick_interests 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();