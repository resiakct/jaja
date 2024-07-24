module.exports = {
  config: {
    name: "ai",
    description: "Talk to GPT (conversational)",
    prefix: false,
    usage: "[ask]",
    accessableby: 0
  },
  start: async function ({ text, reply, react, event}) {
    let p = text.join(' '), uid = event.senderID;
    const axios = require('axios');
    if (!p) return reply('Please enter a prompt.');
    react('✨');
    try {
      const r = (await axios.get(`${global.deku.ENDPOINT}/api/blackboxai?q=${p}&uid=${uid}`)).data;
      return reply("[ 𝗖𝗢𝗡𝗩𝗘𝗥𝗦𝗔𝗧𝗜𝗢𝗡𝗔𝗟 𝗔𝗜 ]\n\n" + r.result + '\n\n[ 𝗧𝗬𝗣𝗘 “𝗰𝗹𝗲𝗮𝗿” 𝗧𝗢 𝗖𝗟𝗘𝗔𝗥 𝗧𝗛𝗘 𝗖𝗢𝗡𝗩𝗘𝗥𝗦𝗔𝗧𝗜𝗢𝗡 𝗪𝗜𝗧𝗛 𝗔𝗜 ]');
    } catch (g) {
      return reply(g.message);
    }
  }
}