const Discord = require('discord.js')
const bot = new Discord.Client();

const PREFIX = '?';

var version = ('V1.10')

var array1 = ['i like raping little kids! :)', 'i work all day keeping myself online, boring life', 'MASTURBATING BOI!!! ;D'];
var array2 = ["lol no do ur own dirty work u bi-", "i can't u dumb dumb", 'i hate helping people screw u!'];
var array3 = ['WHAT? ~~I THOUGHT WE ALWAYS DID!~~ THAT IS WEIRD!', 'ok actually what the hell that is weird dude!', 'OH YES BOI ;)'];

bot.on('ready', () =>{
    console.log('this bot is online AND IM GOING TO RAPE U HARDDDDD');
    bot.user.setActivity('cornhub lol', { type: 'WATCHING'}).catch(console.error);
})

bot.on('message', message=>{
    
    if(!message.content.startsWith(PREFIX)) return;
    let args = message.content.substring(PREFIX.length).split(" ");
    
    switch(args[0]){
        case 'what-do-u-like':
            var result1 = Math.floor((Math.random() * array1.length))
            message.channel.send(array1[result1])
            break;
        case 'do-my-homework':
            var result2 = Math.floor((Math.random() * array2.length))
            message.channel.send(array2[result2])
            break;
        case 'tell-me-about-u':
            message.channel.sendMessage('im Timer! a bot that theoofverse coded in visual studio and discord.js which is cool. i can do alot of different things but remember im still in my infency!')
            break;
        case 'pls-sleep-with-me!':
            var result3 = Math.floor((Math.random() * array3.length))
            message.channel.send(array3[result3])
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
