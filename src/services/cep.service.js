module.exports = {
    name: "recepcao.service.cep",
    actions: {
        async get(ctx){
            let { codigo } = ctx.params;
            return await ctx.call("recepcao.db.cep.find", {cd_cep: codigo });
        }
    }
}