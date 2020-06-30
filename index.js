const Discord = require('discord.js');
const bot = new Discord.Client();
const FIX = process.env.PREFIX;

bot.on('ready', () => {
    console.log('Bot logueado.')
});

bot.login(process.env.TOKEN);

let normalRoll = /^!(?<amount>\d+)d(?<dice>\d+)/i;
let wodRoll = /^\.wod(?<amount>\d+)\s(?<dif>\d+)/i;

bot.on('message', message => {
    if (message.author.bot) {
        return;
    }
    if (message.content.startsWith('!')) {
        let match = message.content.match(normalRoll);
        if (match) {
            let amount = match.groups.amount;
            let dice = match.groups.dice;
            let roll = [];

            for (let i = 1; i <= amount; i++) {
                roll.push(Math.floor(Math.random() * dice) + 1);
            };
            sum = roll.reduce((a,b) => a + b, 0);
            message.reply(`Resultado Tirada \n [${roll}] = ${sum}`);
        } else {
            message.reply('No comprendo el comando. Tipear !help para ver mis comandos');
        }
    }
    if (message.content.startsWith('.wod')) {
        let match = message.content.match(wodRoll);
        if (match) {
            let oneRoll = 0;
            let successRoll = 0;
            let finalRoll;
            let amount = match.groups.amount;
            let dif = match.groups.dif;
            let roll = [];
            for (let i = 0; i < amount; i++){
              roll.push(Math.floor(Math.random() * 10) +1);
              if (roll[i] == 1) {
                oneRoll += 1;
              } else if (roll[i] >= dif) {
                successRoll += 1;
              }
            };
            if (successRoll == 0 && oneRoll > 0) {
              finalRoll = 'Fracaso';
            } else if (successRoll - oneRoll <= 0)  {
              finalRoll = 'Fallo';
            } else {
              finalRoll = 'Exitos';
            }
            roll = roll.sort(function(a,b) {
                return a - b;
            });
            message.reply(`Tiró: [${roll}]. Dificultad ${dif}.  Resultado: ${successRoll - oneRoll} ${finalRoll}`)
        }
    }

});



const express = require('express');
const app = express();
app.listen(process.env.PORT, () => { console.log('servidor web iniciado') });

