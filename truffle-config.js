var HDWalletProvider = require("truffle-hdwallet-provider");

var mnemonic = ""; //Write metamask mnemonic here
module.exports = {
    networks: {
         development: {
              host: "localhost",
              port: 8545,
              network_id: "*" // Match any network id
            },
            ropsten: {
              // must be a thunk, otherwise truffle commands may hang in CI
              provider: () =>
                new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/523f7103f84640b1a1047494fb2a0337"), //this is from infura
              network_id: '3',                                               
                        }
       }
};
