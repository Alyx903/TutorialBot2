const {prefix}= require('../../config.json')
module.exports=bot=>{
    bot.user.setActivity(`${prefix}help ! TutorialBot!`,{type: "STREAMING", url: 'https://twitch.tv/salvage_dev'})
    console.log(`Hello! ${bot.user.username} is now online!!`)
}