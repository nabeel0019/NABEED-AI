const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "JK~H4sIAAAAAAAAA5VU25KiSBD9l3rVmAZFQCI6YgEREMELctGNeSihwFLkWiA44b9PYPd0z8PubO9bXfOczHMyf4A0wxUyUAeEHyAvcQMJ6pekyxEQgFRHESrBEISQQCAAZakp7jxL7aWdnCUqNsc7XTrtvKi7JObV9+7TotouDqGk8a/gMQR5fUxw8IeAUSDhal/t9vR9TfENtnx8UvfcMh3PJqwzhQN7WrCjE9ykwSt49BEhLnEaK/kJXVEJEwN1a4jLr9E3F2VDX/21699fqlRlb9bpYrrMOJ85ZZXq+Zi0UOWW+4WrfI1+CanaWOWLZGK0tis2hNfhAjtWudIlahpuVhmMfCIH0mX/Rr/CcYpCPUQpwaT7ct1VWY4s09T9FL3UV3+x8pcrOmOPirdWcUTVKsn2U9mJZy71NeJayJyD2e2u8aLtUVw8DfmEjQKrPq5MlLfHRbLMJjCibpr4O/F1+csrl/9Td9tkWWvg4dbgu6Yu4mNrKI6f0xt1umNIuhOZrl1wnUEU5ov0L7rfwlg3r4UWs6660LWGb0V8vs/OGO6lZeYac2+vE/f2SR+SuvwTy/AQy164teLMLA63o3lslEutj+Ydb97uvLtx2HByw945mG28vFgMCJ/vgmZtzK1jaF2cXVbG2UjLCJucV9kLtWnae3G6vT4zuqBOD4FAP4agRDGuSAkJztLnGUMPAQwbGwUlIs/ygoRl52RPZSNvmxpzI3ZffDsdb0ZWWEojbDEOMe/KQVlLyv4VDEFeZgGqKhRquCJZ2ZmoqmCMKiD8/X0IUtSSN+F6OJ4eD0GEy4o4aZ0nGQx/yfpxC4Mgq1Nid2kg9wtUAoH6PEaE4DSu+krWKSyDE26QfIKkAkIEkwp95IhKFAKBlDX66Fs5C/vSG5po7RRZA0NwfUqCQyCA6WhM8zzP0QxDC/Tor+rbrQ8L8/xbiggYghT2r4ElSooyA0OQPL/R3JijqQk3pjiWpUb9z/7i8cG4BwgRgTipgADk1arFK32umKWZBBdVFZVYlGMRfGb4yyxvYkR6nA2uhTfglFw/4DNDUSFUXEV16i51zrRqv5DI72iN0l//IQgQwFmy3WjQbir1hWbi6Xyi8e54Pog0b6AtqC17xGSZaFODKjq+9UKnaHhZiXFhn7fHwTk6X8Nub6zFvR4EeDAuTKONGTl+7dFC1OAA/Q52j4LD2Fh6RXx2jm6aTALXV6NCVEdwcZrRGbNn/KPTmQfUlvSsPXednmyvu1yn5sq06FqFNg8qtXaU+3i7Tbi7NVnZ8buNn22UvI8v/DRYr12/jTB6ToN3jf5Tyzfiveeox/C3GO/z5V96VPI73VjnRdLUrWGr+2xgWZp3mm+lZFnltD7dXhrOp3myncrg8fg+BHkCSZSVVyCA6nqEYAjKrO4NrKdR9gckWaR0MY7nfdoJrIj42RQ7fEUVgdccCDTHMtSE56jx26t1meUarE5AACOX4woHPH4CalLjKmQHAAA=",
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
