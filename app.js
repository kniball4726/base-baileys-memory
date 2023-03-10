const { createBot, createProvider, createFlow, addKeyword, addAnswer } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')

const flowPrincipal = addKeyword(['Hola','Inicio','ola','hoa','Hey','Buenas','Buenos','Buenos dias','Buenas tardes','Buenas noches','web','suple','websup','websuple','websuplementos','suplementos','suplementos.com','vitatech','ultratech'])
    .addAnswer('🙌 Hola bienvenido al *Chatbot* de Suplementos.com')
    .addAnswer(['Para ver terminos y condiciones escriba:'],['*Terminos*'])
    .addAnswer(['Para solicitar lista de productos con precios actualizados escriba: '],['Lista o Productos'])
    .addAnswer(['Para hacer un pedido escriba: '],['*Pedido* o *Compra*'])
    
const flowTerminos = addKeyword(['Terminos'])
    .addAnswer('Bienvenido a los terminos y condiciones de uso de nuestro ChatBot')
    .addAnswer(['Para solicitar lista de productos con precios actualizados escriba: '],['Lista o Productos'])
    .addAnswer(['Para hacer un pedido escriba: '],['*Pedido* o *Compra*'])
    .addAnswer(['Para regresar escriba'],['Inicio'])
    
const flowListaProd = addKeyword(['Lista', 'Productos'])
    .addAnswer('En breves momentos le enviaremos la lista de productos con precios actualizados')
    .addAnswer(['Para hacer un pedido escriba'],['*Pedido* o *Compra*'])
    .addAnswer(['Para regresar escriba:'],['*Inicio*'])

const flowPedido = addKeyword(['Pedido','Compra'])
    .addAnswer('A continuación, se van a solicitar una serie de datos para concretar su *Pedido* / *Compra*')
    .addAnswer(['Por favor, Indique su nombre'])
    .addAnswer(['Por favor, indique su número de documento'])
    .addAnswer(['Por favor, indique su numero telefonico'])
    .addAnswer(['Por favor, indique su email'])
    .addAnswer('Muy bien, le indicamos que sus datos permaneceran bajo nuestro resguardo de forma segura')
    .addAnswer(['Indique el codigo del producto'])
    .addAnswer(['Cantidad de productos'])
    .addAnswer(['Para agregar otro producto escriba'],['Nuevo'])
    .addAnswer(['Para finalizar el pedido escriba: '],['Fin'])
    .addAnswer(['Para regresar escriba:'],['Inicio'])
    

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
