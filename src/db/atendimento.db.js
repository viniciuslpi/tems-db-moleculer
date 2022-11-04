const DbService = require("moleculer-db");
const SqlAdapter = require("moleculer-db-adapter-sequelize");
const Sequelize = require("sequelize");


module.exports = {
    name: "recepcao.db.atendimento",

    mixins: [DbService], 
    adapter: new SqlAdapter(process.env.DB_URL),
    
    model: {
        name: 'atendimento',
        define: {
            id: { 
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            data: Sequelize.DATE,
            evento_id: Sequelize.INTEGER,
            primeira_vez: Sequelize.INTEGER,
            pessoa_id: Sequelize.INTEGER,
            problema_id: Sequelize.INTEGER,
            tipo_id: Sequelize.INTEGER, 
            entidade_id: Sequelize.INTEGER, 
            urgencia: Sequelize.INTEGER, 
            observacao: Sequelize.STRING, 
            senha_id: Sequelize.INTEGER, 
            periodo: Sequelize.STRING
        },
        options: {
            tableName: 'atendimento',
            timestamps: false,
        }
    }
}
