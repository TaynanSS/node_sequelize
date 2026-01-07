import express, { json, Router } from 'express';
import UserController from './controllers/UserController.js';
import authMiddleware from './middlewares/auth.js';

const router = express.Router();

router.get('/users', authMiddleware, UserController.index);
router.post('/users', UserController.store);
router.put('/users/:user_id', UserController.update);
router.delete('/users/:user_id', UserController.delete);
router.post('/users/login', UserController.login);

export default router;