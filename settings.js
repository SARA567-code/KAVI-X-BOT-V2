const fs = require('fs')
const chalk = require('chalk')

global.sessionID = process.env.SESSIONID || "KAVI-X-SESSION-ID~HlRDTR6b#YkdxnpoDTEhwrlrBEZw3qesGewv_Pf74ooXFGAoRREw"
global.mongodburi = process.env.MONGODB_URI || "mongodb+srv://cikigak191_db_user:A6P8qe0YWMR1b3Mi@alfaaofc.r3pbvai.mongodb.net/"
global.botname = process.env.BOTNAME || "« ᗷᒪᗩᑕK ᗩᒪᖴᗩ Oᖴᑕ »"
global.ownernumber = process.env.OWNERNUMBER || "94719036654"
global.ownername = process.env.OWNERNAME || "ʙʟᴀᴄᴋ ᴀʟꜰᴀ"
global.packname = process.env.PACKNAME || "𓄂ʙʟᴀᴄᴋ ᴀʟꜰᴀ ᴏꜰᴄ࿐ ²⁰²⁵"
global.author = process.env.AUTHOR || "ʙʟᴀᴄᴋ ᴀʟꜰᴀ"

global.creator = process.env.CREATOR || "94719036654@s.whatsapp.net"
global.botprefix = process.env.BOTPREFIX || "."
global.restart = process.env.RESTART || true
global.websitex = process.env.WEBSITEX || "https://ubetta.com"
global.wagc = process.env.WAGC || "https://chat.whatsapp.com/GflMdlk7qNd6ISivemIteh?mode=ems_copy_t"
global.botscript = process.env.BOTSCRIPT || "https://github.com"
global.botlogo = process.env.BOTLOGO || "https://raw.githubusercontent.com/KaviDeveloperSe/KAVI-X-BOT-DB/refs/heads/main/kavix03.png"

global.port = process.env.PORT || 3000

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
