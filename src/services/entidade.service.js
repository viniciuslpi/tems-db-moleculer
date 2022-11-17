module.exports = {
    name: "recepcao.service.entidade",
    actions: {
        async list(ctx){
            return await ctx.call("recepcao.db.entidade.list");
        }, 
        async get(ctx){
            return await ctx.call("recepcao.db.entidade.get", ctx.params);
        }
    }
}