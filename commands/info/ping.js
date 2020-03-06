const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'ping',
    category: 'info',
    description: 'Returns latency and API ping',
    timeout: 10000,
    run: async(bot,message,args)=>{
        const msg = await message.channel.send('🏓 Pinging...')
        const Embed = new MessageEmbed()
        .setTitle('🏓Pong!🏓')
    .setDescription(`🏓🏓🏓\nLatency is ${Math.floor(msg.createdTimestamp - message.createdTimestamp)}MS\nAPI Latency is ${Math.round(bot.ws.ping)}MS\n🏓🏓🏓`)
    .setColor('RANDOM')
    msg.edit(Embed)
    }//
}
// test