const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348076731859";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_17_27_10_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxODQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTc2LFxuICAgICAgICA2NixcbiAgICAgICAgMTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDksXG4gICAgICAgIDM3LFxuICAgICAgICAxODksXG4gICAgICAgIDk4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAwLFxuICAgICAgICAyNSxcbiAgICAgICAgMjI5LFxuICAgICAgICA4MixcbiAgICAgICAgNDAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTg2LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTksXG4gICAgICAgIDI4LFxuICAgICAgICAzMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTksXG4gICAgICAgIDIwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTM1LFxuICAgICAgICAyNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMyxcbiAgICAgICAgNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDU4LFxuICAgICAgICAxODMsXG4gICAgICAgIDM0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDUwLFxuICAgICAgICAxODMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzAsXG4gICAgICAgIDczLFxuICAgICAgICAxODYsXG4gICAgICAgIDQwLFxuICAgICAgICAzOCxcbiAgICAgICAgMjUwLFxuICAgICAgICA5LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODksXG4gICAgICAgIDgwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDksXG4gICAgICAgIDMxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjQsXG4gICAgICAgIDE0LFxuICAgICAgICAyMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDUxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNixcbiAgICAgICAgODIsXG4gICAgICAgIDUyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjksXG4gICAgICAgIDgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDY5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDU0LFxuICAgICAgICA3NixcbiAgICAgICAgMTEsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDUxLFxuICAgICAgICA4MixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgODIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDYzLFxuICAgICAgICAxODcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTU2LFxuICAgICAgICA1MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODYsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDksXG4gICAgICAgIDIwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTg2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDk1LFxuICAgICAgICA4MSxcbiAgICAgICAgOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMzksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDkwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTgzLFxuICAgICAgICA5NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ2NHdud2pqRTdyRU1CZFBieU9LWGxBd1IxRlZ3RUhwN1JCUWVWNThsUmx3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJLTzBCWnd2Q1FNU0FKR3ZFallEQ3Z3XCIsXG4gIFwicGhvbmVJZFwiOiBcImQ3ZmVjZmQ1LTM5ZTYtNDhiMy1hZjhjLWNkZDI4YmMwMDVjOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAwLFxuICAgICAgOTksXG4gICAgICAyMDUsXG4gICAgICAyNSxcbiAgICAgIDIxMCxcbiAgICAgIDg2LFxuICAgICAgMTUzLFxuICAgICAgMjA2LFxuICAgICAgMjIsXG4gICAgICAxNzksXG4gICAgICAyNDQsXG4gICAgICAxMjEsXG4gICAgICAyNDAsXG4gICAgICA4NixcbiAgICAgIDIxOSxcbiAgICAgIDcxLFxuICAgICAgMTY3LFxuICAgICAgMjQ1LFxuICAgICAgMTkxLFxuICAgICAgODZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkyLFxuICAgICAgOTIsXG4gICAgICA0MCxcbiAgICAgIDE5MyxcbiAgICAgIDE3NixcbiAgICAgIDIwNixcbiAgICAgIDIyNCxcbiAgICAgIDE1MSxcbiAgICAgIDYzLFxuICAgICAgMjA5LFxuICAgICAgMjUyLFxuICAgICAgMzAsXG4gICAgICAxMTgsXG4gICAgICAzNSxcbiAgICAgIDYxLFxuICAgICAgMTQsXG4gICAgICAxNjAsXG4gICAgICAxMDIsXG4gICAgICAxNTAsXG4gICAgICAyNTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiS0FNUjVGVk1cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwNzY3MzE4NTk6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIktpbmcgRVwiLFxuICAgIFwibGlkXCI6IFwiMjE1MTY5MzM4NzU3MTQxOjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTDdTcjZNRUVJZVJpN2dHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJaNm5sTUE2aGE4aFF4bzNzUlpDbHNhemYreWh0eDRORm81ZzZ0MkFjTFNBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImtJOUNaQlc1alMweWMvYXZTNWFsTDRhTWtrM0Y5TTlYMWN2eXdlVUFOdHZJUXNHaFlJb2xFTzlEeGd2N1FqOTg3Y09QWmdEV01PVFRQRzV0dVBoRUJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImt6ZW4vcFVUVFdLT0FhVlVuSGJHdjE0NXNGYVFQQ0Z4ZVlKZHVrc3lRMWw0MHNTRGlBN2FuZnlNUGI3T1ZTaTlXZUtaOFUrdEtHWklseWlnT2dMU2lnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwNzY3MzE4NTk6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDMyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjgyMzU2NTlcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
