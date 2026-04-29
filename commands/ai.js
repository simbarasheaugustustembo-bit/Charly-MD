/**
 * AI Commands Handler
 * ChatGPT integration for .ai command
 */

const { OpenAI } = require("openai");

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

module.exports = async (context) => {
    const { sock, msg, from, text, args, command, sender } = context;

    try {
        if (command !== "ai") return;

        if (!process.env.OPENAI_API_KEY) {
            return await sock.sendMessage(from, { text: "❌ OpenAI API key not configured" });
        }

        if (args.length < 2) {
            return await sock.sendMessage(from, { text: "❌ Usage: .ai <your question>" });
        }

        const question = args.slice(1).join(" ");
        await sock.sendMessage(from, { text: "⏳ Thinking..." });

        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: question }],
            max_tokens: 500,
        });

        const response = completion.choices[0].message.content;
        return await sock.sendMessage(from, { text: `🤖 *AI Response:*\n\n${response}` });

    } catch (err) {
        console.error("❌ AI command error:", err);
        const errorMsg = err.message || "Unknown error";
        return await sock.sendMessage(from, { text: `❌ AI Error: ${errorMsg}` });
    }
};
