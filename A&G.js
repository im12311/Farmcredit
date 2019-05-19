const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NTc5NTMyOTk0MDA4ODQyMjQw.XODidQ.JLLo6qCclWkDUG0fT7VeH2liNZM
');


const { getInfoFromName } = require('myanimelists');
client.on('message', message => {
let anime = message.content.split(" ").slice(1).join(" ")
if(message.content.startsWith(ag + 'anime')) {
    if(!anime) return message.channel.send('Please Write The Anime Name Example: !anime dragon ball')
getInfoFromName(anime)
    .then(result => message.channel.send(result.url))
    .catch(error => console.log(error));
}
});

client.on('message', message => {
                   if(!message.channel.guild) return;
                if(message.content.startsWith(ag + 'bc1')) {
                if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
                if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
                let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
                let BcList = new Discord.RichEmbed()
                .setThumbnail(message.author.avatarURL)
                .setAuthor(`محتوى الرساله ${args}`)
                .setDescription(`برودكاست بـ امبد 📝\nبرودكاست بدون امبد✏ \nلديك دقيقه للأختيار قبل الغاء البرودكاست`)
                if (!args) return message.reply('**يجب عليك كتابة كلمة او ��ملة لإرسال البرودكاست**');message.channel.send(BcList).then(msg => {
                msg.react('📝')
                .then(() => msg.react('✏'))
                .then(() =>msg.react('📝'))
                 
                let EmbedBcFilter = (reaction, user) => reaction.emoji.name === '📝' && user.id === message.author.id;
                let NormalBcFilter = (reaction, user) => reaction.emoji.name === '✏' && user.id === message.author.id;
                 
                let EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });
                let NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });
                 
                EmbedBc.on("collect", r => {
                message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));
                message.guild.members.forEach(m => {
                var bc = new
                Discord.RichEmbed()
                .setColor('RANDOM')
                .setDescription(`Message : ${args}`)
                .setAuthor(`Server : ${message.guild.name}`)
                .setFooter(`Sender : ${message.author.username}`)
                .setThumbnail(message.author.avatarURL)
                m.send({ embed: bc })
                msg.delete();
                })
                })
                NormalBc.on("collect", r => {
                  message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));
                message.guild.members.forEach(m => {
                m.send(args);
                msg.delete();
                })
                })
                })
                }
                });


