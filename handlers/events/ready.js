const configs = require('../../conf/config.json');
const command_handler = require('../../commands');
const slash_command_handler = require('../../slash_commands');
const Discord = require('discord.js');

module.exports = {
    type: 'ready',
    async run(client) {

        console.log(`${client.user.tag}: ` + 'now online | version: ' + configs.version);

        command_handler.initCommands(client);
        slash_command_handler.initSlashCommands(client);
    
        let statuses = [
            `${configs.prefix}help`,
        ]
    
        setInterval(function () {
            let status = statuses[Math.floor(Math.random() * statuses.length)]
            client.user.setActivity(status, {
                type: 'WATCHING'
            });
        }, 6000)

    }
}