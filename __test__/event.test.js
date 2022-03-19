'use strict';
const events = require('../lib/events')
const { faker } = require('@faker-js/faker');

let storeName = {
    store: "my store",
    orderID: faker.datatype.uuid(),
    customer: faker.name.findName(),
    address: `${faker.address.city()}, ${faker.address.stateAbbr()}`,
};

describe('test EventEmitter', () => {
    let consoleSpy;
    beforeAll(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    })

    it('pickup EventEmitter', async () => {
        events.emit('pickup', storeName);
        await consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    })
    it('in-transiet EventEmitter', async () => {
        events.emit('in-transit', storeName);
        await consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    })
    it('delivered EventEmitter', async () => {
        events.emit('delivered', storeName);
        await consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    })
})