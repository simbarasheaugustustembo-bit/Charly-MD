/**
 * General Commands Handler
 * Commands like .help, .ping, .info, etc.
 */

module.exports = async (context) => {
    const { sock, msg, from, text, args, command, sender } = context;

    try {
        switch (command) {
            case "help":
                return await sendHelp(sock, from);
            
            case "ping":
                return await sock.sendMessage(from, { text: "🏓 Pong! Bot is online." });
            
            case "info":
                return await sendBotInfo(sock, from);
            
            default:
                break;
        }
    } catch (err) {
        console.error("❌ General command error:", err);
    }
};

async function sendHelp(sock, from) {
    const helpText = `
╔════════════════════════════════╗
║  🤖 CHARLY-MD BOT - HELP       ║
╚════════════════════════════════╝

*General Commands:*
.help - Show this help message
.ping - Check if bot is online
.info - Bot information

*Admin Commands:* (Group only)
.promote @user - Promote member to admin
.demote @user - Demote admin to member
.kick @user - Remove member from group
.mute - Mute group
.unmute - Unmute group

*AI Commands:*
.ai <question> - Ask ChatGPT

*Download Commands:*
.ytdl <url> - Download YouTube video/audio
.play <song> - Search and download song

*Sticker Commands:*
.sticker - Convert image to sticker
.toimg - Convert sticker to image

*Games:*
.dice - Roll dice
.coin - Flip coin
.rps <rock|paper|scissors> - Rock Paper Scissors

*Usage:* All commands start with . (dot)
*Example:* .help
`;
    return await sock.sendMessage(from, { text: helpText });
}

async function sendBotInfo(sock, from) {
    const infoText = `
╔════════════════════════════════╗
║  ℹ️  CHARLY-MD BOT INFO        ║
╚════════════════════════════════╝

*Bot Name:* Charly-MD
*Version:* 1.0.0
*Type:* Multi-Device WhatsApp Bot
*Platform:* Node.js + Baileys
*License:* MIT

*Features:*
✅ AI Integration (OpenAI)
✅ YouTube Download
✅ Sticker Creator
✅ Group Management
✅ Games
✅ Music Search

*Use .help for all commands*
`;
    return await sock.sendMessage(from, { text: infoText });
}
