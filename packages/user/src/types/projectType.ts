export type projectType = {
  project_name: string;
  project_name_en: string;
  team_name_en: string;
  description: string;
  github_url: string;
  web_url: string;
  play_store_url: string;
  app_store_url: string;
};

export type deployType = {
  container_name: string;
  service_type: string;
  github_url: string;
  redis: boolean;
  mysql: boolean;
  project_id: string;
};
