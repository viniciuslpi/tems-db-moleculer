const DbService = require("moleculer-db");
const SqlAdapter = require("moleculer-db-adapter-sequelize");
const Sequelize = require("sequelize");


module.exports = {
    name: "recepcao.db.pessoa",

    mixins: [DbService],
    adapter: new SqlAdapter(process.env.DB_URL),

    model: {
        name: 'pessoa',
        define: {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            label: Sequelize.STRING,
            logradouro: Sequelize.STRING,
            numero: Sequelize.STRING,
            complemento: Sequelize.STRING,
            bairro: Sequelize.STRING,
            cidade: Sequelize.STRING,
            uf: Sequelize.STRING,
            pais: Sequelize.STRING,
            cep: Sequelize.STRING,
            tel_resid: Sequelize.STRING,
            tel_com: Sequelize.STRING,
            cel: Sequelize.STRING,
            email: Sequelize.STRING,
            genero: Sequelize.STRING,
            data_nasc: Sequelize.DATE,
            cpf: Sequelize.STRING,
            rg: Sequelize.STRING,
            data_cadastro: Sequelize.DATE,
            observacao: Sequelize.STRING,
            horario_cadastro: Sequelize.DATE,
            fonetica: Sequelize.STRING,
        },
        options: {
            tableName: 'pessoa',
            timestamps: false,
        }
    }
}