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

    // store: Salvar 
    async store(req, res) {

    },

    // update: Atualizar
    async update(req, res) {

    },

    // delete: Deletar
    async delete(req, res) {

    }
};