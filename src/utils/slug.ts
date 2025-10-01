// Utility functions for generating SEO-friendly slugs

export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    // Replace Arabic characters with English equivalents
    .replace(/[أإآا]/g, 'a')
    .replace(/[ة]/g, 'h')
    .replace(/[ي]/g, 'y')
    .replace(/[و]/g, 'w')
    .replace(/[ت]/g, 't')
    .replace(/[ب]/g, 'b')
    .replace(/[ج]/g, 'j')
    .replace(/[ح]/g, 'h')
    .replace(/[خ]/g, 'kh')
    .replace(/[د]/g, 'd')
    .replace(/[ذ]/g, 'th')
    .replace(/[ر]/g, 'r')
    .replace(/[ز]/g, 'z')
    .replace(/[س]/g, 's')
    .replace(/[ش]/g, 'sh')
    .replace(/[ص]/g, 's')
    .replace(/[ض]/g, 'd')
    .replace(/[ط]/g, 't')
    .replace(/[ظ]/g, 'z')
    .replace(/[ع]/g, 'a')
    .replace(/[غ]/g, 'gh')
    .replace(/[ف]/g, 'f')
    .replace(/[ق]/g, 'q')
    .replace(/[ك]/g, 'k')
    .replace(/[ل]/g, 'l')
    .replace(/[م]/g, 'm')
    .replace(/[ن]/g, 'n')
    .replace(/[ه]/g, 'h')
    .replace(/[ى]/g, 'y')
    // Remove special characters and spaces
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function createPropertySlug(title: string, id?: string): string {
  const baseSlug = generateSlug(title);
  
  // Add ID suffix to ensure uniqueness if provided
  if (id) {
    return `${baseSlug}-${id.slice(0, 8)}`;
  }
  
  return baseSlug;
}

// Map common Arabic project names to English slugs for better SEO
export function getPropertySlugMapping(title: string): string {
  const mappings: { [key: string]: string } = {
    'دافوديل بلس': 'daffodil-plus',
    'دافوديل': 'daffodil',
    'نارسس بلس': 'narcissus-plus',
    'نارسس فلور': 'narcissus-floor',
    'توليب بلس': 'tulip-plus',
    'توليب': 'tulip',
    'اوبال': 'opal',
    'ازدان تاور': 'izdan-tower',
    'برج العليا': 'al-olaya-tower',
    'بالاس فيلا': 'palace-villa',
    'ماي فير': 'mayfair',
    'ماي فير بلس 67': 'mayfair-plus-67',
    'هافن': 'haven',
    'واحة الأعمال': 'business-oasis',
    'A57 النخيل': 'a57-palm',
    'A58': 'a58-villas',
    'A59 حطين': 'a59-hittin',
    'A60 النخيل': 'a60-palm',
    'A62': 'a62-project',
    'A72': 'a72-development',
    'A73': 'a73-residence'
  };

  return mappings[title] || generateSlug(title);
}