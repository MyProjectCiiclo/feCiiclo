export interface Project {
  id?: number;
  project_name: string;
  language: string;
  description: string;
  image?: string | null;
  project_type: string;
  created_at?: string;
  updated_at?: string;
}