const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')

const flowPrincipal = addKeyword(['Hola','ola','hoa','Hey','Buenas','Buenos','Buenos dias','Buenas tardes','Buenas noches'])
    .addAnswer('🙌 Hola bienvenido a este *Chatbot*, en breves momentos estaremos constestando todas tus dudas')
    .addAnswer(
        [
            '',
        ],
        null,
        null,
        []
    )

const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
