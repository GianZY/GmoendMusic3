/** @format
 *
 * Fuego By Painfuego
 * Version: 6.0.0-beta
 * © 2024 The Extremez
 */

const genButtons = require("@gen/playerButtons.js");
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
  const requester = data.requester;

  const embed = new client.embed()

    .desc(
      `**${
        title.charAt(0).toUpperCase() +
        title.substring(0, 25).slice(1).toLowerCase()
      }**\n\n` +
        `<:uptime:1259057811028049940> **Duration:** ${duration}\n` +
        `<:users:1259062697685684254> **Author**: ${
          author.charAt(0).toUpperCase() +
          author.substring(0, 15).slice(1).toLowerCase()
        }\n` +
        `<:message:1259388525233569863> **Requester:** ${requester}\n`,
    )
    .thumb(thumbnail);

  return [[embed], [], [genButtons(client, player, 4)[0]]];
};
