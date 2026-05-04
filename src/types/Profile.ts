export interface Skill {
  id: number;
  profile_id: number;
  name: string;
  percent: number;
  created_at: string;
  updated_at: string;
}

export interface Profile {
  id: number;
  full_name: string;
  title: string;
  description: string;
  projects: number;
  years: string;
  clients: number;
  experience_years: string;
  degree: string;
  website: string;
  email: string;
  github: string;
  linkedin: string;
  avatar: string;
  cv_url: string;
  created_at: string;
  updated_at: string;
  skills: Skill[];
}

export interface ProfileResponse {
  message: string;
  data: Profile;
}