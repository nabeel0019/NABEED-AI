const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "JK~H4sIAAAAAAAAA5VU2Y7iSBD8l3oFDTY2NiC1tLbxhTnMZaBX+1DYZVPgs6p89Yh/X5me6R6ttLO9b3VmRGZE5neQZpgiB7Vg+h3kBFeQoW7J2hyBKVDLMEQE9EEAGQRTIFnxeaiWmmXMhK3qGYNAX0oTrrnXC3Hf4ECSalMz03wUH17Aow/y8hJj/zcBq62W1ptJYFf708hnTZ6kHK8VkmFEO4Vvktl1nM5Hom7V9Qt4dBEhJjiN9PyKEkRg7KDWhZh8jf5GjxKzcGTNvnr+ecSLqzgdlu5NrPU3oV6pld9j17DlLHPzNfomi7yS9nI8jxW/8a0THbK5tC9XVVjohHnsbPYQrqS1kb3TpzhKUWAHKGWYtV+u+3AhpIPhXN5l3tzRBltleGNu0mtv9TkUR+eZvN/v5DFDl3T8NeKFrWzvkOdjRoLFfZ2STXaoYxX6wqtyHq/wybi/yS7fuPflr8Rd8tMr9/9Td2Qnt9xNDAc6I31P15fDKkmK8Tlnfn4cOBesL3rqYrWoD1+k7zmjQZN7c6F9y08L2w9G9YVxF9+Vb062OBF3dbgGCWl4bvNJH7KS/I6lbXpYY+lQ3ftGs3Rpj+3fUDtTjkdSDY3Wtm4ZG5is0HZaQyF1L2NlrSzxPZb9eIHN/caYQXVZoYTSCdcKWy9H8VV5eWZ0R60dgCn/6AOCIkwZgQxnaXcmiX0Ag2qHfILYs7qg17wJODQXx7ASjFERuRJxkkpfby9DOfFuLp28ntZlqrbYfgF9kJPMR5SiwMKUZaRdIkphhCiY/vlXH6SoYe+6dWhjXuiDEBPKDmmZxxkMfqr6cQt9PytTtmtTX+sWiIAp93mMGMNpRLtClikk/hVXSLtCRsE0hDFFHykiggIwZaREH22rZUFXecdSVntds0AfJE9FcACmYDIU+PF4LPOiyE958Q/6re7Cwjz/liIG+iCF3WuwUlRdn4E+iJ/feFmQeW4kC5wsSdyw+9ldPD4YdwABYhDHFEyBtj42eG0buru7Zsu7aSp6pGiRAj4z/OmVdzFCO8p6SXHsyXpuv+KbyHEB1D3dPJRterjx5m7AwlPLW9xTjH8G6aamQTayV7qtfLKlRVIY0aZXt4GQr5U5KQx1eZT8yfWur9s3SRocLmF4UIfbtWa5CUW3mb8J5It6rF/3RkI39UFdBuNciV46tABV2Ee/gonXQVKI92gnhlzppMRomdCIu1c9SOs5r+d3e+7LhWqVPtEko9TSQj0dpdOCyLIZiUov9nQvtmUuqAr4Sq6D2BE5vHl38bOL4h/TCz8N1mnXbUOMnsPgh0b/qeU78c5z3KP/S4wf4+VfWlQ9tbbj5kVclY2zM89Zb7Wyjldjq8YLmvP2ZHuv5BM/ZtuJBh6Pv/ogjyELM5KAKaDJBYI+IFnZGdhOw+w3SJrC2UoUGV3aMaRM+WyKPU4QZTDJwZSXJXEoCKIkvL9ySZZbkF67ke3JcnEAj78B6B9+VWMHAAA=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY NABEED-AI 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/igxuwu.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "NABEED-AI",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "NABEED-AI",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923188871441",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*NABEED-MD*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ NABEED-MD❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/igxuwu.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
