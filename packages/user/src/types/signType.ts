export type signinType = {
  account_id: string;
  password: string;
};

export interface signupType {
  student_name: string;
  github: string;
  password: string;
  school_gcn: string;
  email: string;
  account_id: string;
  okPassword: string | undefined;
}