client.on('message', function(msg) {
    if(msg.content.startsWith (ag  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField('🌐** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField('🏅** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField('🔴**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField('🔵**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField('📝**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField('🎤**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField('👑**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField('🆔**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)

      .addField('📅**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())

      msg.channel.send({embed:embed});
    }
  });


client.on ("guildMemberAdd", members => {
  
   var role = member.guild.roles.find ("name", "اسـم رتـب هنا");
   member.addRole (role);
  
})


client.on('message', message => {

  let totalDMs = client.channels.filter(function (s) {
      if (s.type && s.type === 'dm') {
          return true;
      }
      return false;
  })

  let totalTextChannels = client.channels.filter(function (s) {
      if (s.type && s.type === 'text') {
          return true;
      }
      return false;
  })

  let cpu = os.cpus();
  let cpuArray = cpu[0].model.replace(/\s+/g, " ").trim().split(" ");
  let cpuCores = cpu.length;
  let cpuSpeed = (cpu[0].speed / 1000) + "MHZ";
  if (message.content.startsWith(prefix + "stats") || message.content.startsWith(prefix + "bot")) {
      message.channel.send({
          embed: new Discord.RichEmbed()
              .setColor('RANDOM')
              .setTitle('❯ | Stats.')
              .addField('» Ping:', `**\`${client.ping}\`ms.**`)
              .addField('» RAM Usage:', `**\`${(process.memoryUsage().rss / 1048576).toFixed()}\`MB.**`)
              .addField('» Guilds:', `**\`${client.guilds.size}\`**`)
              .addField('» Channels:', `**\`${client.channels.size}\`**`)
              .addField('» Users:', `**\`${client.users.size}\`**`)
              .addField('» Name/Tag:', `**\`${client.user.tag} | (${client.user.id})\`**`)
              .addField('» Platform:', `**\`${os.platform()}\`**`)
              .addField('» CPU:', `**\`${cpuArray[0]} ${cpuArray[1]}\`**`)
              .addField('» CPU Specs:', `**\`${cpuCores} @ ${cpuSpeed}\`**`)
              .addField('» Private Conversations:', `**\`${totalDMs.size}\`**`)
              .addField('» Developers:', `**<@523865295337553921>**`)
              .addField('» prefix:', `**ag**`)
      })
  }
})


client.on('message', function(message) { /// Snow Codes
    if (!message.member.hasPermissions(['ADMINISTRATOR'])){ /// Snow Codes
            let command = message.content.split(" ")[0]; /// Snow Codes
        if(message.content.includes('discord.gg')){ /// Snow Codes
        message.reply (' ') /// Snow Codes
           if(!message.channel.guild) return message.reply('** This command only for servers**'); /// Snow Codes
     message.member.addRole(message.guild.roles.find('name', 'Muted'));  /// Snow Codes
    const embed500 = new Discord.RichEmbed() /// Snow Codes
      .setTitle("❌ | تمت معاقبتك") /// Snow Codes
            .addField(`** لقد قمت بمخالفة قوانين السيرفر من خلال نشر سيرفرات اخرى  **` , `**ان كأن هاذه الميوت عن طريق الخطأ تواصل مع احد اعضاء الادارة**`) /// Snow Codes
      .addField(`Snow`,`Codes`) /// Snow Codes
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`) 
            .setAuthor(message.author.username, message.author.avatarURL) 
        .setFooter(`${message.guild.name} Server`)
     message.channel.send(embed500) 
    
        
    }
    }
})

client.on('message', message => {
                   if(!message.channel.guild) return;
                if(message.content.startsWith(ag + 'bc1')) {
                if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
                if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
                let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
                let BcList = new Discord.RichEmbed()
                .setThumbnail(message.author.avatarURL)
                .setAuthor(`محتوى الرساله ${args}`)
                .setDescription(`برودكاست بـ امبد 📝\nبرودكاست بدون امبد✏ \nلديك دقيقه للأختيار قبل الغاء البرودكاست`)
                if (!args) return message.reply('**يجب عليك كتابة كلمة او ��ملة لإرسال البرودكاست**');message.channel.send(BcList).then(msg => {
                msg.react('📝')
                .then(() => msg.react('✏'))
                .then(() =>msg.react('📝'))
                 
                let EmbedBcFilter = (reaction, user) => reaction.emoji.name === '📝' && user.id === message.author.id;
                let NormalBcFilter = (reaction, user) => reaction.emoji.name === '✏' && user.id === message.author.id;
                 
                let EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });
                let NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });
                 
                EmbedBc.on("collect", r => {
                message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));
                message.guild.members.forEach(m => {
                var bc = new
                Discord.RichEmbed()
                .setColor('RANDOM')
                .setDescription(`Message : ${args}`)
                .setAuthor(`Server : ${message.guild.name}`)
                .setFooter(`Sender : ${message.author.username}`)
                .setThumbnail(message.author.avatarURL)
                m.send({ embed: bc })
                msg.delete();
                })
                })
                NormalBc.on("collect", r => {
                  message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));
                message.guild.members.forEach(m => {
                m.send(args);
                msg.delete();
                })
                })
                })
                }
                });


client.on('message', message => {
    const swearWords = ["heck", "damn","darn"]; كس امك انيكك انيك امك يا منيوك طيز امك يا قحية

    if( swearWords.some(word => message.content.includes(word)) ) {
        message.delete();
        message.author.send('Hey! That word has been banned, please don\'t use it!');
      }
})

const { getInfoFromName } = require('myanimelists');
 
 
          client.on('message', message => {
            let anime = message.content.split(" ").slice(1).join(" ")
            if(message.content.startsWith(ag + 'anime')) {
                if(!anime) return message.channel.send('Please Write The Anime Name Example: !anime dragon ball')
            getInfoFromName(anime)  
                .then(result => {
                    let embed = new Discord.RichEmbed()
                .setTitle(result.title)
                .addField('Trailer:', `${result.trailer}` || `Unknown`)
                .addField('Episodes:', `${result.episodes}` || `Unknown`)
                .addField('Status:', `${result.status}` || `Unknown`)
                .addField('Studios:', `${result.studios}` || `Unknown`)
                .addField('Genres:', `${result.genres}` || `Unknown`)
                .addField('Ranked:', `${result.ranked}` || `Unknown`)
                .addField('Favorites', `${result.favorites}` || `Unknown`)
                .addField('Rating:', `${result.rating}` || `Unknown`)
                .addField('Premiered:', `${result.premiered}` || `Unknown`)
                .addField('Duration:', `${result.duration}` || `Unknown`)
                .addField('Score:', `${result.score}` || `Unknown`)
                .addField('Scored By:', `${result.scoreStats} ` || `Unknown`)
                .setDescription(`${result.synopsis || 'Unknown'}`)
                .setImage(result.picture)  
                .setColor('#0a0000')
                message.channel.sendEmbed(embed)
                })
                .catch(error => console.log(error));
            }})


client.on("message", async message => {
            if(!message.channel.guild) return;
            var ag = "!";
        if(message.content.startsWith(ag + 'invites')) {
        var nul = 0
        var guild = message.guild
        await guild.fetchInvites()
            .then(invites => {
             invites.forEach(invite => {
                if (invite.inviter === message.author) {
                     nul+=invite.uses
                    }
                });
            });
          if (nul > 0) {
              console.log(`\n${message.author.tag} has ${nul} invites in ${guild.name}\n`)
              var embed = new Discord.RichEmbed()
                  .setColor("#000000")
                    .addField(`${message.author.username}`, `لقد قمت بدعوة **${nul}** شخص`)
                          message.channel.send({ embed: embed });
                      return;
                    } else {
                       var embed = new Discord.RichEmbed()
                        .setColor("#000000")
                        .addField(`${message.author.username}`, `لم تقم بدعوة أي شخص لهذة السيرفر`)
 
                       message.channel.send({ embed: embed });
                        return;
                    }
        }
		
		client.on('message',function(message) {
    let w = ['Rock','Paper','Scissors'];
   if(message.content.startsWith(prefix + "rps")) {
       message.channel.send(`\`\`\`css
Choose one of the following.
#1 ( حجره )
#2 ( ورقة )
#3 ( مقص )
\`\`\`

__امامك  5 توان للاختيار__`)
.then(() => {
  message.channel.awaitMessages(response => response.content === '1', {
    max: 1,
    time: 5000,
    errors: ['time'],
  })
  .then((collected) => {
      if(message.author !== message.author)return;
     message.channel.send('🏵 ' + w[Math.floor(Math.random() * w.length)]);
    });
});
  message.channel.awaitMessages(response => response.content === '2', {
    max: 1,
    time: 5000,
    errors: ['time'],
  })
  .then((collected) => {
     message.channel.send('🏵 ' + w[Math.floor(Math.random() * w.length)]);
    });
      message.channel.awaitMessages(response => response.content === '3', {
    max: 1,
    time: 5000,
    errors: ['time'],
  })
  .then((collected) => {
     message.channel.send('🏵 ' + w[Math.floor(Math.random() * w.length)]);
    });
   } 
});
