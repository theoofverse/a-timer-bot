const Discord = require('discord.js');
const {Client, Attachment} = require('discord.js');
const bot = new Client();

var PREFIX = '>';
var version = '1.0.0';
const answer = 'Yes';

var MODROLE = 'Mods';
var WELCOME = true;
var NAME = 'welcoming-children'

bot.on('ready', () =>{
    console.log('this bot is online');
    bot.user.setActivity('>help', { type: 'PLAYING'}).catch(console.error);
})

var EightBall = ['Yep', 'Nope', 'Of course!', 'Never!'];
var MiniGame1 = ['You were unsuccesful, I couldnt sacrifice them for you, so take this peice offering: a cooked dinosour', 'Sorry but the police came and didnt let me sacrifce them for you, im not sorry you peice of sh%t what is wrong with you!', 'I sacrificed them for you, how do you feel? You just made me commit a murder!'];
var MiniGame2 = ['Paper!', 'Rock!', 'Scissors!']
var GoodAt = ['Ya know what? i aint bad at that!', 'omg im so good yeas mlg LOLOWD', 'the fricc i succ', 'FRICC IM GOOD AT THAT O0WQFIOWKF', 'THE HELL I SUCK AT THAT']

bot.on('guildMemberAdd', member =>{
    const image = new Attachment("https://castleberryfairs.com/wp-content/uploads/2014/05/welcome.png");
    const channel = member.guild.channels.find(channel => channel.name === NAME);
    if(!channel) return;
    
    if(WELCOME === true){
        channel.send(`Welcome to the server, ${member}`)
        channel.send(channel.author, image)
    }
})

bot.on('guildMemberRemove', member =>{
    const image2 = new Attachment("https://3.bp.blogspot.com/-ng2rng7oSqI/WopEyH08-VI/AAAAAAAID5g/AN0JAyEjVtoMX5_RZojRxKXiypmTKjc3QCLcBGAs/s1600/goodbye_PNG24.png");
    const channel = member.guild.channels.find(channel => channel.name === NAME);
    if(!channel) return;

    if(WELCOME === true){
        channel.send(`${member} just left :(`)
        channel.send(channel.author, image2)
    }
})

