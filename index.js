const {Collection, Client, Discord} = require('discord.js');
const fs = require('fs');
const bot = new Client({
    disableMentions: 'everyone'
})
const config = require('./config.json')
const token = config.token;
bot.commands = new Collection();
bot.aliases = new Collection();
bot.categories = fs.readdirSync("./commands/");
bot.prefix = config.prefix;
["command","event"].forEach(handler=>{
    require(`./handlers/${handler}`)(bot);
});
bot.login(token)