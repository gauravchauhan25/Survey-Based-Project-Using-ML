// import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
// const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

// export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type SurveyResponse = {
  id?: string;
  age: string;
  gender: string;
  course: string;
  year_of_study: string;
  college_state: string;
  heard_of_it_act: boolean;
  heard_of_dpdp_act: boolean;
  data_privacy_importance: number;
  read_privacy_policy: string;
  shared_personal_data_online: boolean;
  aware_of_data_rights: boolean;
  confident_protecting_data: number;
  source_of_awareness: string;
  experienced_data_breach: boolean;
  suggestions: string;
  created_at?: string;
};