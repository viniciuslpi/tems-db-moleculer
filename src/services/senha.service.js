const { Op } = require("sequelize");
const sequelize = require("sequelize");

module.exports = {
    name: "recepcao.service.senha",

    actions: {

        async findByDateAndPeriod(ctx) {
            let { data_atendimento, periodo_atendimento } = ctx.params;
            let senha = await ctx.call("recepcao.db.senha.find",
                {
                    query: {
                        data_atendimento: { [Op.like]: data_atendimento },
                        periodo_atendimento: { [Op.like]: periodo_atendimento }
                    },
                    limit: 1,
                    sort: "-data_atendimento"
                },
            );
            return senha;
        },

        async list(ctx) {
            return await ctx.call("recepcao.db.senha.list");
        },

        async create(ctx) {
            return await ctx.call("recepcao.db.senha.create", ctx.params);
        },

        async update(ctx) {
            return await ctx.call("recepcao.db.senha.update", ctx.params);
        }
    }
}
