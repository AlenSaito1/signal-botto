//@ts-ignore
import { Client } from 'signal-bot'

const bot = new Client({
    dbus: {
        type: 'session'
    }
})

bot.on('message', (msg: any) => {
    console.log(msg.content)
    if (msg.content.toLowerCase().startsWith('hi')) return msg.conversation.sendMessage(`Hi ${msg.author.id}`)
    if (msg.content.startsWith('!ev')) eval(msg.content.replace('!ev', ''))
})

bot.connect()