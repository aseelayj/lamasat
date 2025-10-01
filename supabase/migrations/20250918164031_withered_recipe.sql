/*
  # Seed properties data

  1. Data Insertion
    - Insert sample properties from the existing project data
    - Include all current projects with their locations and details

  2. Locations
    - All properties from the projects data file
    - Includes coordinates, descriptions, and status information
*/

INSERT INTO properties (
  title,
  subtitle,
  description,
  location,
  latitude,
  longitude,
  status,
  accepts_financing,
  completion_date,
  main_image
) VALUES
  ('واحة الأعمال', 'مجمع تجاري', 'ينمي أعمالك ،ويوسع فرصك.. -', 'الرياض', 24.830180484068, 46.576428784998, 'coming-soon', false, 'Q2 2025', 'https://azdan.sa/assets/images/property/38-5-1752642987.webp'),
  ('هافن', 'مجمع سكني', 'مجتمع نابض بالحياة..', 'الرياض', 24.881519742227, 46.645017508651, 'coming-soon', false, 'Q3 2025', 'https://azdan.sa/assets/images/property/37-1-1752612345.webp'),
  ('A57 النخيل', 'فلل سكنية', 'فلل فاخرة في حي النخيل', 'حي النخيل، الرياض', 24.7282284, 46.6030065, 'sold', false, '2023', 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600'),
  ('A72', 'فلل سكنية', 'فلل عصرية بتصميم راقي', 'الرياض', 24.8141122, 46.6167152, 'sold', false, '2023', 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600'),
  ('اوبال', 'مشروع سكني', 'نمط حياة فائقة الفخامة.. - حي النرجس', 'حي النرجس، الرياض', 24.9022601, 46.6470278, 'available', false, 'Q4 2024', 'https://azdan.sa/assets/images/property/33-6-1753794427.webp'),
  ('ماي فير بلس 67', 'مشروع سكني', 'عيش الفخامة والراحة', 'حي النزهة، الرياض', 24.7599063, 46.7121781, 'sold', false, '2023', 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600'),
  ('توليب بلس', 'مشروع سكني', 'الطبيعة في قلب منزلك.. - حي النزهة', 'حي النزهة، الرياض', 24.7579159, 46.6974574, 'available', true, 'Q1 2025', 'https://azdan.sa/assets/images/property/30-1-1753789779.webp'),
  ('A73', 'فلل سكنية', 'فلل متميزة بموقع استراتيجي', 'الرياض', 24.759177884102, 46.714622184999, 'sold', false, '2023', 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600'),
  ('A62', 'فلل سكنية', 'فلل بتصميم حديث', 'الرياض', 24.89359, 46.6236668, 'sold', false, '2023', 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=600'),
  ('A60 النخيل', 'فلل سكنية', 'فلل فخمة في النخيل', 'حي النخيل، الرياض', 24.744089984109, 46.652310485, 'sold', false, '2023', 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600'),
  ('A59 حطين', 'فلل سكنية', 'فلل راقية في حطين', 'حي حطين، الرياض', 24.7846522, 46.5882434, 'sold', false, '2022', 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600'),
  ('A58', 'فلل سكنية', 'فلل مودرن بمساحات واسعة', 'الرياض', 24.7835452, 46.5944294, 'sold', false, '2022', 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600'),
  ('ازدان تاور', 'برج مكتبي', 'يمثل حضورك، ويليق بطموحك..', 'الرياض', 24.798963, 46.627609, 'coming-soon', false, 'Q3 2025', 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600'),
  ('برج العليا', 'برج تجاري', 'برج مكاتب في قلب العليا', 'حي العليا، الرياض', 24.819827784073, 46.624070184998, 'available', false, 'Q2 2025', 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=600'),
  ('بالاس فيلا', 'فلل فاخرة', 'فلل قصور بتصميم ملكي', 'حي النرجس، الرياض', 24.903696284034, 46.641784484996, 'sold', false, '2023', 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600'),
  ('نارسس فلور', 'مشروع سكني', 'إطلالات خلابة ومساحات خضراء', 'حي النرجس، الرياض', 24.84785928406, 46.655396684997, 'available', false, 'Q1 2025', 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600'),
  ('نارسس بلس', 'مشروع سكني', 'حياة عصرية في قلب الرياض', 'حي الورود، الرياض', 24.7228403, 46.6835414, 'available', true, 'Q4 2024', 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600'),
  ('توليب', 'مشروع سكني', 'منازل عائلية مريحة', 'حي النرجس، الرياض', 24.7580269, 46.6972109, 'sold', false, '2023', 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600'),
  ('دافوديل', 'مشروع سكني', 'منزل يفيض رحابة وأنساً لعائلتك..', 'الرياض', 24.8206507, 46.6823688, 'sold', true, '2023', 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=600'),
  ('دافوديل بلس', 'مشروع سكني', 'منزل يفيض رحابة وأنساً لعائلتك..', 'الرياض', 24.8234774, 46.681641, 'available', true, 'Q2 2025', 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600');

-- Update some properties with detailed specifications
UPDATE properties SET
  price = 1250000,
  price_per_meter = 4500,
  total_area = 350,
  built_area = 280,
  bedrooms = 4,
  bathrooms = 3,
  parking_spaces = 2,
  construction_year = 2024,
  amenities = ARRAY['حديقة خاصة', 'مسبح مشترك', 'صالة رياضية', 'ملعب أطفال', 'أمن على مدار الساعة', 'مصعد', 'تكييف مركزي', 'إطلالة بانورامية']
WHERE title = 'دافوديل بلس';

UPDATE properties SET
  price = 1150000,
  price_per_meter = 4200,
  total_area = 320,
  built_area = 260,
  bedrooms = 3,
  bathrooms = 3,
  parking_spaces = 2,
  construction_year = 2024,
  amenities = ARRAY['حديقة مشتركة', 'مسبح', 'أمن 24/7', 'موقف مغطى', 'تكييف مركزي', 'إطلالة جميلة']
WHERE title = 'نارسس بلس';

UPDATE properties SET
  price = 1350000,
  price_per_meter = 4800,
  total_area = 380,
  built_area = 300,
  bedrooms = 4,
  bathrooms = 4,
  parking_spaces = 2,
  construction_year = 2024,
  amenities = ARRAY['حديقة خاصة', 'مسبح خاص', 'صالة رياضية', 'ملعب أطفال', 'أمن متقدم', 'مصعد', 'نظام ذكي', 'إطلالة مميزة']
WHERE title = 'توليب بلس';