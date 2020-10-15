require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'imitate prize flock tribe street dash stereo erosion journey clog metal ghost'; 
let testAccounts = [
"0xfaa9105d66186cb654ebd043925bf11e5aa4d54d1395c2f4a3e01f97103ca023",
"0x27da991aeb4c599292766a9741446684d2693eaad56cbce71757129342300ccc",
"0xbe283c770b700167f28e7d3b6316f6507388d68bdddda8531330d129791390f2",
"0x942170d1aca06bbc13e19d0b12ef0dc0d926833412c9baa8d4bd133aa44b1bfb",
"0x26c96edcd3364395483f61892c72710913ba496bb705fdd130315f31c8836669",
"0x75c5af5f56ee771cfb5e5b370be26b35bad82a3725c25d7be73f26cff7bd7959",
"0x774b13474b4014409a2d9d6623bbb24600ebbb01fa254f15c2173d0d6905f14d",
"0x7548a540994d54fae2fa6270808f8f060897fdd2b7bf34e2bf2a7db5ba9e3c4e",
"0x8e0e9ad0ba55d13e327c66b40c553475f530882e8ce90c9c1a271fe16b69f89f",
"0x805bffaaa0d6434bb10a2c625f0e9145050e7f93b2645ae90202b5227613a501"
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
            version: '^0.5.11'
        }
    }
};
