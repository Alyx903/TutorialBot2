const {MessageEmbed} =  require('discord.js')
module.exports={
    name: 'poll',
    description: 'Create a simple yes or no poll.',
    category: 'fun',
    usage: '<poll question>',
    aliases: ['p'],
    run: async(bot,message,args)=>{
        if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send('You do not have admin!')
        //!poll <channel mention> question
        const channel = message.mentions.channels.first()||message.guild.channels.cache.get(args[0])
        if(!channel){
            return message.channel.send('You did not mention / give the id of the channel you wanted to create the poll in!')
        }
        let question = message.content.slice(bot.prefix.length+5+channel.id.length+3)
        if(!question){
            return message.channel.send('You did not specify a question for your poll.')
        }
        const Embed = new MessageEmbed()
        .setTitle('New poll!')
        .setDescription(question)
        .setFooter(`${message.author.username} created this poll.`)
       let msg = await bot.channels.cache.get(channel.id).send(Embed)
        await msg.react('👍')
        await msg.react('👎')
    }
}