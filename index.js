const Discord = require('discord.js')
const bot = new Discord.Client();

const PREFIX = '?';

var version = ('V1.41')

var array1 = ['i like raping little kids! :)', 'i work all day keeping myself online, boring life', 'MASTURBATING BOI!!! ;D'];
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

        case 'what-u-like':
            var result1 = Math.floor((Math.random() * array1.length))
            message.channel.send(array1[result1])
        break;

        case 'do-my-homework':
            var result2 = Math.floor((Math.random() * array2.length))
            message.channel.send(array2[result2])
        break;

        case 'goodat':
            if (!args[1]){
                message.channel.sendMessage('good at what? oxygen?')
                return;
            }
            var result3 = Math.floor((Math.random() * array3.length))
            message.channel.send(array3[result3])
        break;

        case 'rule-34':
            message.channel.sendMessage('very horny ;) http://bit.ly/2HPQ1JW')
        break;
		
        case 'spin-the-mis':
            var result4 = Math.floor((Math.random() * array4.length))
            message.channel.send(array4[result4])
        break;
	
	case 'commands':
            const embed = new Discord.RichEmbed()
            .setTitle('Timer Commands')
            .addField('?what-u-like', 'ask me what i like')
            .addField('?do-my-homework', '(try) and make me do my homework')
            .addField('?goodat [something]', 'ask what im good at')
            .addField('?rule-34', ';)')
            .addField('?prisoner', 'call me out (please dont)')
            .addField('------------', 'INFO COMMANDS')
	    .addField('?info goes before these ', ' ------------')
            .addField('server', 'ask info bout the server')
            .addField('version', 'ask info bout the version')
            .addField('bot', 'ask even more info bout me')
            .addField('kids', 'time to call good old cops')
            .setColor(0xFE642E)
            .setThumbnail(message.author.avatarURL); 
            message.channel.send(embed);
        break;	    
            
        // INFO CASES

        case 'info':
            if(args[1] === 'version'){
                message.channel.sendMessage('timer (me) is at version ' + version);
            }else{
                if(args[1] === 'server'){
                    message.channel.sendMessage('this server is a place of freedom and memes where u can go onto the catogorys and do whatever u want in "legal restriction" of course! :)');
                }else{
                    if(args[1] === 'bot'){
                        message.channel.sendMessage('im Timer! a bot that theoofverse coded in visual studio and discord.js which is cool. i can do alot of different things kinda useless but idc i will murder & rape you! :))))');
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
