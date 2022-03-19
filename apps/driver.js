'use strict';
const eventEmitter = require('../lib/events');
const vendor = require('./vendor')

// Event Handler 
eventEmitter.on('pickup', pickupHandler)
eventEmitter.on('in-transit', inTransietHandler)
eventEmitter.on('delivered', deliveredHandler);

function ProductsHandler() {
    eventEmitter.emit('pickup', {
        event: "pickup",
        time: new Date().toString(),
        payload: vendor
    })
};
function pickupHandler(payload) {
    console.log("EVENT", payload)
    console.log(`DRIVER : picked up ${payload.payload.orderID} `)
    setTimeout(() => {
        (eventEmitter.emit('in-transit', payload), 1000)
    })
}
function inTransietHandler(payload) {
    payload.event = 'in-transit'
    payload.time = new Date().toString();
    console.log("EVENT", payload);
    setTimeout(() => {
        (eventEmitter.emit('delivered', payload), 3000)
    })
}
function deliveredHandler(payload) {
    payload.event = 'delivered'
    payload.time = new Date().toString();
    console.log(`DRIVER : delivered up ${payload.payload.orderID}`)
    console.log(`VENDOR : Thank you for delivering ${payload.payload.orderID}`)
    console.log("EVENT", payload);
}
module.exports = { ProductsHandler };