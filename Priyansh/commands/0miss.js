const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "gmiss",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Fixed By Arun Kumar",
  description: "goibot2",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("DD/MM/YYYY || HH:mm:ss");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\nTujhe Yaad Kar Loon Toh Mil Jata Hai Sukoo Mere Ghamon Ka Ilaaj Bhi Kitna Sasta Hai.🖤😇✍️\n\n❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\n𝐈 𝐌𝐈𝐒𝐒 𝐘𝐎𝐔 𝐀 𝐋𝐎𝐓 🥹🙃", "❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\nTabiyat Apni Ghabrati Hai Sunsaan Raaton Mein,😒 Hum Aise Mein Teri Yaadon Ki Chadar Taan Lete Hain.😶‍🌫️🤗✍️\n\n❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\n𝐈 𝐌𝐈𝐒𝐒 𝐘𝐎𝐔 𝐀 𝐋𝐎𝐓 🥹🙃", "❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\nBadi Gustakh Hai Tumhari Yaad Ise Tameez Sikha Do,😏 Dastak Bhi Nahi Deti Aur Dil Mein Utar Jati Hai.🫢✍️\n\n❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\n𝐈 𝐌𝐈𝐒𝐒 𝐘𝐎𝐔 𝐀 𝐋𝐎𝐓 🥹🙃", "❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\nTeri Yaadon Ko Pasand Hai Meri Aankhon Ki Nami,🥹 Hasna Bhi Chahu Toh Rula Deti Hai Teri Kami.🙃🖤\n\n❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\n𝐈 𝐌𝐈𝐒𝐒 𝐘𝐎𝐔 𝐀 𝐋𝐎𝐓 🥹🙃", "❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\nBus Itna Bataa do Humein, Intezaar Karein Aapka ya Badal Jaayein Hum Aapki Tarah…😒🥹✍️\n\n❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\n𝐈 𝐌𝐈𝐒𝐒 𝐘𝐎𝐔 𝐀 𝐋𝐎𝐓 🥹🙃", "❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\nHar Ek Pehlu Tera Mere Dil Me Abaad Ho Jaye,❤️ Tujhe Main Iss Kadar Dekhu Mujhe Tu Yaad Ho Jaye.😇🙃✍️\n\n❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\n𝐈 𝐌𝐈𝐒𝐒 𝐘𝐎𝐔 𝐀 𝐋𝐎𝐓 🥹🙃", "❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\nKaise Badal Loon ye Aadat Main Apni,🤔 Ki Mujhe Tujhe Yaad Karne ki Aadat Ho Gai Hai.🫢\n\n❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\n𝐈 𝐌𝐈𝐒𝐒 𝐘𝐎𝐔 𝐀 𝐋𝐎𝐓 🥹🙃", "❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\nItna na Yaad 😇 Aao ki Khud ko Tum🧕Samajh Baithe, Mujhe Ehsas😌Rahne do Meri apni bhi Kahani🤗hai,\n\n❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\n𝐈 𝐌𝐈𝐒𝐒 𝐘𝐎𝐔 𝐀 𝐋𝐎𝐓 🥹🙃", "❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\nSarahade 🚧 Tod Kar Aa Jati hai Kisi PaNchii 🐦 ki Tarah, Ye Teri Yaad😒hai jo Bant'ti nhi Kisi Mulkon 🌎  ki Tarah,\n\n❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\n𝐈 𝐌𝐈𝐒𝐒 𝐘𝐎𝐔 𝐀 𝐋𝐎𝐓 🥹🙃", "❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\nTeri🧕hi Yaad me Gujar Jati hai, Jise log rat 🌒 kahate hai,\n\n❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\n𝐈 𝐌𝐈𝐒𝐒 𝐘𝐎𝐔 𝐀 𝐋𝐎𝐓 🥹🙃", "❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\nAapki Yaad aai hai Sanse Jara🙋‍♂️Ahista chalo, Dhadkano💓se bhi Ibadat me khalal😏Padta hai,\n\n❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\n𝐈 𝐌𝐈𝐒𝐒 𝐘𝐎𝐔 𝐀 𝐋𝐎𝐓 🥹🙃", "❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\nHum Kaise 🤷🏻‍♂️ Yaad nhi Karte Tumhe, Is baat ki Hairani hai, Yahan to har Sans🗣️me Tere Mere Piyar💑ki Meharbani hai,\n\n❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\n𝐈 𝐌𝐈𝐒𝐒 𝐘𝐎𝐔 𝐀 𝐋𝐎𝐓 🥹🙃", "❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\nTut Jayegi🧕Teri Zidd ki Aadat us⏰ Waqt, Jab Milegi Khabar📢Tujhko ki Yaad Karne😎 Wala... Ab Yaad ban🤷🏻‍♂️Yaya hai.\n\n❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\n𝐈 𝐌𝐈𝐒𝐒 𝐘𝐎𝐔 𝐀 𝐋𝐎𝐓 🥹🙃", "❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\nUtni Bar to Sans🗣️bhi Nhi Lete hum, Ek Din me Jitne Bar Tumhen🤗Yaad karte hai,\n\n❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\n𝐈 𝐌𝐈𝐒𝐒 𝐘𝐎𝐔 𝐀 𝐋𝐎𝐓 🥹🙃", "❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\nFir tumhari🧕yaad fir tumhari aash Fir tumhari🗣️baten, Aye dil❤lagta hai tadapne ka Bahut shauk hai🤗tumhen, \n\n❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\n𝐈 𝐌𝐈𝐒𝐒 𝐘𝐎𝐔 𝐀 𝐋𝐎𝐓 🥹🙃", "❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\nKabhi yaad🤔ate hai kabhi tumhare khawab😴ate hai, Mujhe😎satane ke salike to🧕tumhe Behisab ate hai,😏\n\n❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\n𝐈 𝐌𝐈𝐒𝐒 𝐘𝐎𝐔 𝐀 𝐋𝐎𝐓 🥹🙃", "❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\nKash Tumhe🧕Kabhi Fursata me Yah🤔khayal aa jaye, Koi Yaad😇Karta hai Tumhe 🤗Zindagi Samajh kar,\n\n❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\n𝐈 𝐌𝐈𝐒𝐒 𝐘𝐎𝐔 𝐀 𝐋𝐎𝐓 🥹🙃", "❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\nKhuda🤲 Kare is Dil ki🗣️Aawaz me Itna Asar ho Jaye, Jiski😓Yaad me Tadap Rahe hai😎 Hum, Bas use Khabar🙄ho Jaye,\n\n❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\n𝐈 𝐌𝐈𝐒𝐒 𝐘𝐎𝐔 𝐀 𝐋𝐎𝐓 🥹🙃", "❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\nMulakate💏na Sahi par Thoda📲 Baat hi Kar Lo, Duwao🤲me hi Sahi Thoda☹️ Yaad hi Kar Lo,\n\n❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\n𝐈 𝐌𝐈𝐒𝐒 𝐘𝐎𝐔 𝐀 𝐋𝐎𝐓 🥹🙃", "❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\nʼʼTeri Mohabbat💑par Mera Haq to❌nhi par, Dil💓 Chahata hai Akhri Sans🗣️tak Intejar Karun,ʼʼ\n\n❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\n𝐈 𝐌𝐈𝐒𝐒 𝐘𝐎𝐔 𝐀 𝐋𝐎𝐓 🥹🙃", "❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\nʼʼChhalak Jate hai😥Anshu jab Apki🤔 Yaad Aati Hai, Ye wo Barish🌧hai Jiska koi Mausam nhi Hotaʼʼ\n\n❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\n𝐈 𝐌𝐈𝐒𝐒 𝐘𝐎𝐔 𝐀 𝐋𝐎𝐓 🥹🙃", "❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\nʼʼBesabr Aankho👀ki Tadap Aur bhi🤗 Badh Jati hai, Jab Dil❤Tumahre Deedar🧐ki Zidd Karta Haiʼʼ\n\n❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\n𝐈 𝐌𝐈𝐒𝐒 𝐘𝐎𝐔 𝐀 𝐋𝐎𝐓 🥹🙃", "❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\nʼʼFir Apki🧕Yaad fir Apki Aash Fir Apki🗣️Baten, Aye Dil❤Lagta hai Tadapne ka Bahut shauk hai🤗Tumhenʼʼ\n\n❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\n𝐈 𝐌𝐈𝐒𝐒 𝐘𝐎𝐔 𝐀 𝐋𝐎𝐓 🥹🙃"]
  var rand = tl[Math.floor(Math.random() * tl.length)]
   mess = "{name}"

  if (event.body.indexOf("I Miss You Bot") == 0 || (event.body.indexOf("I Miss You") == 0 || (event.body.indexOf("Miss You Bot") == 0 || (event.body.indexOf("Bot Miss You") == 0 || (event.body.indexOf("i miss you bot") == 0 || (event.body.indexOf("i miss you") == 0 || (event.body.indexOf("miss you bot") == 0 || (event.body.indexOf("bot miss you") == 0 || (event.body.indexOf("I MISS YOU BOT") == 0 || (event.body.indexOf("I MISS YOU") == 0 || (event.body.indexOf("MISS YOU BOT") == 0 || (event.body.indexOf("BOT MISS YOU") == 0 || (event.body.indexOf("i miss u bot") == 0 || (event.body.indexOf("I miss you") == 0 || (event.body.indexOf("I miss you bot") == 0 || (event.body.indexOf("Miss you") == 0 ||(event.body.indexOf("I mich you") == 0 ))))))))))))))))) {
    var msg = {
      body: `𒁍 𓆩๛⃝${name}‣᭄𓆪 𑁍🪶🩷\n\n${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
