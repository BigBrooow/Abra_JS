const { defineConfig } = require("cypress");
const { Client } = require('pg');

const db = {user: 'heJq1mnbruN',
    host: '172.212.108.64',
    database: 'postgres',
    password: 'Ul1mn7n2lMlwNuHHe',
    port: 5432
};

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            on('task', { async select(command) {
                const client = new Client(db);
                await client.connect();
                const res = await client.query(command);
                await client.end();
                return res.rows;
            }})
        },
    baseUrl: 'http://34.141.58.52:8000/'
    },
}); 
