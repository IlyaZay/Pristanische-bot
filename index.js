const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();

client.login(process.env.BOT_TOKEN);

client.once('ready', () =>{
	console.log('Bot running!');
});

client.on('message', message => {
	if (message.content === 'Ping') {message.channel.send('Pong');}
});