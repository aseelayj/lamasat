/*
  # Create property images table

  1. New Tables
    - `property_images`
      - `id` (uuid, primary key)
      - `property_id` (uuid, foreign key to properties)
      - `url` (text, required)
      - `caption` (text, optional)
      - `sort_order` (integer, default 0)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `property_images` table
    - Add policy for public to read property images
    - Add policy for authenticated users to manage property images
*/

CREATE TABLE IF NOT EXISTS property_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  property_id uuid NOT NULL REFERENCES properties(id) ON DELETE CASCADE,
  url text NOT NULL,
  caption text,
  sort_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE property_images ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read property images for available properties
CREATE POLICY "Anyone can read property images"
  ON property_images
  FOR SELECT
  TO anon
  USING (
    EXISTS (
      SELECT 1 FROM properties 
      WHERE properties.id = property_images.property_id 
      AND (properties.status = 'available' OR properties.status = 'sold' OR properties.status = 'coming-soon')
    )
  );

-- Allow authenticated users to read all property images
CREATE POLICY "Authenticated users can read all property images"
  ON property_images
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow authenticated users to manage property images
CREATE POLICY "Authenticated users can manage property images"
  ON property_images
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Index for better performance
CREATE INDEX IF NOT EXISTS idx_property_images_property_id ON property_images(property_id);
CREATE INDEX IF NOT EXISTS idx_property_images_sort_order ON property_images(property_id, sort_order);