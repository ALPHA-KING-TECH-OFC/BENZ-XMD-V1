const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message) {
    const helpMessage = `

۝༒⸙┊꫟ALPHA-KING-TECH모༒⁩۝
╔════➻⊷➻════──❂
║ ⦿━═━✤ *ʙᴇɴᴢ-χᴍᴅ-ᴠ1* ✤━═━⦿
║ ┃◈ᴍᴏᴅᴇ: public
║ ┃◈ᴜsᴇʀ : © 𝑨𝑳𝑷𝑯𝑨-𝑲𝑰𝑵𝑪-𝑻𝑬𝑪𝑯     
║ ┃◈ʟɪʙʀᴀʀʏ : Baileys
║ ┃◈ᴘʀᴇғɪx : .
║ ┃◈ᴅᴀᴛᴇ : 04/08/2025
║ ┃◈ᴛɪᴍᴇ : 16:16:05
║ ┃◈ᴛᴏᴏʟs : 2500
║ ┃◈ʀᴀᴍ : 24.93 GB/61.79 GB
║ ┃◈ʜᴏsᴛ : linux
║ ⦿━━━━═════━━━━⦿
╚════➻⊷➻════───❂

> 𝑨𝑳𝑷𝑯𝑨-𝑲𝑰𝑵𝑪-𝑻𝑬𝑪𝑯    PRESENTS:
❍━━━━✤━━────━───━━✤━━────❍ 
💀RESPECT ALL DEVELOPERS BECAUSE 
💀DEVELOPING IS NOT EVEN EASY
❍━━━━✤━━────━───━━✤━━────❍ 

|◈ʙᴇɴᴢ-χᴍᴅ-ᴠ1 ᴄᴏᴍɴᴅs
 ╔═━━═❍ _*IA*_ ❍═━━══➻
║✤ bot
║✤ dalle
║✤ gpt
║✤ chart
║✤ calcul
║✤ gemini2
║✤ bot
║✤ dalle
║✤ ai
║✤ gpt
║✤ idea
╚══━━━━════───➳
❍══════✣══════❍ 
║✤ _*ʙᴇɴᴢ-χᴍᴅ-ᴠ1👑*_║
❍══════✣══════❍ 
✤━━━━━━━━━━━━━✤
 ╔═━━═❍ _*General*_ ❍═━━══➻
║✤ owner
║✤ dev
║✤ support
║✤ developer
║✤ deployer
║✤ poll
║✤ script
║✤ test1
║✤ alive
║✤ anti-delete
║✤ telegramsc
║✤ deploy
║✤ calc
║✤ time
║✤ tempmail
║✤ broadcast
║✤ guessage
║✤ guesscountry
║✤ guessgender
║✤ menu3
║✤ code
║✤ repo
║✤ ping
║✤ desc
║✤ runtime
║✤ test
║✤ uptime
║✤ ss
║✤ undefined
║✤ vcf
║✤ getallmembers
║✤ channel
║✤ group1
║✤ update
║✤ vision
║✤ leonard
║✤ hack2
║✤ problem
║✤ wallpaper1
╚══━━━━════───➳
❍══════✣══════❍ 
║✤ _*ʙᴇɴᴢ-χᴍᴅ-ᴠ1 👑*_║
❍══════✣══════❍ 
✤━━━━━━━━━━━━━✤
 ╔═━━═❍ _*Group*_ ❍═━━══➻
║✤ quote
║✤ kickall
║✤ onlyadmin
║✤ welcome
║✤ goodbye
║✤ antipromote
║✤ antidemote
║✤ add
║✤ disap-off
║✤ disap
║✤ req
║✤ disap90
║✤ reject
║✤ disap7
║✤ disap1
║✤ approve
║✤ vcf10
║✤ tagall
║✤ invite
║✤ promote
║✤ demote
║✤ remove
║✤ info
║✤ antilink
║✤ antibot
║✤ group
║✤ gname
║✤ gdesc
║✤ revoke
║✤ gpp
║✤ hidetag
║✤ automute
║✤ autounmute
║✤ fkick
║✤ nsfw
║✤ antiword
║✤ antilink-all
║✤ warn
╚══━━━━════───➳
❍══════✣══════❍ 
║✤ _*ʙᴇɴᴢ-χᴍᴅ-ᴠ1 👑*_║
❍══════✣══════❍ 
✤━━━━━━━━━━━━━✤
 ╔═━━═❍ _*Menu*_ ❍═━━══➻
║✤ lena
║✤ help
║✤ menu2
║✤ menu
╚══━━━━════───➳
❍══════✣══════❍ 
║✤ _*ʙᴇɴᴢ-χᴍᴅ-ᴠ1 👑*_║
❍══════✣══════❍ 
✤━━━━━━━━━━━━━✤
 ╔═━━═❍ _*Mods*_ ❍═━━══➻
║✤ tgs
║✤ crew
║✤ left
║✤ join
║✤ jid
║✤ block
║✤ unblock
║✤ ban
║✤ bangroup
║✤ sudo
║✤ save
║✤ mention
║✤ spam
║✤ reboot
╚══━━━━════───➳
❍══════✣══════❍ 
║✤ _*ʙᴇɴᴢ-χᴍᴅ-ᴠ1 👑*_║
❍══════✣══════❍ 
✤━━━━━━━━━━━━━✤
 ╔═━━═❍ _*User*_ ❍═━━══➻
║✤ fact
║✤ quotes
║✤ del
╚══━━━━════───➳
❍══════✣══════❍ 
║✤ _*ʙᴇɴᴢ-χᴍᴅ-ᴠ1 👑*_║
❍══════✣══════❍ 
✤━━━━━━━━━━━━━✤
 ╔═━━═❍ _*Search*_ ❍═━━══➻
║✤ define
║✤ lyrics
║✤ google
║✤ imdb
║✤ github
║✤ img
║✤ video
║✤ stickersearch
║✤ lyrics
║✤ weather
╚══━━━━════───➳
❍══════✣══════❍ 
║✤ _*ʙᴇɴᴢ-χᴍᴅ-ᴠ1 👑*_║
❍══════✣══════❍ 
✤━━━━━━━━━━━━━✤
 ╔═━━═❍ _*Fun*_ ❍═━━══➻
║✤ hack
║✤ ranime
║✤ fancy
║✤ profile
║✤ quote
║✤ rank
║✤ toprank
╚══━━━━════───➳
❍══════✣══════❍ 
║✤ _*ʙᴇɴᴢ-χᴍᴅ-ᴠ1 👑*_║
❍══════✣══════❍ 
✤━━━━━━━━━━━━━✤
 ╔═━━═❍ _*Conversion*_ ❍═━━══➻
║✤ emomix
║✤ sticker
║✤ scrop
║✤ take
║✤ write
║✤ photo
║✤ trt
║✤ url
╚══━━━━════───➳
❍══════✣══════❍ 
║✤ _*ʙᴇɴᴢ-χᴍᴅ-ᴠ1 👑*_║
❍══════✣══════❍ 
✤━━━━━━━━━━━━━✤
 ╔═━━═❍ _*Audio-Edit*_ ❍═━━══➻
║✤ deep
║✤ bass
║✤ reverse
║✤ slow
║✤ smooth
║✤ tempo
║✤ nightcore
╚══━━━━════───➳
❍══════✣══════❍ 
║✤ _*ʙᴇɴᴢ-χᴍᴅ-ᴠ1 👑*_║
❍══════✣══════❍ 
✤━━━━━━━━━━━━━✤
 ╔═━━═❍ _*God-first*_ ❍═━━══➻
║✤ bible
╚══━━━━════───➳
❍══════✣══════❍ 
║✤ _*ʙᴇɴᴢ-χᴍᴅ-ᴠ1👑*_║
❍══════✣══════❍ 
✤━━━━━━━━━━━━━✤
 ╔═━━═❍ _*menu*_ ❍═━━══➻
║✤ bugmenu
╚══━━━━════───➳
❍══════✣══════❍ 
║✤ _*ʙᴇɴᴢ-χᴍᴅ-ᴠ1👑*_║
❍══════✣══════❍ 
✤━━━━━━━━━━━━━✤
 ╔═━━═❍ _*Image-Edit*_ ❍═━━══➻
║✤ shit
║✤ wasted
║✤ wanted
║✤ trigger
║✤ trash
║✤ rip
║✤ sepia
║✤ rainbow
║✤ hitler
║✤ invert
║✤ jail
║✤ affect
║✤ beautiful
║✤ blur
║✤ circle
║✤ facepalm
║✤ greyscale
║✤ joke
╚══━━━━════───➳
❍══════✣══════❍ 
║✤ _*ʙᴇɴᴢ-χᴍᴅ-ᴠ1 👑*_║
❍══════✣══════❍ 
✤━━━━━━━━━━━━━✤
 ╔═━━═❍ _*Games*_ ❍═━━══➻
║✤ riddle
║✤ guessflag
║✤ chifumi
║✤ quizz
╚══━━━━════───➳
❍══════✣══════❍ 
║✤ _*ʙᴇɴᴢ-χᴍᴅ-ᴠ1 👑*_║
❍══════✣══════❍ 
✤━━━━━━━━━━━━━✤
 ╔═━━═❍ _*AI*_ ❍═━━══➻
║✤ bing
║✤ brainshop
║✤ 🤔
║✤  Boniphacea
║✤ gemini
║✤ gpt7
║✤ generate
║✤ extract
║✤ bing
║✤ bing2
║✤ ilama
║✤ beautify
║✤ gta
║✤ lulcat
║✤ sadcat
║✤ nokia
║✤ unforgivable
║✤ 1917
║✤ cartoon
║✤ underwater
║✤ watercolor
║✤ gfx
║✤ gfx2
║✤ gfx3
║✤ gfx4
║✤ gfx5
║✤ gfx6
║✤ pooh
║✤ oogway
║✤ drake
║✤ biden
║✤ drip
║✤ clown
║✤ ad
║✤ blur
║✤ meme
║✤ pet
║✤ alert
║✤ caution
╚══━━━━════───➳
❍══════✣══════❍ 
║✤ _*ʙᴇɴᴢ-χᴍᴅ-ᴠ1 👑*_║
❍══════✣══════❍ 
✤━━━━━━━━━━━━━✤
 ╔═━━═❍ _*ʙᴇɴᴢ-χᴍᴅ-ᴠ1 PICTURES*_ ❍═━━══➻
║✤ wallpaper
║✤ random
║✤ nature
╚══━━━━════───➳
❍══════✣══════❍ 
║✤ _*ʙᴇɴᴢ-χᴍᴅ-ᴠ1 👑*_║
❍══════✣══════❍ 
✤━━━━━━━━━━━━━✤
 ╔═━━═❍ _*FUN*_ ❍═━━══➻
║✤ lines
║✤ insult
║✤ dare
║✤ truth
╚══━━━━════───➳
❍══════✣══════❍ 
║✤ _*ʙᴇɴᴢ-χᴍᴅ-ᴠ1 👑*_║
❍══════✣══════❍ 
✤━━━━━━━━━━━━━✤
 ╔═━━═❍ _*USER*_ ❍═━━══➻
║✤ enhance
╚══━━━━════───➳
❍══════✣══════❍ 
║✤ _*𝑨𝑳𝑷𝑯𝑨-𝑲𝑰𝑵𝑪-𝑻𝑬𝑪𝑯      👑*_║
❍══════✣══════❍ 
✤━━━━━━━━━━━━━✤
 ╔═━━═❍ _*Coding*_ ❍═━━══➻
║✤ encrypt
╚══━━━━════───➳
❍══════✣══════❍ 
║✤ _*𝑨𝑳𝑷𝑯𝑨-𝑲𝑰𝑵𝑪-𝑻𝑬𝑪𝑯     👑*_║
❍══════✣══════❍ 
✤━━━━━━━━━━━━━✤
 ╔═━━═❍ _*Download*_ ❍═━━══➻
║✤ gitclone
║✤ tiktok-dl
║✤ image-dl
║✤ instagram
║✤ insta-story
║✤ video-dl
║✤ twitter-dl
║✤ mediafire
║✤ fb
║✤ fb2
║✤ apk
║✤ igdl
║✤ fbdl
║✤ tiktok
║✤ fbdl2
║✤ play
║✤ song
║✤ play
║✤ song
║✤ video
║✤ videodoc
╚══━━━━════───➳
❍══════✣══════❍ 
║✤ _*𝑨𝑳𝑷𝑯𝑨-𝑲𝑰𝑵𝑪-𝑻𝑬𝑪𝑯      👑*_║
❍══════✣══════❍ 
✤━━━━━━━━━━━━━✤
 ╔═━━═❍ _*Education-corner*_ ❍═━━══➻
║✤ element
╚══━━━━════───➳
❍══════✣══════❍ 
║✤ _*𝑨𝑳𝑷𝑯𝑨-𝑲𝑰𝑵𝑪-𝑻𝑬𝑪𝑯  👑*_║
❍══════✣══════❍ 
✤━━━━━━━━━━━━━✤
 ╔═━━═❍ _*Modern-Logo*_ ❍═━━══➻
║✤ birthday1
║✤ birthday2
║✤ birthday3
║✤ birthday4
║✤ birthday5
║✤ birthday6
║✤ birthday7
║✤ comic
║✤ zodiac
║✤ matrix
║✤ road
║✤ bear
║✤ bokeh
║✤ firework
║✤ gaming
║✤ captain
║✤ toxic
║✤ business
║✤ joker
║✤ cloud
║✤ tattoo
║✤ pentakill
║✤ halloween1
║✤ horror
║✤ halloween2
║✤ women's-day
║✤ valentine
║✤ lightening
║✤ shadow
║✤ magma
║✤ typography
║✤ lava
║✤ 1918
║✤ batman
║✤ blood
║✤ christmas
╚══━━━━════───➳
❍══════✣══════❍ 
║✤ _*ʙᴇɴᴢ-χᴍᴅ-ᴠ1 👑*_║
❍══════✣══════❍ 
✤━━━━━━━━━━━━━✤
 ╔═━━═❍ _*Hentai*_ ❍═━━══➻
║✤ hwaifu
║✤ trap
║✤ hneko
║✤ blowjob
║✤ hentaivid
╚══━━━━════───➳
❍══════✣══════❍ 
║✤ _*ʙᴇɴᴢ-χᴍᴅ-ᴠ1 👑*_║
❍══════✣══════❍ 
✤━━━━━━━━━━━━━✤
 ╔═━━═❍ _*heroku*_ ❍═━━══➻
║✤ setvar
║✤ getallvar
║✤ getvar
╚══━━━━════───➳
❍══════✣══════❍ 
║✤ _*ʙᴇɴᴢ-χᴍᴅ-ᴠ1 👑*_║
❍══════✣══════❍ 
✤━━━━━━━━━━━━━✤
 ╔═━━═❍ _*Heroku*_ ❍═━━══➻
║✤ settings
║✤ setprefix
║✤ linkmenu
║✤ warncount
║✤ botname
╚══━━━━════───➳
❍══════✣══════❍ 
║✤ _*ʙᴇɴᴢ-χᴍᴅ-ᴠ1 👑*_║
❍══════✣══════❍ 
✤━━━━━━━━━━━━━✤
 ╔═━━═❍ _*Logo*_ ❍═━━══➻
║✤ hacker
║✤ dragonball
║✤ naruto
║✤ didong
║✤ wall
║✤ summer
║✤ neonlight
║✤ greenneon
║✤ glitch
║✤ devil
║✤ boom
║✤ water
║✤ snow
║✤ transformer
║✤ thunder
║✤ harrypotter
║✤ cat
║✤ whitegold
║✤ lightglow
║✤ thor
║✤ neon
║✤ purple
║✤ gold
║✤ arena
║✤ incandescent
║✤ gif×1
╚══━━━━════───➳
❍══════✣══════❍ 
║✤ _*ʙᴇɴᴢ-χᴍᴅ-ᴠ1 👑*_║
❍══════✣══════❍ 
✤━━━━━━━━━━━━━✤
 ╔═━━═❍ _*Ai*_ ❍═━━══➻
║✤ text2prompt
╚══━━━━════───➳
❍══════✣══════❍ 
║✤ _*ʙᴇɴᴢ-χᴍᴅ-ᴠ1 👑*_║
❍══════✣══════❍ 
✤━━━━━━━━━━━━━✤
 ╔═━━═❍ _*Reaction*_ ❍═━━══➻
║✤ bully
║✤ cuddle
║✤ cry
║✤ hug
║✤ awoo
║✤ kiss
║✤ lick
║✤ pat
║✤ smug
║✤ bonk
║✤ yeet
║✤ blush
║✤ smile
║✤ wave
║✤ highfive
║✤ handhold
║✤ nom
║✤ bite
║✤ glomp
║✤ slap
║✤ kill
║✤ kick
║✤ happy
║✤ wink
║✤ poke
║✤ dance
║✤ cringe
╚══━━━━════───➳
❍══════✣══════❍ 
║✤ _*ʙᴇɴᴢ-χᴍᴅ-ᴠ1 👑*_║
❍══════✣══════❍ 
✤━━━━━━━━━━━━━✤
 ╔═━━═❍ _*stickcmd*_ ❍═━━══➻
║✤ setcmd
║✤ delcmd
║✤ allcmd
╚══━━━━════───➳
❍══════✣══════❍ 
║✤ _*ʙᴇɴᴢ-χᴍᴅ-ᴠ1👑*_║
❍══════✣══════❍ 
✤━━━━━━━━━━━━━✤
 ╔═━━═❍ _*Finance*_ ❍═━━══➻
║✤ math
╚══━━━━════───➳
❍══════✣══════❍ 
║✤ _*ʙᴇɴᴢ-χᴍᴅ-ᴠ1 👑*_║
❍══════✣══════❍ 
✤━━━━━━━━━━━━━✤
 ╔═━━═❍ _*News*_ ❍═━━══➻
║✤ technews
╚══━━━━════───➳
❍══════✣══════❍ 
║✤ _*ʙᴇɴᴢ-χᴍᴅ-ᴠ1👑*_║
❍══════✣══════❍ 
✤━━━━━━━━━━━━━✤
 ╔═━━═❍ _*tts*_ ❍═━━══➻
║✤ dit
║✤ itta
║✤ say
╚══━━━━════───➳
❍══════✣══════❍ 
║✤ _*ʙᴇɴᴢ-χᴍᴅ-ᴠ1 👑*_║
❍══════✣══════❍ 
✤━━━━━━━━━━━━━✤
 ╔═━━═❍ _*Général*_ ❍═━━══➻
║✤ vv
╚══━━━━════───➳
❍══════✣══════❍ 
║✤ _*ʙᴇɴᴢ-χᴍᴅ-ᴠ1 👑*_║
❍══════✣══════❍ 
✤━━━━━━━━━━━━━✤
 ╔═━━═❍ _*Weeb*_ ❍═━━══➻
║✤ waifu
║✤ neko
║✤ shinobu
║✤ megumin
║✤ cosplay
║✤ couplepp
╚══━━━━════───➳
❍══════✣══════❍ 
║✤ _*ʙᴇɴᴢ-χᴍᴅ-ᴠ1 👑*_║
❍══════✣══════❍ 
✤━━━━━━━━━━━━━✤



 ✤═══════════════✤
 ║✤ _*ʙᴇɴᴢ-χᴍᴅ-ᴠ1 2025*_
 ║✤ _*ᴇɴᴊᴏʏ ʟɪғᴇ*_ 
 ✤═══════════════✤
 ❍━━━━═══════━━━━❍ 
 ┃╔══════════════╗
 ┃║✤ _*𝑨𝑳𝑷𝑯𝑨-𝑲𝑰𝑵𝑪-𝑻𝑬𝑪𝑯  🥷*_
 ┃╚══════════════╝
 ❍━━━━═══════━━━━❍ 


|◈ᴋᴇᴇᴘ ᴜsɪɴɢ ʙᴇɴᴢ-χᴍᴅ-ᴠ1💥

━━━━━━━━━━━━━━━━━━━━
> 𝙼𝙰𝙳𝙴 𝙱𝚈 ALPHA-KING-TECH 
━━━━━━━━━━━━━━━━━━━━
Join our channel for updates:`;
    try {
        const imagePath = path.join(__dirname, '../assets/bot_image.jpg');
        if (fs.existsSync(imagePath)) {
            const imageBuffer = fs.readFileSync(imagePath);
            await sock.sendMessage(chatId, {
                image: imageBuffer,
                caption: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '0029VajbiIfAjPXO45zG2i2c@newsletter',
                        newsletterName: 'BENZ-XMD-V1',
                        serverMessageId: -1
                    }
                }
            },{ quoted: message });
        } else {
            console.error('Bot image not found at:', imagePath);
            await sock.sendMessage(chatId, { 
                text: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '0029VajbiIfAjPXO45zG2i2c@newsletter',
                        newsletterName: 'BENZ-XMD-V',
                        serverMessageId: -1
                    } 
                }
            });
        }
    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}
module.exports = helpCommand;