const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag} !`);
	
}); 
const developers = ["461468630773661699"]
const adminprefix = "A.";
client.on('message', message => {//// حقوق @Fèarless | bÁrOd#0001
    var argresult = message.content.split(`).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.send(تم تغيير البلاينق الى   ${argresult})
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(تَم تغيير الواتشينق الى   ${argresult})
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(تَم تغيير الليسينينق الى   ${argresult})
  } else
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/paaaaaartly");
      message.channel.send(تم تغييرك حالتك بالتويتش الى   ${argresult})
  }
  if (message.content.startsWith(adminprefix + 'sn')) {
  client.user.setUsername(argresult).then
      message.channel.send(جاري تغيير الأسم لـ ..${argresult} )
} else
if (message.content.startsWith(adminprefix + 'sa')) {
  client.user.setAvatar(argresult);
    message.channel.send(جاري تغيير الأفتار... : `);
}
});

client.on('guildMemberAdd', member => {
const YossiF = member.guild.channels.get("588834994433294349");//ايدي الشات
if(!YossiF) return;
if(YossiF) {
YossiF.send(**..Welcome To  Dream..*`);

});

client.login(process.env.BOT_TOKEN);
