import express, { json, Router } from 'express';
import UserController from './controllers/UserController.js';

const router = express.Router();

router.get('/users', UserController.index);

export default router;