module.exports = {
    name: "recepcao.service.atendimento",

    actions: {

        async get(ctx) {
            return await ctx.call("recepcao.db.atendimento.get", ctx.params);
        },

        // async findByPessoaId(ctx) {
        //     let { id } = ctx.params;
        //     let atendimento = await ctx.call("recepcao.db.atendimento.find",
        //         {
        //             query: {
        //                 pessoa_id: { [Op.like]: id },
        //             },
        //             limit: 2,
        //             sort: "-data"
        //         },
        //     );
        //     return atendimento;
        // },

        async create(ctx) {
            return await ctx.call("recepcao.db.atendimento.create", ctx.params);
        },

        async update(ctx) {
            ctx.meta.$statusCode = 204;
            return await ctx.call("recepcao.db.atendimento.update", ctx.params);
        },
    }
}
