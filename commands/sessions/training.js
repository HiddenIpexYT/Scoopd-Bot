const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'training',
    description: 'sends a message informing people that a trainings happening',
    category: 'sessions',
    run: async (bot, message, args) => {
        let channel = bot.channels.cache.get('744594763855954050');
        const filter = (m) => m.author.id === message.author.id;
        const options = { max: 1, time: 30000, errors: ['time'] };
        try {
         const time =  (await message.channel.awaitMessages(filter, options)).first().content;
         let embed = new MessageEmbed()
         .setTitle(`Training Session`)
         .setDescription(`:Scoopd: **TRAINING SESSION**\n\nThere will be a scheduled training session hosted at ${time} for all Trainees who wish to advance to Junior Scooper. We wish you the best of luck if you decide to join!\n\n:link: **LINK**https://www.roblox.com/games/5559269751/Train-at-Scoopd?refPageId=f968edeb-af2e-4121-a22a-51d92f220918\n<@!742152595417858168>`)
         .setColor('#77d77')
         channel.send(embed)
        } catch (err) {
            console.log(err);
            message.channel.send(`:x: | I have recieved an error.`)
        }
    }
}