const fs = require("fs");
module.exports.config = {
	name: "gali",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭", 
	description: "no prefix",
	commandCategory: "no prefix",
	usages: "abal",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("fuck")==0 || event.body.indexOf("mc")==0 || event.body.indexOf("chod dunga")==0 || event.body.indexOf(" jhat ka bal")==0 || event.body.indexOf("bc")==0 || event.body.indexOf("maa ki chut")==0 || event.body.indexOf("xod lode")==0 || event.body.indexOf("behen chod")==0 || event.body.indexOf("randi ka")==0 || event.body.indexOf("madarchod")==0 || event.body.indexOf("chudi loda")==0 || event.body.indexOf("gala gali")==0) {
		var msg = {
				body: "(Boss Dk , Gali q Dete Ho.)",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
