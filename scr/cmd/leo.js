module["exports"] = class {
  static config = {
    name: "leo",
    description: "Talk to LeoLM AI",
    accessableby: 0,
    author: "Deku",
    prefix: false,
    usage: "[ask]",
  };
  static async start({ text, reply }) {
  const { get } = require('axios')
    try {
      let q = text.join(' ')
      if (!q) return reply('Missing input!');
      const res = (await get(global.deku.ENDPOINT+"/api/ask?q="+encodeURI(q)+"&model=leo")).data;
    let msg = res.result.message
      return reply(msg);
    } catch (e) {
      return reply(e.message)
    }
  }
}