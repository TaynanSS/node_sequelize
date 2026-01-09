import express, { json, Router } from 'express';

import UserController from './controllers/UserController.js';
import AddressController from './controllers/AddressController.js';
import CourseController from './controllers/CourseController.js';

import authMiddleware from './middlewares/auth.js';


const router = express.Router();

router.get('/users', authMiddleware, UserController.index);
router.post('/users', UserController.store);
router.put('/users/:user_id', UserController.update);
router.delete('/users/:user_id', UserController.delete);
router.post('/users/login', UserController.login);

router.use(authMiddleware);  // Lembrete: Rotas abaixo é necessário autenticação do Token

router.get('/users/:user_id/address', AddressController.index);
router.post('/users/:user_id/address', AddressController.store);
router.put('/users/:id/address', AddressController.update);
router.delete('/users/:id/address', AddressController.delete);

router.get('/users/:user_id/courses', CourseController.index);
router.post('/users/:user_id/courses', CourseController.store);
router.delete('/users/:user_id/courses', CourseController.delete);

export default router;