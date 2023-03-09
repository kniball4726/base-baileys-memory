const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')

const flowPrincipal = addKeyword(['Hola','ola','hoa','Hey','Buenas','Buenos','Buenos dias','Buenas tardes','Buenas noches','web','suple','websup','websuple','websuplementos','suplementos','suplementos.com','vitatech','ultratech'])
    .addAnswer(['🙌 Hola bienvenido al *Chatbot* de Suplementos.com'])
    
const flowTerminos = addKeyword(['Terminos'])
    .addAnswer(['Bienvenido a los terminos y condiciones de uso de nuestro ChatBot'])
    
const flowListaProd = addKeyword(['Lista', 'Productos'])
    .addAnswer(['En breves momentos le enviaremos la lista de productos con precios actualizados'])

const flowPedido = addKeyword(['Pedido','Compra'])
    .addAnswer(['A continuación, se van a solicitar una serie de datos para concretar su Pedido / Compra'])
    .addAnswer(['Por favor, Indique su nombre'])
    .addAnswer(['Por favor, indique su número de documento'])
    .addAnswer(['Por favor, indique su numero telefonico'])
    .addAnswer(['Por favor, indique su email'])
    

const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal, flowTerminos, flowListaProd, flowPedido])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
