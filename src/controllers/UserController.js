import User from "../models/User.js";

export default {
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

        return res.status(200).send({
            status: 1,
            message: 'Usuário cadastrado com sucesso',
            user
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