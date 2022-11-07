const { Op } = require("sequelize");

module.exports = {
    name: "recepcao.service.senha",

    actions: {

        async findByPessoaId(ctx) {
            let { id } = ctx.params;
            let atendimento = await ctx.call("recepcao.db.atendimento.find",
                {
                    query: {
                        pessoa_id: { [Op.like]: id },
                    },
                    limit: 2,
                    sort: "-data"
                },
            );
            return atendimento;
        },

        async create(ctx) {
            return await ctx.call("recepcao.db.atendimento.create", ctx.params);
        },
    }
}
