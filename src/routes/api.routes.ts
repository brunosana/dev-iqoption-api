import { Router } from 'express';
import AuthenticateUserService from '../services/AuthenticateUserService';

const apiRoutes = Router();

apiRoutes.post('/login', async (request, response) => {
    const { login, password } = request.body;
    const authenticateUserService = new AuthenticateUserService();
    const ssid = await authenticateUserService.execute({ login, password });
    return response.json({ ssid });
});

export default apiRoutes;
