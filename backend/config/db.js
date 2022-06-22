const config = require('../knexfile.js')

const knex = require('knex')({
    client: 'postgres',
    connection: async () => {
        return {
            host: '127.0.0.1',
            port: 5432,
            user: 'postgres',
            password: '123456',
            database: 'knowledge_final',
            expirationChecker: () => {
                return Date.now() * 5;
            }
        };
    }
});

// knex.migrate.latest([config])
module.exports = knex