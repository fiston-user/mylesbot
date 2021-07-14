const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: "help",
    description: " ",

    async run (bot, message, args) {

        const BotInfo = new Discord.MessageEmbed()
        .setColor(0xD866BE)
        .setTitle('Bot Information')
        .addField('**Prefix**', 'Bots prefix is: `y!`')
        .addField('**Pages**', '`1.Bot Information`, `2.Information`, `3.Fun`')
        .addField('**Navigation Help**', 'Use the arrows below to look through the pages!')

        const Information = new Discord.MessageEmbed()
        .setColor(0xD86685)
        .setTitle('Information')
        .addField('`y!ping`', 'Shows you the bots ping!')
        .addField('`y!weather`', 'shows the current weather in a specified location!')
        
        
        const Moderation = new Discord.MessageEmbed()
        .setColor(0xD86685)
        .setTitle('Moderation')
        .addField('`y!kick`', 'Kick users from the server!')
        .addField('`y!ban`', 'Ban users from the server!')
        .addField('`y!reactionrole`', 'React to get the role!')

        
        const fun = new Discord.MessageEmbed()
        .setColor(0xD88066)
        .setTitle('Fun')
        .addField('`y!8ball`', 'Ask it a question and it will respond.....')
        .addField('`y!howgay`', 'Tells you how gay someone is 👀')
        .addField('`y!meme`', 'Sends a random meme from random meme redits!')
        .addField('`y!rps`', 'Play rock paper scissors against the bot')
        .addField('`y!tictactoe`', 'Play tictactoe against a specified user!')
        .addField('`y!poll`', 'starts a poll!')

        const pages = [
            BotInfo,
            Information,
            Moderation,
            fun,
        ]

        const emojiList = ["⏪", "⏩"]

        const timeout = '600000';

        pagination(message, pages, emojiList, timeout)
    }
}
