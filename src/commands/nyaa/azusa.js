/*
 * azusa.js - random.cat command.
 *
 * Contributed by Capuccino
 */

const request = require('request');

exports.commands = [
    'nyaa'
];

exports.nyaa = {
    desc: 'Nyaaa!',
    fullDesc: 'Gets an image from random.cat',
    main(bot, ctx) {
        return new Promise((resolve, reject) => {
            request('http://random.cat/meow', (err, res, body) => {
                if (err) {
                    reject(err);
                } else if (res.statusCode !== 200) {
                    reject(new Error(`Unexpected status code for random.cat: ${res.statusCode}`));
                } else {
                    let kitty = JSON.parse(body).file;
                    ctx.msg.channel.createMessage(kitty).then(resolve).catch(reject);
                }
            });
        });
    }
};