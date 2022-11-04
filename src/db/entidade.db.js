const DbService = require("moleculer-db");
const SqlAdapter = require("moleculer-db-adapter-sequelize");
const Sequelize = require("sequelize");


module.exports = {
    name: "recepcao.db.entidade",

    mixins: [DbService], 
    adapter: new SqlAdapter(process.env.DB_URL),
    
    model: {
        name: 'entidade',
        define: {
            id: { 
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome: Sequelize.STRING,
            linha_id: Sequelize.INTEGER,
            data_inicio_casa: Sequelize.STRING,
            pessoa_id: Sequelize.INTEGER,
            biografia: Sequelize.STRING,
            ativa: Sequelize.INTEGER
        },
        options: {
            tableName: 'entidade',
            timestamps: false,
        }
    }
}