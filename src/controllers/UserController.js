import User from "../models/User.js";
import bcrypt from "bcryptjs";

import jwt from 'jsonwebtoken';
import authConfig from '../config/auth.json' with { type: 'json' };

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 78300,
    });
}

export default {
    async login(req, res) {
        const { password, email, islogged } = req.body;  // Recebendo os parâmetros
        const user = await User.findOne({ where: { email } });  //Verificação para saber se usuário existe.

        //Se user vier vazio ou nulo
        if (!user) {
            return res.status(400).send({
                status: 0,
                message: 'E-mail ou senha incorreto!'
            });
        }

        // Verificar se as senhas estão iguais.
        if (!bcrypt.compareSync( password, user.password )) {
            return res.status(400).send({
                status: 0,
                message: 'E-mail ou senha incorreto!'
            });
        }

        const user_id = user.id;
        
        await User.update({
            islogged
        }, {
            where: {
                id: user_id
            }
        });

        user.password = undefined   //Assim não aparece no retorno 

        const token = generateToken({ id: user_id });

        return res.status(200).send({
            status: 1,
            message: "Usuário logado com sucesso!",
            user, token
        })
    },

    // index: Buscar tudo que tem no banco em uma tabela específica
    async index(req, res){
        const users = await User.findAll();

        if (users == '' || users == null) {
            return res.status(200).send('Nenhum usuário cadastrado' );
        }

        return res.status(200).send({ users });
    },

    // store: Salvar/Inserir informações dentro do banco.
    async store(req, res) {
        const { name, password, email } = req.body; // Puxando as informações de forma desestruturada.

        const user = await User.create({ name, password, email });

        const token = generateToken({ id: user_id });

        return res.status(200).send({
            status: 1,
            message: 'Usuário cadastrado com sucesso',
            user, token
        })
    },

    // update: Atualizar
    async update(req, res) {
        const { name, password, email } = req.body;
        const { user_id } = req.params;

        const [rows_affected] = await User.update({
            name, password, email
        }, {
            where: {
                id: user_id
            }
        });

        if (rows_affected === 0) {
            return res.status(404).send({
                status: 0,
                message: "Usuário não encontrado ou nenhuma linha afetada."
            })
        }

        return res.status(200).send({
            status: 1,
            message: "Usuário atualizado com sucesso!",
        });

    },

    // delete: Deletar
    async delete(req, res) {
        const { user_id } = req.params;

        await User.destroy({
            where: {
                id: user_id
            }
        })

        return res.status(200).send({
            status: 1,
            message: "Usuário deletado com sucesso!"
        });
    },
};