import authConfig from '../config/auth.json' with { type: 'json' };

import jwt from 'jsonwebtoken';

export default (req, res, next) => {
    const authHeader = req.headers.authorization;  // Informar o Token

    if (!authHeader) {
        return res.status(401).send({ error: 'No token provider' });
    }
    
    //Caso tenha token, irá dividir em duas partes. Exemplo de como o Token vem:
    // Bearer kasdjjljkashdiuhiygb
    const parts = authHeader.split(' ');

    //Irá verificar se o array que veio tem duas partes. Caso NÃO, dá erro.
    if (!parts.length == 2) {
        return res.status(401).send({ error: 'Token error!' });
    }

    // Nomeio as duas partes do Token como: schema e token
    const [schema, token] = parts;

    // Verificar se no inicio da variável schema começa com Bearer. Caso NÃO, dá erro
    if (!/^Bearer$/i.test(schema)) {
        return res.status(401).send({ error: 'Token malFormatted' });
    }


    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if (err) return res.status(401).send({ error: 'Token invalid' });

        req.userId = decoded.id;
        console.log(decoded.id);

        return next();
    })
}