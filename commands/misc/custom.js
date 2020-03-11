const table = require('discord.js-table-cmd')
module.exports={
    name: 'custom',
    description: 'Get a command from one of the command tables.',
    category: 'info',
    run: async(bot,message,args)=>{
        
        table(commands,args,message)
    }
}

//Embed,Message