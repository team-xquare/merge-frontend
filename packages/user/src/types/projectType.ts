export interface ProjectType {
  id: string;
  project_name: string;
  team_name_en: string;
  logo: string;
}

export interface ProjectRegisterType {
  project_name: string;
  project_name_en: string;
  team_name_en: string;
  description: string;
  github_url: string;
  web_url: string;
  play_store_url: string;
  app_store_url: string;
}
