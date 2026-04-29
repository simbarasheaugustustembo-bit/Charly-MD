/**
 * Download Commands Handler
 * YouTube downloads and music search
 */

const ytSearch = require("yt-search");
const ytdl = require("ytdl-core");

module.exports = async (context) => {
    const { sock, msg, from, text, args, command, sender } = context;

    try {
        switch (command) {
            case "ytdl":
                return await downloadYouTube(sock, from, args);
            
            case "play":
                return await searchAndDownload(sock, from, args);
            
            default:
                break;
        }
    } catch (err) {
        console.error("❌ Download command error:", err);
        await sock.sendMessage(from, { text: "❌ Download error occurred" });
    }
};

async function downloadYouTube(sock, from, args) {
    if (args.length < 2) {
        return await sock.sendMessage(from, { text: "❌ Usage: .ytdl <YouTube URL>" });
    }

    try {
        await sock.sendMessage(from, { text: "⏳ Downloading..." });
        const url = args[1];

        if (!ytdl.validateURL(url)) {
            return await sock.sendMessage(from, { text: "❌ Invalid YouTube URL" });
        }

        // Note: Actual download implementation requires proper streaming setup
        // This is a placeholder that shows the proper structure
        return await sock.sendMessage(from, { text: "✅ Download feature requires binary dependencies.\nPlease use the .play command to search instead." });

    } catch (err) {
        return await sock.sendMessage(from, { text: `❌ Download error: ${err.message}` });
    }
}

async function searchAndDownload(sock, from, args) {
    if (args.length < 2) {
        return await sock.sendMessage(from, { text: "❌ Usage: .play <song name>" });
    }

    try {
        await sock.sendMessage(from, { text: "🔍 Searching..." });
        const query = args.slice(1).join(" ");
        const results = await ytSearch(query);

        if (!results.videos.length) {
            return await sock.sendMessage(from, { text: "❌ No results found" });
        }

        const video = results.videos[0];
        const resultText = `
🎵 *Search Result:*

*Title:* ${video.title}
*Duration:* ${video.duration}
*Views:* ${video.views}
*Link:* ${video.url}

Use .ytdl <link> to download
        `;

        return await sock.sendMessage(from, { text: resultText });

    } catch (err) {
        return await sock.sendMessage(from, { text: `❌ Search error: ${err.message}` });
    }
}
