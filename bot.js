const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(Hi ${client.user.tag} , This Code by : YossiF);
  console.log('')
  console.log(i Have  [ " ${client.guilds.size} " ]);
});

const developers = ["461468630773661699"]
const adminprefix = "A.";
client.on('message', message => {
    var argresult = message.content.split(`).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.send(Status You   ${argresult})
  } else 
  if (message.content.startsWith(adminprefix + 'wat')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(Status You   ${argresult})
  } else 
  if (message.content.startsWith(adminprefix + 'lis')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(Status You  ${argresult})
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/gamer");
      message.channel.send(Status You ${argresult} )
 
    } else 
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(Changing The Name To ..${argresult} )
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(Changing The Avatar To :${argresult} );
}
});

client.on('guildMemberAdd', member => {
const YossiF = member.guild.channels.get("588834994433294349");//ايدي الشات
if(!YossiF) return;
if(YossiF) {
YossiF.send(**..Welcome To  Dream..*`);
}
});
