var ethUtil = require('ethereumjs-util');


function verifyMsg(msg, sig, address) {

    try {
        var msghash = ethUtil.sha3(msg);
        var sig = ethUtil.toBuffer(sig);
        var v = sig[64]
        var r = sig.slice(0,32);
        var s = sig.slice(32, 64);
        if (v < 27) {
              v += 27
        }
        var pubKey = ethUtil.ecrecover(
            ethUtil.toBuffer(msghash),
            ethUtil.toBuffer(parseInt(v)),
            ethUtil.toBuffer(r),
            ethUtil.toBuffer(s)
         )

       return address === ethUtil.bufferToHex(ethUtil.publicToAddress(pubKey))
    }
    catch(e) {
        return false;
    }
}

module.exports = verifyMsg;
