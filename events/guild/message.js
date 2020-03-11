const Timeout = new Set();
const {prefix}= require('../../config.json')
const ms = require('ms')
module.exports=async(bot,message)=>{
    if(message.author.bot) return; //Check if the user saying the message is a bot.
    if(!message.content.startsWith(prefix)) return; //If the message does not tart with the prefix, stop.
    if(!message.guild) return; //If it is a dm, stop.
    if(!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if(cmd.length == 0 ) return;
    const command = bot.commands.get(cmd)
    if(!command) command = bot.commands.get(bot.aliases.get(cmd));
    if(command){
        if(command.timeout){
            if(Timeout.has(`${message.author.id}${command.name}`)){
                return message.reply(`You can only use that command every ${ms(command.timeout)}!`)
            } else {
                Timeout.add(`${message.author.id}${command.name}`)
                setTimeout(() => {
                    Timeout.delete(`${message.author.id}${command.name}`)
                }, command.timeout);
            }
        }
        command.run(bot,message,args)
    }

}