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
            return await ctx.call("recepcao.db.pessoa.get", ctx.params);
        },
        
        async list(ctx) {
            return await ctx.call("recepcao.db.pessoa.list");
        },

        async create(ctx) {
            return await ctx.call("recepcao.db.pessoa.create", ctx.params);
        },

        async update(ctx) {
            return await ctx.call("recepcao.db.pessoa.update", ctx.params);
        },

        async delete(ctx) {
            return await ctx.call("recepcao.db.pessoa.remove", ctx.params);
        }

    }
}