require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom problem brown turtle chaos rare remain method guess climb olympic sort'; 
let testAccounts = [
"0x94146b2d5f746e0bf00a8f7842d9e2e001db3f312ed0471b5d71965978ef6bc4",
"0x11d682a2702d01a54ede6e3a0b256cdfabf49b31307a9b6b3280faf34d7dd54f",
"0xc66e027dabfbf088694902efad706794cee621aa8c2a05736f9db721698fc63f",
"0x0df8df3ae7c39658f72ac4fbf587f8755dd32f2fbec512a8d40d7597f8f161d8",
"0x8806fc1eac9ce1cf2278075b98a4322b9b19be981578b89d0bfb415c81e7345b",
"0xd1235b8c79e58719a901a3ece071e5999f38b2b5f94958d6a2d26f1d43769280",
"0xbd3c19b4dc4fd8cc63eebf74e1a976f48a18daa0823230edfd6913dcbd7c3e5a",
"0x6d61aacb13857edbcca6d7fe23f8ee9dfcd3cc788a8d470e1bfd3623f602600e",
"0xabe0ba262350dd72b8e9107174717b38734cf61fb0450fd692d6e9142f85dc1e",
"0x37060e3d9ee2ca94ef97a690b957e43ab6c6104601edb096e73113565d081684"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

