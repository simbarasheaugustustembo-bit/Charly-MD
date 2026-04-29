# 🤖 Charly-MD - WhatsApp Bot

> **A fast Multi-Device WhatsApp bot built for education and group management.**
> Powered by [Baileys](https://github.com/WhiskeySockets/Baileys)

![GitHub stars](https://img.shields.io/github/stars/simbarasheaugustustembo-bit/Charly-MD?style=flat)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node.js](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen)

---

## ✨ Features

✅ **AI Integration** - ChatGPT powered responses  
✅ **Group Management** - Promote, demote, kick, mute members  
✅ **Media Downloads** - Download YouTube videos and audio  
✅ **Sticker Creator** - Convert images to stickers  
✅ **Games** - Dice, coin flip, rock-paper-scissors  
✅ **Music Search** - Find and download songs  
✅ **Multi-Device** - Works without browser
✅ **Easy Setup** - One command installation  

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** v14+ ([Download](https://nodejs.org))
- **npm** or **yarn**
- **WhatsApp Account**

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/simbarasheaugustustembo-bit/Charly-MD.git
cd Charly-MD
```

2. **Install dependencies**
```bash
npm install
```

3. **Setup environment variables**
```bash
cp .env.example .env
```

4. **Configure .env file**
```env
PHONE_NUMBER=260977123456  # Your WhatsApp number (with country code)
OPENAI_API_KEY=sk-xxx       # Optional: For AI features
MAX_RETRIES=5
RETRY_DELAY=5000
```

5. **Start the bot**
```bash
npm start
```

6. **Scan QR Code** - Open WhatsApp on your phone and scan the QR code displayed in terminal

---

## 📋 Configuration

### Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `PHONE_NUMBER` | ✅ | WhatsApp number (with country code) |
| `OPENAI_API_KEY` | ❌ | OpenAI API key for AI features |
| `BOT_PREFIX` | ❌ | Command prefix (default: `.`) |
| `MAX_RETRIES` | ❌ | Reconnection attempts (default: 5) |
| `RETRY_DELAY` | ❌ | Delay between retries in ms (default: 5000) |

### Getting API Keys

**OpenAI API Key:**
1. Visit [openai.com/api](https://platform.openai.com/account/api-keys)
2. Sign up or login
3. Create a new API key
4. Add to `.env` file

---

## 🎮 Commands

All commands start with the bot prefix (default: `.`)

### General Commands

| Command | Description | Usage |
|---------|-------------|-------|
| `.help` | Show all commands | `.help` |
| `.ping` | Check if bot is online | `.ping` |
| `.info` | Bot information | `.info` |

### Admin Commands (Groups Only)

| Command | Description | Usage | Requirements |
|---------|-------------|-------|---------------|
| `.promote @user` | Promote member to admin | `.promote @user` | Be admin + Bot admin |
| `.demote @user` | Demote admin to member | `.demote @user` | Be admin + Bot admin |
| `.kick @user` | Remove member from group | `.kick @user` | Be admin + Bot admin |
| `.mute` | Mute group (admins only) | `.mute` | Be admin |
| `.unmute` | Unmute group | `.unmute` | Be admin |

### AI Commands

| Command | Description | Usage | Requirements |
|---------|-------------|-------|---------------|
| `.ai <question>` | Ask ChatGPT | `.ai What is AI?` | OpenAI API key |

### Download Commands

| Command | Description | Usage |
|---------|-------------|-------|
| `.play <song>` | Search and get YouTube link | `.play Bohemian Rhapsody` |
| `.ytdl <url>` | Download from YouTube | `.ytdl https://youtube.com/...` |

### Sticker Commands

| Command | Description | Usage |
|---------|-------------|-------|
| `.sticker` | Convert image to sticker | Reply to image with `.sticker` |
| `.toimg` | Convert sticker to image | Reply to sticker with `.toimg` |

### Game Commands

| Command | Description | Usage |
|---------|-------------|-------|
| `.dice` | Roll a dice | `.dice` |
| `.coin` | Flip a coin | `.coin` |
| `.rps <choice>` | Rock Paper Scissors | `.rps rock` / `.rps paper` / `.rps scissors` |

---

## 📁 Project Structure

```
Charly-MD/
├── commands/
│   ├── general.js      # Help, ping, info commands
│   ├── admin.js        # Group management commands
│   ├── ai.js           # ChatGPT integration
│   ├── games.js        # Game commands
│   ├── download.js     # YouTube downloads
│   └── sticker.js      # Sticker conversion
├── index.js            # Main bot file
├── package.json        # Dependencies
├── .env.example        # Environment variables template
├── .gitignore          # Git ignore rules
├── railway.json        # Railway deployment config
├── vercel.json         # Vercel deployment config
└── README.md           # This file
```

---

## 🌐 Deployment

### Option 1: Local Machine

```bash
npm install
cp .env.example .env
# Edit .env with your settings
npm start
```

### Option 2: Railway

1. Push to GitHub
2. Visit [railway.app](https://railway.app)
3. Connect your GitHub repository
4. Add environment variables
5. Deploy!

[Railway Documentation](https://docs.railway.app)

### Option 3: Vercel

1. Push to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables in settings
5. Deploy!

⚠️ **Note:** Vercel has 10-second execution limit, not ideal for bots. Use Railway instead.

---

## 🔧 Development

### Run with Auto-Reload

```bash
npm run dev
```
This uses `nodemon` to automatically restart the bot on file changes.

### Debug Mode

Set environment variable:
```bash
DEBUG=* npm start
```

### Common Issues

**Issue: "ECONNREFUSED"**
- WhatsApp servers are blocking the connection
- Wait a few minutes and try again
- Check internet connection

**Issue: "QR Code won't scan"**
- Make sure WhatsApp is properly installed
- Try scanning with a different device
- Restart the bot and try again

**Issue: "Bot not responding"**
- Check that bot has proper permissions
- Verify command syntax with `.help`
- Check bot is still connected (see terminal logs)

---

## 📚 API Documentation

### Baileys (WhatsApp)
[GitHub: WhiskeySockets/Baileys](https://github.com/WhiskeySockets/Baileys)

### OpenAI
[OpenAI API Docs](https://platform.openai.com/docs)

### YouTube Download
- [ytdl-core](https://github.com/fent/node-ytdl-core)
- [yt-search](https://github.com/talmobi/yt-search)

---

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## ⚠️ Disclaimer

- This project is for **educational purposes only**
- Use at your own risk
- Respect WhatsApp's Terms of Service
- Do not use for spam or malicious activities
- The creator is not responsible for any misuse
- WhatsApp may ban accounts using unofficial clients

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details

---

## 💬 Support

- **Issues:** [GitHub Issues](https://github.com/simbarasheaugustustembo-bit/Charly-MD/issues)
- **Email:** Contact the maintainer
- **Discord:** Join our community (coming soon)

---

## 🔗 Links

- 🌐 [Website](https://charly-md.vercel.app)
- 💻 [GitHub](https://github.com/simbarasheaugustustembo-bit/Charly-MD)
- 📦 [npm](https://www.npmjs.com/package/charly-md)

---

<div align="center">

**Made with ❤️ by the Charly-MD Team**

⭐ Star this repo if you find it helpful!

</div>
