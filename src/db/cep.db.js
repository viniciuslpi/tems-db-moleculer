const DbService = require("moleculer-db");
const SqlAdapter = require("moleculer-db-adapter-sequelize");
const Sequelize = require("sequelize");


module.exports = {
    name: "recepcao.db.cep",

    mixins: [DbService], 
    adapter: new SqlAdapter(process.env.DB_URL),
    
    model: {
        name: 'cep',
        define: {
            id: { 
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            cd_cep: Sequelize.STRING,
            tp_logradouro: Sequelize.STRING,
            nm_logradouro: Sequelize.STRING,
            mm_cidade: Sequelize.STRING,
            nm_bairro_inicio: Sequelize.STRING,
            nm_bairro_fim: Sequelize.STRING,
            uf: Sequelize.STRING,
            dh_atualizacao: Sequelize.DATE,
            cd_fonet: Sequelize.STRING,
        },
        options: {
            tableName: 'cep',
            timestamps: false,
        }
    }
}