var assert = require('assert');
var verifyMsg = require('./verifyMsg.js');

var testAddress = '0xb2455e4a86569de3d6629bfa6ad2b021c3f5ba20';
var testSig = '0x5b803deec340f527daea89e542d249e8225c423ef1a473689db72d959981275b21f128cd8aff1cd5ae3a1a0534f4214bd271a28ba88094888492474fcebed4ce01';
var testMsg = 'hello';

assert.equal(verifyMsg(testMsg, testSig, testAddress), true);
