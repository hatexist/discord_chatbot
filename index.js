require('dotenv')
const { Client,Util, Collection,MessageEmbed,Structures } = require("discord.js");
const keepAlive = require('./server.js')
keepAlive()
async function errorEmbed(text,message){
      const newembed = new Discord.MessageEmbed()
      .setColor("#FF7676")
      .setDescription(`**❌ | ${text} **`)
       return message.channel.send(newembed);
    }
const Discord = require('discord.js');
const client = new Client({
    disableEveryone: true
})
const axios = require("axios")


//=============================================
const channel_id = "1161629471217037357"
//=============================================


client.on('message', async (message) => {
  if (!message.guild) return;
  if (message.author.bot) return;
  try {
  if (message.channel.id != channel_id) return
  let res = await axios.get(`http://api.brainshop.ai/get?bid=153868&key=rcKonOgrUFmn5usX&uid=1&msg=${encodeURIComponent(message.content)}`);
  message.reply(res.data.cnt);
  } catch {
   errorEmbed(`Bot error, please try again!`,message)
   }
})
client.on('ready', () => {
  client.user.setStatus('online')
  client.user.setStatus('idle')
  client.user.setStatus('dnd')
  client.user.setStatus('invisible');

  client.user.setStatus('invisible').then(() => {
    console.log('e');
});

  client.user.setPresence({
    activity: {
      type: "LISTENING",
      name: "the 4fuck klan" 
},
    status:'dnd'
});

})

client.login(process.env.TOKEN);