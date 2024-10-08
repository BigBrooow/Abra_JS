const { defineConfig } = require("cypress");
const { Client } = require('pg');

const db = {};

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
    baseUrl: ''
    },
}); 
