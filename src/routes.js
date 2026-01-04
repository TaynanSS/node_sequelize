import express, { json, Router } from 'express';

const router = express.Router();

router.get('/', (require, response) => {
    return response.send('Bem vindo');
});

export default router;