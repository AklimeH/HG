////////////////////////////////////////////
const Discord = require("discord.js");
const botconfig = require("./botconfig.json");
const ascii = require("ascii-table");
const { readdirSync, fstat } = require("fs");
const fs = require("fs");
var weather = require('weather-js');
const { Client } = require("discord.js-commando");
const bot = new Discord.Client({disableEveryone: true});
require('events').EventEmitter.defaultMaxListeners = 100;

let botname = "Hungarian Gamers"

bot.on("ready", async() => {
    console.log(`${bot.user.username} elindult!`)
   
    let státuszok = [
        "Prefix|$",
        
       
    ]

    setInterval(function() {
        let status = státuszok[Math.floor(Math.random()* státuszok.length)]

        bot.user.setActivity(status, {type: "PLAYING"})
    }, 3000)
})  
///////////////////////////////////////////////
bot.on("message", async message => {
    let MessageArray = message.content.split(" ");
    let cmd = MessageArray[0];
    let args = MessageArray.slice(1);
    let prefix = botconfig.prefix;

    if(cmd === `${prefix}hello`){
        message.channel.send("Szia");
    }

    if(cmd === `${prefix}teszt`){
        let TesztEmbed = new Discord.MessageEmbed()
        .setColor("#98AA12")
        .setAuthor(message.author.username)
        .setTitle("Best In One Place")
        .addField("Irodalom:", "Líra\n Epika\n dráma")
        .setThumbnail(message.author.displayAvatarURL())
        .setImage(message.guild.iconURL())
        .setDescription(`\`${prefix}\``)
        .setFooter(`${botname} | ${message.createdAt}`)

        message.channel.send(TesztEmbed)
    }

    if(cmd === `${prefix}szöveg`){
        let szöveg = args.join(" ");

        if(szöveg) {
            let dumaEmbed = new Discord.MessageEmbed()
        .setColor("#98AA12")
        .setAuthor(message.author.username)
        .addField("Say:", szöveg)
        .setFooter(`${botname} | ${message.createdAt}`)
    
        message.channel.send(dumaEmbed)
        } else {
            message.reply("írj szöveget!")
        }
    }
    
  


})  
//////////////////////////////////////////////////////////////////
bot.on("message", async (message) => {
    let MessageArray = message.content.split(" ");
    let cmd = MessageArray[0];
    let args =MessageArray.slice(1);
    let prefix = botconfig.prefix;

    if(cmd === `${prefix}botinfo`) {
        let info_embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Bot Információi")
        .addField("Bot Fejlesztők:", "✪𝜜𝖐𝖑𝙞𝖒𝟈♰#5443")
        .addField("Bot Programnyelv:", "JavaScript")
        .addField("Bot Prefixe:", `${prefix}`)
        .addField("Bot Név:", "Hungarian Gamers" )
        .setThumbnail(message.author.displayAvatarURL)
        .setTimestamp()
  
        message.channel.send(info_embed)
    }

    if(cmd === `${prefix}help`) {
        let help_embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Bot Parancsai")
        .addField("Parancsok:", "$ban, $kick, $report, $mute, $warn, $clear, $weather" )
        .addField("Szerver Parancsok:", "$botinfó , $help")
        .addField("Zene Parancsok:", "$play, $skip, $stop, $ping, $volume, $queue, $loop*\n\`Filter parancsok:\` *$bassboost, $3d, $echo, $karaoke, $nightcore, $vaporwave, $flanger")
        .setThumbnail(message.author.displayAvatarURL)
        .setTimestamp()
  
        message.channel.send(help_embed)
    }

    if(cmd === `${prefix}zenehelp`) {
        let zenehelp_embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Zene Parancsai")
        .addField( "$play, $skip, $stop, $ping, $volume, $queue, $loop*\n\`Filter parancsok:\` *$bassboost, $3d, $echo, $karaoke, $nightcore, $vaporwave, $flanger")
        .setThumbnail(message.author.displayAvatarURL)
        .setTimestamp()
  
        message.channel.send(zenehelp_embed)
    }
/////////////////////////////////////////////////////////////
if(cmd === `${prefix}kick`){
    let kick_user = message.mentions.members.first();
    if(args[0] && kick_user){

        if(args[1]){

            let KickEmbed = new Discord.MessageEmbed()
            .setTitle("KICK")
            .setColor("RED")
            .setDescription(`**Kickelte:** ${message.author.tag}\n**Kickelve lett:** ${kick_user.user.tag}\n**Kick indoka:** ${args.slice(1).join(" ")}`)

        message.channel.send(KickEmbed);

            kick_user.kick(args.slice(1).join(" "));

        } else {
        let parancsEmbed = new Discord.MessageEmbed()
        .setTitle("Parancs használata:")
        .addField(`\`${prefix}kick <@név> [indok]\``, "˘˘˘")
        .setColor("BLUE")
        .setDescription("HIBA: Kérlek adj meg egy indokot!!")

        message.channel.send(parancsEmbed);
        }

    } else {
        let parancsEmbed = new Discord.MessageEmbed()
        .setTitle("Parancs használata:")
        .addField(`\`${prefix}kick <@név> [indok]\``, "˘˘˘")
        .setColor("BLUE")
        .setDescription("HIBA: Kérlek említs meg egy embert!")

        message.channel.send(parancsEmbed);

    }
}


if(cmd === `${prefix}ban`){
    let ban_user = message.mentions.members.first();
    if(args[0] && ban_user){

        if(args[1]){

            let BanEmbed = new Discord.MessageEmbed()
            .setTitle("BAN")
            .setColor("RED")
            .setDescription(`**Banolta:** ${message.author.tag}\n**Banolva lett:** ${kick_user.user.tag}\n**Ban indoka:** ${args.slice(1).join(" ")}`)

        message.channel.send(KickEmbed);

            ban_user.ban(args.slice(1).join(" "));

        } else {
        let parancsEmbed = new Discord.MessageEmbed()
        .setTitle("Parancs használata:")
        .addField(`\`${prefix}ban <@név> [indok]\``, "˘˘˘")
        .setColor("BLUE")
        .setDescription("HIBA: Kérlek adj meg egy indokot!!")

        message.channel.send(parancsEmbed);
        }

    } else {
        let parancsEmbed = new Discord.MessageEmbed()
        .setTitle("Parancs használata:")
        .addField(`\`${prefix}ban <@név> [indok]\``, "˘˘˘")
        .setColor("BLUE")
        .setDescription("HIBA: Kérlek említs meg egy embert!")

        message.channel.send(parancsEmbed);

    }
}

if(cmd === `${prefix}report`){
    if(args[0] && message.mentions.members.first() && args[1]){

        message.channel.send("A reportodat sikeresen elküldtük!")

        let report_channel = "892813029832536124";

        let report_embed = new Discord.MessageEmbed()
            .setAuthor(message.mentions.members.first().user.tag + `| REPORTED`)
            .setDescription("Report indoka:" + args.join(" ").slice(args[0].length))
            .addField("Reportolta:", message.author.tag)
            .setColor("RANDOM")
            .setTimestamp(message.createdAt)
            .setFooter(bot.user.username)

            bot.channels.cache.get(report_channel).send(report_embed);

    } else {
        let he_embed = new Discord.MessageEmbed()
            .setAuthor(message.author.tag + `| Használat`)
            .setDescription(`${prefix}report @<név> <indok>`)
            .setColor("RANDOM")
            .setTimestamp(message.createdAt)
            .setFooter(bot.user.username)

            message.channel.send(he_embed);
    }
}




///////////////////////////////////////////////////////////////

if(cmd === `${prefix}weather`){
    if(args[0]){
        weather.find({search: args.join(" "), degreeType: "C"}, function(err, result) {
            if (err) message.reply(err);

            if(result.length === 0){
                message.reply("Kérlek adj meg egy létező település nevet!")
                return;
            }

            let current = result[0].current;
            let location = result[0].location;

            let WeatherEmbed = new Discord.MessageEmbed()
            .setDescription(`**${current.skytext}**`)
            .setAuthor(`Időjárás itt: ${current.observationpoint}`)
            .setThumbnail(current.imageUrl)
            .setColor("GREEN")
            .addField("Időzóna:", `UTC${location.timezone}`, true)
            .addField("Fokozat típusa:", `${location.degreetype}`, true)
            .addField("Hőfok", `${current.temperature}°C`, true)
            .addField("Hőérzet:", `${current.feelslike}°C`, true)
            .addField("Szél", `${current.winddisplay}`, true)
            .addField("Páratartalom:", `${current.humidity}%`, true)

            message.channel.send(WeatherEmbed);
        })

    } else {
        message.reply("Kérlek adj meg egy település nevet!")
    }
}

if(cmd === `${prefix}clear`){
    if(message.member.hasPermission("KICK_MEMBERS")){
        if(message.guild.member(bot.user).hasPermission("ADMINISTRATOR")){

            if(args[0] && isNaN(args[0]) && args[0] <= 100 || 0 < args[0] && args[0] < 101){

                message.channel.send(`Törölve lett: ${Math.round(args[0])} üzenet!`)
                message.channel.bulkDelete(Math.round(args[0]))

            } else {
                message.reply(`Használat: ${prefix}clear <1-100>`)
            }

        } else message.reply("A botnak adminnak kell lennie a szerveren, hogy működjön ez a parancs!")

    } else message.reply("Ehhez a parancshoz nincs jogod!")
}

})

        

















bot.login(process.env.BOT_TOKEN);
