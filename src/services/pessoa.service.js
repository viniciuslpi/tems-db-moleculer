const { Op } = require("sequelize");

module.exports = {
    name: "recepcao.service.pessoa",

    actions: {
        // get(`/api/pessoas?filter[fields][id]=true&filter[fields][nome]=true&filter[where][nome][regexp]=/${val}.*/gi`)
        
        async findByName(ctx) {
            let { name } = ctx.params;
            let pessoas = await ctx.call("recepcao.db.pessoa.find", { 
                query: {
                    nome: { 
                        [Op.like]: `%${name}%`
                    }
                }
            });
            return pessoas;
        },

        async get(ctx) {
            let { id } = ctx.params;
            return await ctx.call("recepcao.db.pessoa.get", { id });
        },
        
        async list(ctx) {
            return await ctx.call("recepcao.db.pessoa.list");
        },

        async create(ctx) {
            console.log(ctx.params);
            return await ctx.call("recepcao.db.pessoa.create", ctx.params);
        },

        update() {
            
        },

        delete() {

        }

    }
}