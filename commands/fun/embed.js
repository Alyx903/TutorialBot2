const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'embed',
    category: 'fun',
    timeout: 5000,
    description: 'View a nice embed!',
    run: async(bot,message,args)=>{
        const embed = new MessageEmbed()
            .setTitle('Title ')
            .setColor('RANDOM')
            .setURL("https://discord.js.org")
            .setAuthor("Nameeeeeeee","https://i.imgur.com/wSTFkRM.png",`https://discord.js.org`)
            .setDescription('Hello! This is the description!')
            .setThumbnail("https://i.imgur.com/wSTFkRM.png")
            .addFields(
                { name: 'Title here', value: 'Description here', inline: true},
                { name: '\u200b', value: '\u200b', inline: true},
                { name: 'Title here', value: 'Description here'},
            )
            .setImage(`https://i.imgur.com/wSTFkRM.png`)
            .setTimestamp()
            .setFooter('Hello!',`https://i.imgur.com/wSTFkRM.png`)
            message.channel.send(embed)
    }
}