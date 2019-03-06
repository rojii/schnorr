'use strict';

const hash256 = require('bcrypto/lib/hash256');
const secp256k1 = require('bcrypto/lib/secp256k1');
const schnorr = require('../lib/schnorr');
const bench = require('./bench');

{
  const end = bench('verification');
  const msg = hash256.digest(Buffer.from('schnorr', 'ascii'));
  const key = secp256k1.privateKeyGenerate();
  const pub = secp256k1.publicKeyCreate(key, true);
  const sig = schnorr.sign(msg, key);

  for (let i = 0; i < 10000; i++)
    schnorr.verify(msg, sig, pub);
    end(10000);
}