bot.on('message', message =>{

    if(!message.content.startsWith(PREFIX)) return;
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){

        // NORMAL COMMANDS
        case 'info':
            if(args[1] === 'version'){
                message.channel.send('Bot is at version ' + version);
            }else{
                if(args[1] === 'author'){
                    message.channel.send('Bot was made by TheOofverse, pretty kool memer');
                }else{
                    if(args[1] === 'making'){
                        message.channel.send('Bot was made in Visual Studio Code, and Node.js, and time...');
                    }else{
                        message.channel.send('Invalid Arguments, please try again')
                    }
                }
            }
        break;
        

        // FUN COMMANDS
        case '8ball':
            if(!args[1]){
                message.reply('You need to put a question after `8ball`')
                return;
            }
            var result2 = Math.floor((Math.random() * EightBall.length))
            message.channel.send(EightBall[result2])
        break;
		case 'goodAt':
		    if(!args[1]){
				message.reply('good at what? put something after `' + PREFIX + 'goodAt`')
				return;
			}
			var result5 = Math.floor((Math.random() * GoodAt.length))
			message.channel.send(GoodAt[result5])
		break;

        // EMBED COMMANDS
        case 'userInfo':
            const embed = new Discord.RichEmbed()
            .setTitle('User Info')
            .addField('Username:', message.author.username)
            .addField('Virgin?', answer)
            .addField('Current Server:', message.guild.name)
            .setThumbnail(message.author.avatarURL)
            .setFooter('Bot made by TheOofverse')
            .setColor(0x3743AD);
            message.channel.send(embed);
        break;

        case 'help':
            const embed2 = new Discord.RichEmbed()
            .setTitle('Bot Commands')
            .addField('sacrifice', 'Putting in `' + PREFIX + 'sacrifice` will do nothing because **you need to sacrifice something-** *Cough* what?')
            .addField('8ball', 'Putting `' + PREFIX + '8ball` will do nothing because you need to ask a question E.G: `' + PREFIX + '8ball whats the point to life?`')
            .addField('userInfo', 'Putting `' + PREFIX + 'userInfo` will make me respond with info about the user who messaged')
            .addField('rps', 'Putting `' + PREFIX + 'rps` will challenge me to a game of rock paper scissors! Remember to put `rock, paper, or scissors` after `' + PREFIX + 'rps`')
            .addField('goodAt', 'Putting in`' + PREFIX + 'goodAt` will do nothing cuz you need to put something AFTER `goodat` E.G: `' + PREFIX + 'goodAt child pornography`')
			.addField('--------------------', '**OTHER**')
            .addField('Info', "You put `" + PREFIX + 'info` before: `version, author, making`')
            .addField('**For Mods:**', 'Put in `' + PREFIX + 'settings` for more Info')
			.addField(PREFIX + 'kick [user]', 'kick the user!')
			.addField(PREFIX + 'ban [user] [reason]', 'ban the user!')
            .setFooter('Bot made by TheOofverse')
            .setThumbnail("https://tse1.mm.bing.net/th?id=OIP.dTsN0qVxsv0v24T1bn9hpQHaHa&pid=Api")
            .setColor(0x3743AD);
            message.channel.send(embed2)
        break;

        // MUTE/KICK/BAN COMMANDS
        case 'kick':
            if(!message.member.roles.find(r => r.name === MODROLE)) return message.channel.send('You are not a moderator')

            const user = message.mentions.users.first();
            if(user){
                const member = message.guild.member(user);
                if(member){
                    member.kick('You have been kicked!').then(() =>{
                        message.reply(`${user.tag} has been kicked succesfully!`)
                    }).catch(err =>{
                        message.reply('I was unable to kick the user')
                        console.log(err);
                    })
                }else{
                    message.reply("That user isn't in this server")
                }
            }else{
                message.reply("You need to specify who to kick!")
            } 
        break;   

        case 'ban':
            if(!message.member.roles.find(r => r.name === MODROLE)) return message.channel.send('You are not a moderator')

            const user2 = message.mentions.users.first();
            if(user2){
                const member2 = message.guild.member(user2);
                if(member2){
                    member2.ban({reason: args[2]}).then(() =>{
                        const channel = member2.guild.channels.find(channel => channel.name === "welcome");
                        if(!channel) return;
                        channel.send(`${user2.tag} has been banned from this server!`)
                    })
                }else{
                    message.reply("That user isn't in this server")
                }
            }else{
                message.reply("You need to specify who to ban!")
            } 
        break; 
        
        // SETTINGS
        case 'settings':
            if(!message.member.roles.find(r => r.name === MODROLE)) return message.channel.send('You are not a moderator')

            if(args[1] === 'prefix'){
                if(args[2]){
                    PREFIX = args[2];
                    message.channel.send('Changed Prefix to ' + args[2]);
                }else{
                    message.channel.send('Put something after prefix')
                }
            }else{
                if(args[1] === 'commander'){
                    if(args[2]){
                        MODROLE = args[2];
                        message.channel.send('Changed CommanderRole to ' + args[2]);
                    }else{
                        message.channel.send('What role should be commander? (dont @mention the role just type the name in)')
                    }
                }else{
                    if(args[1] === 'welcome'){
                        if(args[2]){
                            if(args[2] === 'enable'){
                                WELCOME = true;
                                message.channel.send('Enabled Welcoming and Goodbying')
                            }else{
                                if(args[2] === 'disable'){
                                    WELCOME = false;
                                    message.channel.send('Disabled Welcoming and Goodbying')
                                }else{
                                    if(args[2] === 'name'){
                                        if(args[3]){
                                            NAME = args[3]
                                            message.channel.send('Changed channel I will welcome in to ' + args[3])
                                        }else{
                                            message.channel.send('what channel? type in the name of the channel (do not @mention it)')
                                        }
                                    }else{
                                        message.channel.send('Invalid Arguments')
                                    }
                                }
                            }
                        }else{
                            message.channel.send('should i enable welcoming or disable it?')
                        }
                    }else{
                        const embed3 = new Discord.RichEmbed()
                        .setTitle('Settings')
                        .addField('Remember:', '`' + PREFIX + 'settings` goes before all')
                        .addField('prefix', 'putting `prefix` after will do nothing because you need to add what you want to change it to E.G: `' + PREFIX + 'settings prefix !`')
                        .addField('commander', 'putting `commander` after will do nothing cuz you need to type in the name of whatever role you want to be commander of the Bot')
                        .addField('welcome', 'putting `welcome` after will do nothing cuz you need to either enable or disable it E.G: `' + PREFIX + 'settings welcome disable`, you can also type in `name` and then the name of the channel you want me to welcome in')
                        .setFooter('Bot made by TheOofverse')
                        .setThumbnail("https://image.freepik.com/free-icon/gear-rotation_318-56336.jpg")
                        .setColor(0x3743AD);
                        message.channel.send(embed3)
                    }
                }
            }
        break;

        // MINI-GAMES
        case 'sacrifice':
            if(!args[1]){
                message.reply('Who do you want to sacrifice? Mention someone with @')
                return;
            }
            message.channel.send('Sacrificing ' + args[1] + ' and...')
            var result3 = Math.floor((Math.random() * MiniGame1.length))
            message.channel.send(MiniGame1[result3])
            message.channel.send('Also you suck')
        break;

        case 'rps':
            if(!args[1]){
                message.reply('Remember to put either `rock`, `paper` or `scissors`')
                return;
            }
            if(args[1] === 'rock'){
                var result4 = Math.floor((Math.random() * MiniGame2.length))
                message.channel.send(MiniGame2[result4])
                if(result4 === 0){
                    message.channel.send("Lol I beat you, you truly suck!")
                }
                if(result4 === 1){
                    message.channel.send("Let's do a rematch")
                }
                if(result4 === 2){
                    message.channel.send("FRICC WTH FIEWJIFEW")
                }
            }else{
                if(args[1] === 'paper'){
                    var result4 = Math.floor((Math.random() * MiniGame2.length))
                    message.channel.send(MiniGame2[result4])
                    if(result4 === 0){
                        message.channel.send("Let's do a rematch")
                    }
                    if(result4 === 1){
                        message.channel.send("FRICC WTH FIEWJIFEW")
                    }
                    if(result4 === 2){
                        message.channel.send("Lol I beat you, you truly suck!")
                    }
                }else{
                    if(args[1] === 'scissors'){
                        var result4 = Math.floor((Math.random() * MiniGame2.length))
                        message.channel.send(MiniGame2[result4])
                        if(result4 === 0){
                            message.channel.send("FRICC WTH FIEWJIFEW")
                        }
                        if(result4 === 1){
                            message.channel.send("Lol I beat you, you truly suck!")
                        }
                        if(result4 === 2){
                            message.channel.send("Let's do a rematch")
                        }
                    }else{
                        message.reply('thats not valid')
                    }
                }
            }

            // XP SYSTEM
            
    }
})

bot.login(process.env.BOT_TOKEN);
