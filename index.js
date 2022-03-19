'use strict';
const driver = require('./apps/driver')
setInterval(()=>{
    driver.ProductsHandler();
},3000);