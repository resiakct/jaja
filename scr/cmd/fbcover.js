const Deku = require("dekuai");
const deku = new Deku();
const fs = require("fs");
module.exports = {
  config: {
    name: "fbcover",
    refix: false,
    accessibleby: 0,
    description: "Generate facebook cover",
    credits: "Deku",
    category: "image",
    usage: "[name | last name | cp number | country | email | color]",
  },
  start: async function ({ reply, event, text }) {
    try {
      const fmt = `Use: ${this.config.name} ${this.config.usage}`;
      const a = text.join(" ");
      const b = a.split(" | ");
      const c = b[0]; // name
      const d = b[1]; // last
      const e = b[2]; // phone
      const f = b[3]; // country
      const g = b[4]; // email
      const h = event.senderID; // uid
      const i = b[5]; // color
      if (!c || !d || !e || !f || !g || !i)
        return reply("Wrong format!\n" + fmt);
      const j = __dirname + "/cache/fbcover.png";
      const k = await deku.fbcover(c, d, e, f, g, h, i);
      fs.writeFileSync(j, k);
      let msg = {
        body: `Name: ${c}\nLast name: ${d}\nCP number: ${e}\nCountry: ${f}\nEmail: ${g}\nColor: ${i}`,
        attachment: fs.createReadStream(j),
      };
      return reply(msg);
    } catch (e) {
      return reply(e.message);
    }
  },
};
