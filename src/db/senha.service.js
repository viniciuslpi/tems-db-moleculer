const DbService = require("moleculer-db");
const SqlAdapter = require("moleculer-db-adapter-sequelize");
const Sequelize = require("sequelize");


module.exports = {
    name: "recepcao.db.senha",

    mixins: [DbService], 
    adapter: new SqlAdapter(process.env.DB_URL),
    
    model: {
        name: 'senha',
        define: {
            id: { 
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            data_atendimento: Sequelize.DATE,
            entidade_id: Sequelize.INTEGER,
            proxima: Sequelize.INTEGER,
            periodo_atendimento: Sequelize.STRING
        },
        options: {
            tableName: 'senha',
            timestamps: false,
        }
    }


}