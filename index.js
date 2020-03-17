const Discord = require('discord.js')
const bot = new Discord.Client();

var MESSAGE = 'GOD YES';

const PREFIX = '?';

var version = ('V1.42')

var array1 = ['i like ||raping|| little kids! :)', 'i work all day keeping myself online, boring life', 'MASTURBATING BOI!!! ;D', 'work around the circuits and rape some other motherboards', 'fricc i dont do anything lelelel', 'well i defintly dont have threesomes like all the time UwU'];
var array2 = ["lol no do ur own dirty work u bi-", "i can't u dumb dumb", 'i hate helping people screw u!'];
var array3 = ['im pretty good at that', 'jeez i succ at that', 'i beat that like i beat my mom', 'fricc you i no good'];
var array4 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', ];
var array5 = ['yep im postive', 'nope that is false', 'duh', 'well yeah', 'no absoutley not', 'never!', 'of course!', 'what the hell never?'];
var array6 = ['*how the hell did u know thats a secret dont say that again!!!*', "are u a police men or somethin'?", 'and? its normal you dumb fu'];

bot.on('ready', () =>{
    console.log('this bot is online AND IM GOING TO RAPE U HARDDDDD');
    bot.user.setActivity('?commands', { type: 'PLAYING'}).catch(console.error);
})

bot.on('message', message=>{
    
    if(!message.content.startsWith(PREFIX)) return;
    let args = message.content.substring(PREFIX.length).split(" ");
    
    switch(args[0]){

        // NORMAL COMMANDS

        case 'whatYaLike':
            var result1 = Math.floor((Math.random() * array1.length))
            message.channel.send(array1[result1])
        break;

        case 'doMyHomework':
            var result2 = Math.floor((Math.random() * array2.length))
            message.channel.send(array2[result2])
        break;

        case 'goodAt':
            if (!args[1]){
                message.channel.sendMessage('good at what? oxygen?')
                return;
            }
            var result3 = Math.floor((Math.random() * array3.length))
            message.channel.send(array3[result3])
        break;

        case 'rule34':
            message.channel.sendMessage('very horny ;) http://bit.ly/2HPQ1JW')
        break;
		
        case 'spin-the-mis':
            var result4 = Math.floor((Math.random() * array4.length))
            message.channel.send(array4[result4])
        break;
	
	case 'commands':
            const embed = new Discord.RichEmbed()
            .setTitle('Timer Commands')
            .addField('whatYaLike', 'putting `?whatYaLike` will generate a random answer from Timer saying what he likes')
            .addField('goodAt', 'putting `?goodAt` will do nothing cuz you need to add a question E.G: `?goodAt masturbation`')
            .addField('doMyHomework', 'putting `?doMyHomework` will generate a random answer from Timer listing why he wont do your homework')
            .addField('rule34', 'putting `?rule34` will... dear god no!')
            .addField('prisoner', 'putting `?prisoner` will make Timer DM you with a **private message**')
            .addField('------------', '**INFO GRAPHICS CARD**')
            .addField('remember:', 'put `?info` before these commands')
            .addField('version', 'tells the version of the bot')
            .addField('bot', 'get info about the bot')
            .addField('server', 'get info about the original server time was made in!')
            .addField('kids', 'ask info about all the kids hes... is this sfw?')
            .addFooter('remember the prefix for a command is ?')
            .setColor(0xFE642E);
            message.channel.send(embed);
        break;	    
            
        // INFO CASES

        case 'info':
            if(args[1] === 'version'){
                message.channel.sendMessage('timer (me) is at version ' + version);
            }else{
                if(args[1] === 'server'){
                    message.channel.sendMessage('E.Gadds Labotory server is a place of freedom and memes where u can go onto the catogorys and do whatever u want in "legal restriction" of course! theres a shop, fun activites, kool events and a spaninglish voice channel!');
                }else{
                    if(args[1] === 'bot'){
                        message.channel.sendMessage('im Timer! a bot that theoofverse coded in visual studio and discord.js which is cool. i can do alot of different things that are pretty kool and while i could be used more, there aint much point!');
                    }else{
                        if(args[1] === 'kids'){
                            const embed = new Discord.RichEmbed()
                           .setTitle("Kids I've slaughturd & raped")
                           .addField('John Micheal', 'loser')
                           .addField('Samantha Brandon', 'nerd')
                           .addField('Humacufa Prologo', 'weird name')
                           .addField('Juliet Rasberry', 'fairy tale copy')
					       .addField('Timithy Young', 'he got bullied lol')
                           .addField('Marco Alexander', 'hes russian')
                           .addField('Kevin Brown', 'THAT SON OF A BI-')
                           .addField(message.author.username, 'you are next')
                           .setColor(10038562)					   
                           message.channel.sendEmbed(embed);
                        }else{
                            message.channel.sendMessage('dude what kind of info do u want tell me now pls?')
                    }
                }
            }
        }
        break;

        // PRIVATE DMS

        case 'prisoner':
            var result6 = Math.floor((Math.random() * array6.length))
            message.channel.send(array6[result6])
        break;   
    }
})

bot.login(process.env.BOT_TOKEN);
