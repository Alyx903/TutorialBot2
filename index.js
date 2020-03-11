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
["command","event"].forEach(handler=>{
    require(`./handlers/${handler}`)(bot);
});
bot.login(token)