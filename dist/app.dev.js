"use strict";

var _require = require('@bot-whatsapp/bot'),
    createBot = _require.createBot,
    createProvider = _require.createProvider,
    createFlow = _require.createFlow,
    addKeyword = _require.addKeyword,
    addAnswer = _require.addAnswer;

var QRPortalWeb = require('@bot-whatsapp/portal');

var BaileysProvider = require('@bot-whatsapp/provider/baileys');

var MockAdapter = require('@bot-whatsapp/database/mock');

var flowPrincipal = addKeyword(['Hola', 'Inicio', 'ola', 'hoa', 'Hey', 'Buenas', 'Buenos', 'Buenos dias', 'Buenas tardes', 'Buenas noches', 'web', 'suple', 'websup', 'websuple', 'websuplementos', 'suplementos', 'suplementos.com', 'vitatech', 'ultratech']).addAnswer('🙌 Hola bienvenido al *Chatbot* de Suplementos.com').addAnswer(['Para ver terminos y condiciones escriba:'], ['*Terminos*']).addAnswer(['Para solicitar lista de productos con precios actualizados escriba: '], ['Lista o Productos']).addAnswer(['Para hacer un pedido escriba: '], ['*Pedido* o *Compra*']);
var flowTerminos = addKeyword(['Terminos']).addAnswer('Bienvenido a los terminos y condiciones de uso de nuestro ChatBot').addAnswer(['Para solicitar lista de productos con precios actualizados escriba: '], ['Lista o Productos']).addAnswer(['Para hacer un pedido escriba: '], ['*Pedido* o *Compra*']).addAnswer(['Para regresar escriba'], ['Inicio']);
var flowListaProd = addKeyword(['Lista', 'Productos']).addAnswer('En breves momentos le enviaremos la lista de productos con precios actualizados').addAnswer(['Para hacer un pedido escriba'], ['*Pedido* o *Compra*']).addAnswer(['Para regresar escriba:'], ['*Inicio*']);
var flowPedido = addKeyword(['Pedido', 'Compra']).addAnswer('A continuación, se van a solicitar una serie de datos para concretar su *Pedido* / *Compra*').addAnswer(['Por favor, Indique su nombre']).addAnswer(['Por favor, indique su número de documento']).addAnswer(['Por favor, indique su numero telefonico']).addAnswer(['Por favor, indique su email']).addAnswer('Muy bien, le indicamos que sus datos permaneceran bajo nuestro resguardo de forma segura').addAnswer(['Indique el codigo del producto']).addAnswer(['Cantidad de productos']).addAnswer(['Para agregar otro producto escriba'], ['Nuevo']).addAnswer(['Para finalizar el pedido escriba: '], ['Fin']).addAnswer(['Para regresar escriba:'], ['Inicio']);

var main = function main() {
  var adapterDB, adapterFlow, adapterProvider;
  return regeneratorRuntime.async(function main$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          adapterDB = new MockAdapter();
          adapterFlow = createFlow([flowPrincipal, flowTerminos, flowListaProd, flowPedido]);
          adapterProvider = createProvider(BaileysProvider);
          createBot({
            flow: adapterFlow,
            provider: adapterProvider,
            database: adapterDB
          });
          QRPortalWeb();

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};

main();