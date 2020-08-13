const Discord = require('discord.js')
const client = new Discord.Client();
module.exports = {
    name: "completerequirements",
    category: 'info',

    description: "Returns latency and API ping",
    timeout: 10000,
    run: async (bot, message, args) => {
        if(!message.member.roles.cache.some(role =>["SHR | Presidential Team"].includes(role.name))) return message.channel.send("You need the ``SHR | Presidential Team`` role to use this command.")
        const embed = new Discord.MessageEmbed()
        .setThumbnail('https://imageshack.com/i/pmgLffMgp')
        .setTitle(`REQUIREMENTS | INCOMPLETE`)
        .setDescription(`Greetings! The Presidential Team have just checked your requirements, and you still need to complete them. These requirements must be completed by **__DATE HERE__**. If you haven\'t completed them by then, you will recieve a warning. If you don\'t know your requirements, or need to see how much you have completed, please say s!requirements.`)
        .setFooter(`Scoop'd Management Requirements`)
        let failer = message.mentions.members.first();
        if(!failer) return message.channel.send(`Please mention the user you'd like to send the message to.`)
        failer.send(embed)
        message.channel.send(`Successfully sent the message to ${failer}`)
    }
} 