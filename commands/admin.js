/**
 * Admin Commands Handler
 * Commands for group management: kick, promote, demote, mute, unmute
 */

module.exports = async (context) => {
    const { sock, msg, from, args, command, isGroup, isAdmin, isBotAdmin, sender } = context;

    if (!isGroup) return; // Only works in groups

    try {
        switch (command) {
            case "promote":
                return await promoteUser(sock, from, args, isAdmin, isBotAdmin);
            
            case "demote":
                return await demoteUser(sock, from, args, isAdmin, isBotAdmin);
            
            case "kick":
                return await kickUser(sock, from, args, isAdmin, isBotAdmin);
            
            case "mute":
                return await muteGroup(sock, from, isAdmin);
            
            case "unmute":
                return await unmuteGroup(sock, from, isAdmin);
            
            default:
                break;
        }
    } catch (err) {
        console.error("❌ Admin command error:", err);
        await sock.sendMessage(from, { text: "❌ Error executing admin command" });
    }
};

async function promoteUser(sock, from, args, isAdmin, isBotAdmin) {
    if (!isAdmin) return await sock.sendMessage(from, { text: "❌ You must be admin to use this command" });
    if (!isBotAdmin) return await sock.sendMessage(from, { text: "❌ Bot must be admin to promote users" });

    const mentionedJid = args[1]?.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    if (!mentionedJid) return await sock.sendMessage(from, { text: "❌ Please mention a user to promote" });

    await sock.groupParticipantsUpdate(from, [mentionedJid], "promote");
    return await sock.sendMessage(from, { text: `✅ User promoted to admin` });
}

async function demoteUser(sock, from, args, isAdmin, isBotAdmin) {
    if (!isAdmin) return await sock.sendMessage(from, { text: "❌ You must be admin to use this command" });
    if (!isBotAdmin) return await sock.sendMessage(from, { text: "❌ Bot must be admin to demote users" });

    const mentionedJid = args[1]?.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    if (!mentionedJid) return await sock.sendMessage(from, { text: "❌ Please mention a user to demote" });

    await sock.groupParticipantsUpdate(from, [mentionedJid], "demote");
    return await sock.sendMessage(from, { text: `✅ User demoted from admin` });
}

async function kickUser(sock, from, args, isAdmin, isBotAdmin) {
    if (!isAdmin) return await sock.sendMessage(from, { text: "❌ You must be admin to use this command" });
    if (!isBotAdmin) return await sock.sendMessage(from, { text: "❌ Bot must be admin to kick users" });

    const mentionedJid = args[1]?.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    if (!mentionedJid) return await sock.sendMessage(from, { text: "❌ Please mention a user to kick" });

    await sock.groupParticipantsUpdate(from, [mentionedJid], "remove");
    return await sock.sendMessage(from, { text: `👋 User has been removed from the group` });
}

async function muteGroup(sock, from, isAdmin) {
    if (!isAdmin) return await sock.sendMessage(from, { text: "❌ You must be admin to mute the group" });
    
    await sock.groupSettingUpdate(from, "announcement");
    return await sock.sendMessage(from, { text: "🔇 Group has been muted" });
}

async function unmuteGroup(sock, from, isAdmin) {
    if (!isAdmin) return await sock.sendMessage(from, { text: "❌ You must be admin to unmute the group" });
    
    await sock.groupSettingUpdate(from, "not_announcement");
    return await sock.sendMessage(from, { text: "🔊 Group has been unmuted" });
}
