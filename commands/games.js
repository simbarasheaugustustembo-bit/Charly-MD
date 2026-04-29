/**
 * Games Commands Handler
 * Fun games like dice, coin flip, rock-paper-scissors
 */

module.exports = async (context) => {
    const { sock, from, command, args } = context;

    try {
        switch (command) {
            case "dice":
                return await rollDice(sock, from);
            
            case "coin":
                return await flipCoin(sock, from);
            
            case "rps":
                return await rockPaperScissors(sock, from, args);
            
            default:
                break;
        }
    } catch (err) {
        console.error("❌ Games command error:", err);
        await sock.sendMessage(from, { text: "❌ Game error occurred" });
    }
};

async function rollDice(sock, from) {
    const result = Math.floor(Math.random() * 6) + 1;
    const text = `
🎲 *Dice Roll Result:*

You rolled: *${result}*
    `;
    return await sock.sendMessage(from, { text });
}

async function flipCoin(sock, from) {
    const result = Math.random() < 0.5 ? "Heads" : "Tails";
    const emoji = result === "Heads" ? "🪙" : "🪙";
    const text = `
${emoji} *Coin Flip Result:*

Result: *${result}*
    `;
    return await sock.sendMessage(from, { text });
}

async function rockPaperScissors(sock, from, args) {
    if (args.length < 2) {
        return await sock.sendMessage(from, { text: "❌ Usage: .rps <rock|paper|scissors>" });
    }

    const userChoice = args[1]?.toLowerCase();
    const choices = ["rock", "paper", "scissors"];

    if (!choices.includes(userChoice)) {
        return await sock.sendMessage(from, { text: "❌ Please choose: rock, paper, or scissors" });
    }

    const botChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = "";

    if (userChoice === botChoice) {
        result = "It's a tie! 🤝";
    } else if (
        (userChoice === "rock" && botChoice === "scissors") ||
        (userChoice === "paper" && botChoice === "rock") ||
        (userChoice === "scissors" && botChoice === "paper")
    ) {
        result = "You won! 🎉";
    } else {
        result = "Bot won! 🤖";
    }

    const text = `
🎮 *Rock Paper Scissors:*

*Your Choice:* ${userChoice}
*Bot Choice:* ${botChoice}

${result}
    `;
    return await sock.sendMessage(from, { text });
}
