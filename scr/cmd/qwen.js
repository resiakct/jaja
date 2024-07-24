module["exports"] = class {
  static config = {
    name: "qwen",
    description: "Talk to Qwen AI (conversational)",
    prefix: false,
    accessableby: 0,
    author: "Deku",
  };
  static async start({ reply, text, react, event }) {
    const { get } = require("axios");
    try {
      let ask = text.join(" ");
      if (!ask) return reply("Missing prompt!");
      react("⏳");
      const rest = (
        await get(global.deku.ENDPOINT + "/ai/qwen1.5-14b?q=" + encodeURI(ask) + '&uid=' + event.senderID)
      ).data;
     react('❤️');
      return reply("[ 𝗖𝗢𝗡𝗩𝗘𝗥𝗦𝗔𝗧𝗜𝗢𝗡𝗔𝗟 𝗔𝗜 ]\n\n"+rest.result + '\n\n[ 𝗧𝗬𝗣𝗘 “𝗰𝗹𝗲𝗮𝗿” 𝗧𝗢 𝗖𝗟𝗘𝗔𝗥 𝗧𝗛𝗘 𝗖𝗢𝗡𝗩𝗘𝗥𝗦𝗔𝗧𝗜𝗢𝗡 𝗪𝗜𝗧𝗛 𝗔𝗜 ]');
    } catch (e) {
      return reply(e.message);
    }
  }
};