import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database Types
export interface Contact {
  id: string;
  name: string;
  phone: string;
  email?: string;
  subject?: string;
  message: string;
  created_at: string;
  updated_at: string;
}

export interface InterestRegistration {
  id: string;
  name: string;
  phone: string;
  email?: string;
  property_type: string;
  budget: string;
  location?: string;
  bedrooms?: string;
  timeframe?: string;
  financing_needed?: string;
  additional_info?: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface QuickInterest {
  id: string;
  name: string;
  phone: string;
  property_type: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface Property {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  location?: string;
  latitude?: number;
  longitude?: number;
  price?: number;
  price_per_meter?: number;
  status: 'available' | 'sold' | 'coming-soon';
  accepts_financing: boolean;
  completion_date?: string;
  total_area?: number;
  built_area?: number;
  bedrooms?: number;
  bathrooms?: number;
  parking_spaces?: number;
  construction_year?: number;
  amenities?: string[];
  main_image?: string;
  created_at: string;
  updated_at: string;
}

export interface PropertyImage {
  id: string;
  property_id: string;
  url: string;
  caption?: string;
  sort_order: number;
  created_at: string;
}

// Database functions
export const submitContact = async (contactData: Omit<Contact, 'id' | 'created_at' | 'updated_at'>) => {
  const { data, error } = await supabase
    .from('contacts')
    .insert([contactData])
    .select()
    .single();

  if (error) {
    console.error('Error submitting contact:', error);
    throw error;
  }

  return data;
};

export const submitInterestRegistration = async (registrationData: Omit<InterestRegistration, 'id' | 'created_at' | 'updated_at' | 'status'>) => {
  const { data, error } = await supabase
    .from('interest_registrations')
    .insert([registrationData])
    .select()
    .single();

  if (error) {
    console.error('Error submitting interest registration:', error);
    throw error;
  }

  return data;
};

export const submitQuickInterest = async (quickInterestData: Omit<QuickInterest, 'id' | 'created_at' | 'updated_at' | 'status'>) => {
  const { data, error } = await supabase
    .from('quick_interests')
    .insert([quickInterestData])
    .select()
    .single();

  if (error) {
    console.error('Error submitting quick interest:', error);
    throw error;
  }

  return data;
};

export const getProperties = async () => {
  const { data, error } = await supabase
    .from('properties')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching properties:', error);
    throw error;
  }

  return data;
};

export const getPropertyById = async (id: string) => {
  const { data, error } = await supabase
    .from('properties')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching property:', error);
    throw error;
  }

  return data;
};

export const getPropertyBySlug = async (slug: string) => {
  // Use title-based slug mapping since slug column doesn't exist
  const { getPropertySlugMapping } = await import('../utils/slug');
  
  const { data: allProperties, error } = await supabase
    .from('properties')
    .select('*');

  if (error) {
    console.error('Error fetching properties:', error);
    throw error;
  }

  // Find property by matching generated slug from title
  const property = allProperties?.find(p => getPropertySlugMapping(p.title) === slug);
  
  return property || null;
};

export const getPropertyImages = async (propertyId: string) => {
  const { data, error } = await supabase
    .from('property_images')
    .select('*')
    .eq('property_id', propertyId)
    .order('sort_order', { ascending: true });

  if (error) {
    console.error('Error fetching property images:', error);
    throw error;
  }

  return data;
};