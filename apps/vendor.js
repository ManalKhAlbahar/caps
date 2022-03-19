'use strict';

const { faker } = require('@faker-js/faker');

let storeName = {
    store: "My store",
    orderID: faker.datatype.uuid(),
    customer: faker.name.findName(),
    address: `${faker.address.city()}, ${faker.address.stateAbbr()}`,
};
module.exports = storeName;