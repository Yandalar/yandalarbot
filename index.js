const discord = require('discord.js');
const bot = new discord.Client();
bot.on('ready', event => { console.log('bot logueado.') });
bot.login(process.env.TOKEN);
bot.on('message', msg => { msg.reply(msg.content) });

const express = require('express');
const app = express();
app.listen(process.env.PORT, () => { console.log('servidor web iniciado')});

