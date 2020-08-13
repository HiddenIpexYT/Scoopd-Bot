const Discord = require('discord.js')
const client = new Discord.Client();
module.exports = {
    name: "sendapplication",
    category: 'info',

    description: "Returns latency and API ping",
    timeout: 10000,
    run: async (bot, message, args) => {
        if(!message.member.roles.cache.some(role =>["HR | Executive Team", "SHR | Presidential Team"].includes(role.name))) return message.channel.send("You need the ``HR | Executive Team``+  role to use this command.")
        const embed = new Discord.MessageEmbed()
        .setThumbnail('https://imageshack.com/i/pmgLffMgp')
        .setTitle(`WELL DONE ON YOUR SA APPLICATION! `)
       .setDescription(`Greetings! The Presidential Team have decided to send you a Staff Assistant application! If you'd like to become a Staff Assistant at Scoop'd, please complete the application below. **If you haven't completed the application within 2 days, we shall assume  you have declined the opportunity.**\n\n:link: - https://docs.google.com/forms/d/1eAR-hlSrP_CG6NwWSLhfJJWYJRjQQ27V6uKdFn61dPM/edit`)
        let passer = message.mentions.members.first();
        if(!passer) return message.channel.send(`Please mention the user you'd like to send the message to.`)
        passer.send(embed)
        message.channel.send(`Successfully sent the message to ${passer}`)
    }
} 