//16/04/24 - RLB
// This script will only work for players connected via Ethernet 

//npx webpack --config webpack.config.js

console.log("node proxy server for BS player version 1.0")

const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');

const diClass = require('@brightsign/deviceinfo');

var networkConfigClass = require("@brightsign/networkconfiguration");
var nc = new networkConfigClass("eth0");

var NetworkStatus = require("@brightsign/networkstatus");
var networkStatus = new NetworkStatus();

const di = new diClass();
let SN = di.serialNumber;
let model = di.model;
let OSversion = di.osVersion;

console.log(SN);
console.log(model);
console.log(OSversion);

networkStatus.getInterfaceStatus("eth0").then(
    function(data) {
        console.log("***General Interface Data***");
        console.log(JSON.stringify(data));
        console.log(data);
        console.log("player IP Address: ",data.ipAddressList[0].address)
        console.log("Access Proxy server - via:  http://" + data.ipAddressList[0].address + ":8000")
    })
.catch(
    function(data) {
        console.log(JSON.stringify(data));
});

app.use(express.urlencoded({ extended: true }));

app.post('/proxy', async (req, res) => {
    try {
        const url = req.body.url; // URL of the external site
        const response = await axios.post(url);
        res.send(response.data);
    } catch (error) {
        res.status(500).send('Error submitting form');
    }
});

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Proxy server running on port ${PORT}`);
});