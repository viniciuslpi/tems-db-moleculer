const ApiService = require('moleculer-web');

module.exports = {  
    mixins: [ApiService],
    settings: {

        path:'/api/recepcao/v1',

        port: process.env.PORT ?? 4000,

        routes: [
            {
                path:'/pessoas',
                whitelist: ["recepcao.service.pessoa.*"],

                aliases: {
                    "GET /:id":"recepcao.service.pessoa.get",
                    "GET /": "recepcao.service.pessoa.list",
                    "POST /": "recepcao.service.pessoa.create",
                    "PUT /:id": "recepcao.service.pessoa.update",
                    // "DELETE /:id": "recepcao.service.pessoa.delete"
                }
            },
            {
                path:'/senhas',
                whitelist: ["recepcao.service.senha.*"],

                aliases: {
                    "GET /": "recepcao.service.senha.findByDateAndPeriod",
                    // "GET /": "recepcao.service.senha.list",
                    "POST /": "recepcao.service.senha.create",
                    "PUT /:id": "recepcao.service.senha.update",
                    // "DELETE /:id": "recepcao.service.pessoa.delete"
                }
            }
        ]
    }
}