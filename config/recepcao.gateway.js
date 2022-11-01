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
                }

            }
        ]
    }
}