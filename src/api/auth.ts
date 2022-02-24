import { ILogin } from '../types/auth';

const delay = () => new Promise(resolve => setTimeout(resolve, 1500));

export const authApi = {
  login: async ({ email, password }: ILogin) => {
    await delay();

    const isValidData =
      email === 'steve.jobs@example.com' && password === 'password';

    if (isValidData) {
      return { email };
    } else {
      throw new Error(`Пользователя ${email} не существует`);
    }
  },

  logout: async () => {
    await delay();
  },
};
