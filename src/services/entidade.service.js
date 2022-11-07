module.exports = {
    name: "recepcao.service.entidade",
    actions: {
        async get(ctx){
            let { id } = ctx.params;
            return await ctx.call("recepcao.db.entidade.get", { id });
        }
    }
}