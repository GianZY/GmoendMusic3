/** @format
 *
 * Fuego By Painfuego
 * Version: 6.0.0-beta
 * © 2024 The Extremez
 */

const genButtons = require("@gen/playerButtons.js");
const { AttachmentBuilder } = require("discord.js");

module.exports = async (data, client, player) => {
  /*
  const title = data.title;
  const author = data.author;
  const thumbnail = data.thumbnail;
  const duration = data.duration;
  const color = data.color;
  const progress = data.progress;
  const source = data.source;
  */

  const title = data.title;
  const author = data.author;
  const duration = data.duration;
  const thumbnail = data.thumbnail;

  const embed = new client.embed()
    .addFields([
      {
        name: `**Now Playing..**`,
        value:
          `<a:reddot_:1259061050935083008> **Song <a:arrow:1229832684860211241>** _${title.substring(0, 20)}..._\n` +
          `<a:reddot_:1259061050935083008> **Author <a:arrow:1229832684860211241>** _${author}_\n` +
          `<a:reddot_:1259061050935083008> **Duration<a:arrow:1229832684860211241> **_${duration}_\n` +
          `<a:reddot_:1259061050935083008> **Requester<a:arrow:1229832684860211241> **${player.queue.current.requester}`,
        inline: true,
      },
    ])
    .thumb(thumbnail)
    .img(
      "https://telegra.ph/file/2728c85e9927ebd48a04a.gif",
    );

  return [[embed], [], [genButtons(client, player, 5)[0]]];
};
