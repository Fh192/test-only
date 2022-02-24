export interface ILogin {
  email: string;
  password: string;
  rememberPassword: boolean;
}

export interface ILoginForm extends ILogin {
  rememberPassword: boolean;
}
