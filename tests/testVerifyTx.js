var assert = require('assert');
var verifyTx = require('./verifyTx.js');

var testAddress = "0x6E9e27c68921014Be7440FdDded0B97621feA2bD";
var testSignedTx = "0xf864808504e3b29200825208946e9e27c68921014be7440fddded0b97621fea2bd80801ba0f9d51e7ea9364ccec5ef5008fbb6b3430cbb76c1bb24e232c3c77f38ece2f1d8a05502679d6ed494e55f78eb2fc0a1f3b02aff8277189071cefe01bcda9881f4cb";

assert.equal(verifyTx(testSignedTx, testAddress), true)
