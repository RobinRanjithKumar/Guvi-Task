
//IpAddress
const os = require('os');

function getLocalIpAddress() {
    const interfaces = os.networkInterfaces();
    for (let iface in interfaces) {
        for (let alias of interfaces[iface]) {
            if (alias.family === 'IPv4' && !alias.internal) {
                return alias.address;
            }
        }
    }
    return '0.0.0.0';
}
//MAC address

console.log("Local IP Address:", getLocalIpAddress());


const macaddress = require('macaddress');

macaddress.all((err, all) => {
    if (err) {
        console.error("Error retrieving MAC addresses:", err);
        return;
    }
    console.log("MAC Addresses:", all);
});

macaddress.one((err, mac) => {
    if (err) {
        console.error("Error retrieving MAC address:", err);
        return;
    }
    console.log("Default MAC Address:", mac);
});