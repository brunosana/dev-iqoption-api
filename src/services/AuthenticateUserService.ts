import AppError from '../errors/AppError';
import { authApi } from './api';

interface Request {
    login: string;
    password: string;
}

interface IQOptionResponse {
    code: string;
    ssid: string;
}

class AuthenticateUserService {
    public async execute({ login, password }: Request): Promise<string> {
        if (!login) {
            throw new AppError('Login must be valid');
        }
        if (!password) {
            throw new AppError('Password must be valid');
        }
        const response = await authApi.post('/login', {
            identifier: login,
            password,
        });
        if (!response) {
            throw new AppError('Cannot connect with iqoption api', 500);
        }
        const data = response.data as IQOptionResponse;
        if (data.code === 'success') {
            return data.ssid;
        }
        throw new AppError('Check your credentials', 401);
    }
}

export default AuthenticateUserService;
