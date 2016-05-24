var EthTx = require('ethereumjs-tx');

function verifyTx(signedTx, address) {
    var tx = new EthTx(signedTx);
    try {
        if(tx.verifySignature()) {
            return address.toLowerCase() === '0x'+tx.from.toString('hex');
        }
        return false;
    }
    catch(e) {
        return false;
    }
}

module.exports = verifyTx;
