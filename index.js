const Discord = require('discord.js')
const bot = new Discord.Client();

const PREFIX = '?';

var version = ('V1.01')

var array = ['memes1', 'memes2', 'memes3'];

bot.on('ready', () =>{
    console.log('this bot is online AND IM GOING TO RAPE U HARDDDDD');
    bot.user.setActivity('people neck-rope', { type: 'WATCHING'}).catch(console.error);
})

bot.on('message', message=>{
    
    if(!message.content.startsWith(PREFIX)) return;
    let args = message.content.substring(PREFIX.length).split(" ");
    
    switch(args[0]){
        case 'what-do-u-like':
            message.channel.sendMessage('i like raping little kids! :)')
            break;
        case 'do-my-homework':
            message.channel.sendMessage('lol no do your own dirty work bi-')
            break;
        case 'tell-me-about-u':
            message.channel.sendMessage('im Timer! a bot that @theoofverse coded in visual studio and discord.js which is cool. i can do alot of different things but remember im still in my infency!')
            break;
        case 'pls-sleep-with-me!':
            message.channel.sendMessage('WHAT? ~~I THOUGHT WE ALWAYS DID!~~ THAT IS WEIRD!')
            break;
        case 'randomNumber':
            var result = Math.floor((Math.random() * replies.length))
            message.channel.send(array[result])
        break;
            
        case 'info':
            if(args[1] === 'version'){
                message.channel.sendMessage('timer (me) is at version ' + version);
            }else{
                if(args[1] === 'server'){
                    message.channel.sendMessage('this server is a place of freedom and memes where u can go onto the catogorys and do whatever u want in "legal restriction" of course! :)');
                }else{
                    message.channel.sendMessage('dude what kind of info do u want tell me now pls?')
            }
            }
            
        break;

        case 'lets-meme':
            const embed = new Discord.RichEmbed()
            .setTitle('your personal information')
            .addField('your name', message.author.username)
            .addField('your credit card', '0361 8502 3601 5821')
            .addField('ur moms name', 'Yo Mama')
            .setColor(0x27DDEF)
            message.channel.sendEmbed(embed);
        break;
            
        case 'you-should-be-in-prison':
            message.author.send('*how the hell did u know thats a secret dont say that again!!!*')
            break;   
    }
})

bot.login(process.env.BOT_TOKEN);
