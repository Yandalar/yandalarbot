const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', event => { 
    console.log('Bot logueado.') 
});

bot.login(process.env.TOKEN);

bot.on('message', msg => { 
    console.log(message.content); 
});

const express = require('express');
const app = express();
app.listen(process.env.PORT, () => { console.log('servidor web iniciado')});

