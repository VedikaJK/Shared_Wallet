function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./build/contracts/SimpleWallet.json":
  /*!*******************************************!*\
    !*** ./build/contracts/SimpleWallet.json ***!
    \*******************************************/

  /*! exports provided: contractName, abi, metadata, bytecode, deployedBytecode, sourceMap, deployedSourceMap, source, sourcePath, ast, legacyAST, compiler, networks, schemaVersion, updatedAt, networkType, devdoc, userdoc, default */

  /***/
  function buildContractsSimpleWalletJson(module) {
    module.exports = JSON.parse("{\"contractName\":\"SimpleWallet\",\"abi\":[{\"inputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_sender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"Deposit\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_sender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_beneficiary\",\"type\":\"address\"}],\"name\":\"Withdrawal\",\"type\":\"event\"},{\"payable\":true,\"stateMutability\":\"payable\",\"type\":\"fallback\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"AllowedAddressesToSendFunds\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"allowed\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"withdrawals\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"money\",\"type\":\"uint256\"},{\"internalType\":\"address payable\",\"name\":\"receiver\",\"type\":\"address\"}],\"name\":\"sendFunds\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"_adr\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_index\",\"type\":\"uint256\"}],\"name\":\"getWithdrawal\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"_adr\",\"type\":\"address\"}],\"name\":\"AllowAddressToSendFunds\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"_adr\",\"type\":\"address\"}],\"name\":\"DisallowAddressToSendFunds\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"_adr\",\"type\":\"address\"}],\"name\":\"CheckIfAllowed\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"killWallet\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"metadata\":\"{\\\"compiler\\\":{\\\"version\\\":\\\"0.5.12+commit.7709ece9\\\"},\\\"language\\\":\\\"Solidity\\\",\\\"output\\\":{\\\"abi\\\":[{\\\"inputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"constructor\\\"},{\\\"anonymous\\\":false,\\\"inputs\\\":[{\\\"indexed\\\":false,\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"_sender\\\",\\\"type\\\":\\\"address\\\"},{\\\"indexed\\\":false,\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"_amount\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"Deposit\\\",\\\"type\\\":\\\"event\\\"},{\\\"anonymous\\\":false,\\\"inputs\\\":[{\\\"indexed\\\":false,\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"_sender\\\",\\\"type\\\":\\\"address\\\"},{\\\"indexed\\\":false,\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"_amount\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"indexed\\\":false,\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"_beneficiary\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"Withdrawal\\\",\\\"type\\\":\\\"event\\\"},{\\\"payable\\\":true,\\\"stateMutability\\\":\\\"payable\\\",\\\"type\\\":\\\"fallback\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"_adr\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"AllowAddressToSendFunds\\\",\\\"outputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"AllowedAddressesToSendFunds\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"bool\\\",\\\"name\\\":\\\"allowed\\\",\\\"type\\\":\\\"bool\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"withdrawals\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"_adr\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"CheckIfAllowed\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"bool\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"bool\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"_adr\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"DisallowAddressToSendFunds\\\",\\\"outputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"_adr\\\",\\\"type\\\":\\\"address\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"_index\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"getWithdrawal\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[],\\\"name\\\":\\\"killWallet\\\",\\\"outputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"money\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"address payable\\\",\\\"name\\\":\\\"receiver\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"sendFunds\\\",\\\"outputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"}],\\\"devdoc\\\":{\\\"methods\\\":{}},\\\"userdoc\\\":{\\\"methods\\\":{}}},\\\"settings\\\":{\\\"compilationTarget\\\":{\\\"/C/angbox_/contracts/SimpleWallet.sol\\\":\\\"SimpleWallet\\\"},\\\"evmVersion\\\":\\\"petersburg\\\",\\\"libraries\\\":{},\\\"optimizer\\\":{\\\"enabled\\\":false,\\\"runs\\\":200},\\\"remappings\\\":[]},\\\"sources\\\":{\\\"/C/angbox_/contracts/SimpleWallet.sol\\\":{\\\"keccak256\\\":\\\"0x28dd48d945448b1b4e7b3deefa5367023d934004ca9eee11246b116a169db908\\\",\\\"urls\\\":[\\\"bzz-raw://395f2669b2bcc69c6f9ae7dbda0783d391798ac78a5076fb060291fe56dd1b59\\\",\\\"dweb:/ipfs/QmPAKFHstxamreFCKGcgkkHApCBvbdPSUXcZpYFaVdubfP\\\"]}},\\\"version\\\":1}\",\"bytecode\":\"0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060018060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160006101000a81548160ff021916908315150217905550610c2e806100db6000396000f3fe6080604052600436106100705760003560e01c8063803e96cc1161004e578063803e96cc146102b4578063b25525d214610305578063b268677414610375578063b67ba1b5146103d057610070565b806331c4087e146101585780635be4f765146101a95780636f33f8101461024b575b610079336103e7565b6100eb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f596f7520617265206e6f7420616c6c6f7765642100000000000000000000000081525060200191505060405180910390fd5b7fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c3334604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a1005b34801561016457600080fd5b506101a76004803603602081101561017b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610440565b005b3480156101b557600080fd5b50610202600480360360408110156101cc57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610560565b604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390f35b34801561025757600080fd5b5061029a6004803603602081101561026e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506103e7565b604051808215151515815260200191505060405180910390f35b3480156102c057600080fd5b50610303600480360360208110156102d757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061063c565b005b34801561031157600080fd5b506103546004803603602081101561032857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061075b565b60405180831515151581526020018281526020019250505060405180910390f35b34801561038157600080fd5b506103ce6004803603604081101561039857600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061078c565b005b3480156103dc57600080fd5b506103e5610afd565b005b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff169050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610502576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f596f7520617265206e6f7420616c6c6f7765642100000000000000000000000081525060200191505060405180910390fd5b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160006101000a81548160ff02191690831515021790555050565b600080600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201600084815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201600085815260200190815260200160002060010154915091509250929050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146106fe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f596f7520617265206e6f7420616c6c6f7765642100000000000000000000000081525060200191505060405180910390fd5b60018060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160006101000a81548160ff02191690831515021790555050565b60016020528060005260406000206000915090508060000160009054906101000a900460ff16908060010154905082565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff1661084e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f596f7520617265206e6f7420616c6c6f7765642100000000000000000000000081525060200191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f19350505050158015610894573d6000803e3d6000fd5b507e1a143d5b175701cb3246058ffac3d63945192075a926ff73a19930f09d587a338383604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001935050505060405180910390a1600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001016000815480929190600101919050555080600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002016000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002016000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101548152602001908152602001600020600101819055505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610bbf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f596f7520617265206e6f7420616c6c6f7765642100000000000000000000000081525060200191505060405180910390fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16fffea265627a7a72315820bb37a8a885c251649f8eca794f1234030b284f95c2709157e1575222345589a564736f6c634300050c0032\",\"deployedBytecode\":\"0x6080604052600436106100705760003560e01c8063803e96cc1161004e578063803e96cc146102b4578063b25525d214610305578063b268677414610375578063b67ba1b5146103d057610070565b806331c4087e146101585780635be4f765146101a95780636f33f8101461024b575b610079336103e7565b6100eb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f596f7520617265206e6f7420616c6c6f7765642100000000000000000000000081525060200191505060405180910390fd5b7fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c3334604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a1005b34801561016457600080fd5b506101a76004803603602081101561017b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610440565b005b3480156101b557600080fd5b50610202600480360360408110156101cc57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610560565b604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390f35b34801561025757600080fd5b5061029a6004803603602081101561026e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506103e7565b604051808215151515815260200191505060405180910390f35b3480156102c057600080fd5b50610303600480360360208110156102d757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061063c565b005b34801561031157600080fd5b506103546004803603602081101561032857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061075b565b60405180831515151581526020018281526020019250505060405180910390f35b34801561038157600080fd5b506103ce6004803603604081101561039857600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061078c565b005b3480156103dc57600080fd5b506103e5610afd565b005b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff169050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610502576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f596f7520617265206e6f7420616c6c6f7765642100000000000000000000000081525060200191505060405180910390fd5b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160006101000a81548160ff02191690831515021790555050565b600080600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201600084815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201600085815260200190815260200160002060010154915091509250929050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146106fe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f596f7520617265206e6f7420616c6c6f7765642100000000000000000000000081525060200191505060405180910390fd5b60018060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160006101000a81548160ff02191690831515021790555050565b60016020528060005260406000206000915090508060000160009054906101000a900460ff16908060010154905082565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff1661084e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f596f7520617265206e6f7420616c6c6f7765642100000000000000000000000081525060200191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f19350505050158015610894573d6000803e3d6000fd5b507e1a143d5b175701cb3246058ffac3d63945192075a926ff73a19930f09d587a338383604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001935050505060405180910390a1600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001016000815480929190600101919050555080600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002016000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002016000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101548152602001908152602001600020600101819055505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610bbf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f596f7520617265206e6f7420616c6c6f7765642100000000000000000000000081525060200191505060405180910390fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16fffea265627a7a72315820bb37a8a885c251649f8eca794f1234030b284f95c2709157e1575222345589a564736f6c634300050c0032\",\"sourceMap\":\"27:2387:1:-;;;528:127;8:9:-1;5:2;;;30:1;27;20:12;5:2;528:127:1;567:10;559:5;;:18;;;;;;;;;;;;;;;;;;633:4;588:27;:34;616:5;;;;;;;;;;;588:34;;;;;;;;;;;;;;;:42;;;:49;;;;;;;;;;;;;;;;;;27:2387;;;;;;\",\"deployedSourceMap\":\"27:2387:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;935:26;950:10;935:14;:26::i;:::-;927:58;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1001:29;1009:10;1020:9;1001:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;27:2387;2045:134;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2045:134:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2045:134:1;;;;;;;;;;;;;;;;;;;:::i;:::-;;1681:216;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1681:216:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1681:216:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2187:130;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2187:130:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2187:130:1;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1909;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1909:130:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1909:130:1;;;;;;;;;;;;;;;;;;;:::i;:::-;;312:60;;8:9:-1;5:2;;;30:1;27;20:12;5:2;312:60:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;312:60:1;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1075:593;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1075:593:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1075:593:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;2329:76;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2329:76:1;;;:::i;:::-;;2187:130;2245:4;2268:27;:33;2296:4;2268:33;;;;;;;;;;;;;;;:41;;;;;;;;;;;;2261:48;;2187:130;;;:::o;2045:134::-;719:5;;;;;;;;;;;707:17;;:10;:17;;;699:49;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2166:5;2122:27;:33;2150:4;2122:33;;;;;;;;;;;;;;;:41;;;:49;;;;;;;;;;;;;;;;;;2045:134;:::o;1681:216::-;1750:7;1758:4;1781:27;:33;1809:4;1781:33;;;;;;;;;;;;;;;:40;;:48;1822:6;1781:48;;;;;;;;;;;:51;;;;;;;;;;;;1833:27;:33;1861:4;1833:33;;;;;;;;;;;;;;;:40;;:48;1874:6;1833:48;;;;;;;;;;;:55;;;1774:115;;;;1681:216;;;;;:::o;1909:130::-;719:5;;;;;;;;;;;707:17;;:10;:17;;;699:49;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2027:4;1983:27;:33;2011:4;1983:33;;;;;;;;;;;;;;;:41;;;:48;;;;;;;;;;;;;;;;;;1909:130;:::o;312:60::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1075:593::-;1158:27;:39;1186:10;1158:39;;;;;;;;;;;;;;;:47;;;;;;;;;;;;1150:79;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1240:8;:17;;:24;1258:5;1240:24;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1240:24:1;1280:37;1291:10;1302:5;1308:8;1280:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1328:27;:39;1356:10;1328:39;;;;;;;;;;;;;;;:51;;;:53;;;;;;;;;;;;;1497:8;1392:27;:39;1420:10;1392:39;;;;;;;;;;;;;;;:46;;:99;1439:27;:39;1467:10;1439:39;;;;;;;;;;;;;;;:51;;;1392:99;;;;;;;;;;;:102;;;:113;;;;;;;;;;;;;;;;;;1625:5;1516:27;:39;1544:10;1516:39;;;;;;;;;;;;;;;:46;;:99;1563:27;:39;1591:10;1563:39;;;;;;;;;;;;;;;:51;;;1516:99;;;;;;;;;;;:106;;:114;;;;1075:593;;:::o;2329:76::-;719:5;;;;;;;;;;;707:17;;:10;:17;;;699:49;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2391:5;;;;;;;;;;;2378:19;;\",\"source\":\"pragma solidity ^0.5.0;\\r\\n\\r\\ncontract SimpleWallet{\\r\\n    \\r\\n    struct withdrawalStruct{\\r\\n        address to;\\r\\n        uint amount;\\r\\n    }\\r\\n    \\r\\n    struct  Senders{\\r\\n        bool allowed ;\\r\\n        uint withdrawals ;\\r\\n        mapping(uint=>withdrawalStruct)  record;\\r\\n    }\\r\\n    \\r\\n    address payable owner;\\r\\n    mapping(address=>Senders) public AllowedAddressesToSendFunds;\\r\\n    \\r\\n    \\r\\n    event Deposit(address _sender,uint _amount);\\r\\n    event Withdrawal(address _sender,uint _amount, address _beneficiary);\\r\\n    \\r\\n    \\r\\n    constructor() public{\\r\\n        owner = msg.sender;\\r\\n        AllowedAddressesToSendFunds[owner].allowed = true;\\r\\n        \\r\\n    }\\r\\n    \\r\\n    modifier onlyOwner(){\\r\\n         require(msg.sender==owner,\\\"You are not allowed!\\\");\\r\\n        _;\\r\\n    }\\r\\n    \\r\\n    //Deposit function\\r\\n    function() external payable {\\r\\n        //require(AllowedAddressesToSendFunds[msg.sender],\\\"You are not allowed!\\\");\\r\\n        require(CheckIfAllowed(msg.sender),\\\"You are not allowed!\\\");\\r\\n        emit Deposit(msg.sender,msg.value);\\r\\n    }\\r\\n    \\r\\n    //Withdraw function\\r\\n    function sendFunds(uint money, address payable receiver) public {\\r\\n        require(AllowedAddressesToSendFunds[msg.sender].allowed,\\\"You are not allowed!\\\");\\r\\n        receiver.transfer(money);\\r\\n        emit Withdrawal(msg.sender,money,receiver);\\r\\n        AllowedAddressesToSendFunds[msg.sender].withdrawals++;\\r\\n        AllowedAddressesToSendFunds[msg.sender].record[AllowedAddressesToSendFunds[msg.sender].withdrawals].to = receiver;\\r\\n        AllowedAddressesToSendFunds[msg.sender].record[AllowedAddressesToSendFunds[msg.sender].withdrawals].amount = money;\\r\\n        \\r\\n        \\r\\n        \\r\\n    } \\r\\n    \\r\\n    function getWithdrawal(address _adr,uint _index) public view returns(address,uint){\\r\\n        return(AllowedAddressesToSendFunds[_adr].record[_index].to,AllowedAddressesToSendFunds[_adr].record[_index].amount);\\r\\n    }\\r\\n    \\r\\n    function AllowAddressToSendFunds(address _adr) public onlyOwner{\\r\\n        AllowedAddressesToSendFunds[_adr].allowed = true;\\r\\n    }\\r\\n    function DisallowAddressToSendFunds(address _adr) public onlyOwner{\\r\\n        AllowedAddressesToSendFunds[_adr].allowed = false;\\r\\n    }\\r\\n\\r\\n    function CheckIfAllowed(address _adr) public view returns(bool){\\r\\n        return AllowedAddressesToSendFunds[_adr].allowed;\\r\\n    }\\r\\n    \\r\\n    function killWallet() public onlyOwner{\\r\\n        selfdestruct(owner);\\r\\n    }\\r\\n    \\r\\n}\",\"sourcePath\":\"C:/angbox_/contracts/SimpleWallet.sol\",\"ast\":{\"absolutePath\":\"/C/angbox_/contracts/SimpleWallet.sol\",\"exportedSymbols\":{\"SimpleWallet\":[288]},\"id\":289,\"nodeType\":\"SourceUnit\",\"nodes\":[{\"id\":58,\"literals\":[\"solidity\",\"^\",\"0.5\",\".0\"],\"nodeType\":\"PragmaDirective\",\"src\":\"0:23:1\"},{\"baseContracts\":[],\"contractDependencies\":[],\"contractKind\":\"contract\",\"documentation\":null,\"fullyImplemented\":true,\"id\":288,\"linearizedBaseContracts\":[288],\"name\":\"SimpleWallet\",\"nodeType\":\"ContractDefinition\",\"nodes\":[{\"canonicalName\":\"SimpleWallet.withdrawalStruct\",\"id\":63,\"members\":[{\"constant\":false,\"id\":60,\"name\":\"to\",\"nodeType\":\"VariableDeclaration\",\"scope\":63,\"src\":\"95:10:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":59,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"95:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":62,\"name\":\"amount\",\"nodeType\":\"VariableDeclaration\",\"scope\":63,\"src\":\"116:11:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":61,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"116:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"}],\"name\":\"withdrawalStruct\",\"nodeType\":\"StructDefinition\",\"scope\":288,\"src\":\"61:74:1\",\"visibility\":\"public\"},{\"canonicalName\":\"SimpleWallet.Senders\",\"id\":72,\"members\":[{\"constant\":false,\"id\":65,\"name\":\"allowed\",\"nodeType\":\"VariableDeclaration\",\"scope\":72,\"src\":\"173:12:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":64,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"173:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":67,\"name\":\"withdrawals\",\"nodeType\":\"VariableDeclaration\",\"scope\":72,\"src\":\"197:16:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":66,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"197:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":71,\"name\":\"record\",\"nodeType\":\"VariableDeclaration\",\"scope\":72,\"src\":\"225:39:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_uint256_$_t_struct$_withdrawalStruct_$63_storage_$\",\"typeString\":\"mapping(uint256 => struct SimpleWallet.withdrawalStruct)\"},\"typeName\":{\"id\":70,\"keyType\":{\"id\":68,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"233:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Mapping\",\"src\":\"225:31:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_uint256_$_t_struct$_withdrawalStruct_$63_storage_$\",\"typeString\":\"mapping(uint256 => struct SimpleWallet.withdrawalStruct)\"},\"valueType\":{\"contractScope\":null,\"id\":69,\"name\":\"withdrawalStruct\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":63,\"src\":\"239:16:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_withdrawalStruct_$63_storage_ptr\",\"typeString\":\"struct SimpleWallet.withdrawalStruct\"}}},\"value\":null,\"visibility\":\"internal\"}],\"name\":\"Senders\",\"nodeType\":\"StructDefinition\",\"scope\":288,\"src\":\"147:125:1\",\"visibility\":\"public\"},{\"constant\":false,\"id\":74,\"name\":\"owner\",\"nodeType\":\"VariableDeclaration\",\"scope\":288,\"src\":\"284:21:1\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"},\"typeName\":{\"id\":73,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"284:15:1\",\"stateMutability\":\"payable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":78,\"name\":\"AllowedAddressesToSendFunds\",\"nodeType\":\"VariableDeclaration\",\"scope\":288,\"src\":\"312:60:1\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_Senders_$72_storage_$\",\"typeString\":\"mapping(address => struct SimpleWallet.Senders)\"},\"typeName\":{\"id\":77,\"keyType\":{\"id\":75,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"320:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"Mapping\",\"src\":\"312:25:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_Senders_$72_storage_$\",\"typeString\":\"mapping(address => struct SimpleWallet.Senders)\"},\"valueType\":{\"contractScope\":null,\"id\":76,\"name\":\"Senders\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":72,\"src\":\"329:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_Senders_$72_storage_ptr\",\"typeString\":\"struct SimpleWallet.Senders\"}}},\"value\":null,\"visibility\":\"public\"},{\"anonymous\":false,\"documentation\":null,\"id\":84,\"name\":\"Deposit\",\"nodeType\":\"EventDefinition\",\"parameters\":{\"id\":83,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":80,\"indexed\":false,\"name\":\"_sender\",\"nodeType\":\"VariableDeclaration\",\"scope\":84,\"src\":\"405:15:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":79,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"405:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":82,\"indexed\":false,\"name\":\"_amount\",\"nodeType\":\"VariableDeclaration\",\"scope\":84,\"src\":\"421:12:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":81,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"421:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"404:30:1\"},\"src\":\"391:44:1\"},{\"anonymous\":false,\"documentation\":null,\"id\":92,\"name\":\"Withdrawal\",\"nodeType\":\"EventDefinition\",\"parameters\":{\"id\":91,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":86,\"indexed\":false,\"name\":\"_sender\",\"nodeType\":\"VariableDeclaration\",\"scope\":92,\"src\":\"458:15:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":85,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"458:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":88,\"indexed\":false,\"name\":\"_amount\",\"nodeType\":\"VariableDeclaration\",\"scope\":92,\"src\":\"474:12:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":87,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"474:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":90,\"indexed\":false,\"name\":\"_beneficiary\",\"nodeType\":\"VariableDeclaration\",\"scope\":92,\"src\":\"488:20:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":89,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"488:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"457:52:1\"},\"src\":\"441:69:1\"},{\"body\":{\"id\":107,\"nodeType\":\"Block\",\"src\":\"548:107:1\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"id\":98,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"argumentTypes\":null,\"id\":95,\"name\":\"owner\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":74,\"src\":\"559:5:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":96,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":303,\"src\":\"567:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":97,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"567:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"src\":\"559:18:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"id\":99,\"nodeType\":\"ExpressionStatement\",\"src\":\"559:18:1\"},{\"expression\":{\"argumentTypes\":null,\"id\":105,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":100,\"name\":\"AllowedAddressesToSendFunds\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":78,\"src\":\"588:27:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_Senders_$72_storage_$\",\"typeString\":\"mapping(address => struct SimpleWallet.Senders storage ref)\"}},\"id\":102,\"indexExpression\":{\"argumentTypes\":null,\"id\":101,\"name\":\"owner\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":74,\"src\":\"616:5:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"588:34:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_Senders_$72_storage\",\"typeString\":\"struct SimpleWallet.Senders storage ref\"}},\"id\":103,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"allowed\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":65,\"src\":\"588:42:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"argumentTypes\":null,\"hexValue\":\"74727565\",\"id\":104,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"bool\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"633:4:1\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"value\":\"true\"},\"src\":\"588:49:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"id\":106,\"nodeType\":\"ExpressionStatement\",\"src\":\"588:49:1\"}]},\"documentation\":null,\"id\":108,\"implemented\":true,\"kind\":\"constructor\",\"modifiers\":[],\"name\":\"\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":93,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"539:2:1\"},\"returnParameters\":{\"id\":94,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"548:0:1\"},\"scope\":288,\"src\":\"528:127:1\",\"stateMutability\":\"nonpayable\",\"superFunction\":null,\"visibility\":\"public\"},{\"body\":{\"id\":119,\"nodeType\":\"Block\",\"src\":\"687:81:1\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"commonType\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"},\"id\":114,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":111,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":303,\"src\":\"707:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":112,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"707:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"==\",\"rightExpression\":{\"argumentTypes\":null,\"id\":113,\"name\":\"owner\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":74,\"src\":\"719:5:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"src\":\"707:17:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},{\"argumentTypes\":null,\"hexValue\":\"596f7520617265206e6f7420616c6c6f77656421\",\"id\":115,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"string\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"725:22:1\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_stringliteral_f9f18e7152ecb482b05bc745430c2e40c72dfba99431368b9d2fc7e8b7ebead8\",\"typeString\":\"literal_string \\\"You are not allowed!\\\"\"},\"value\":\"You are not allowed!\"}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},{\"typeIdentifier\":\"t_stringliteral_f9f18e7152ecb482b05bc745430c2e40c72dfba99431368b9d2fc7e8b7ebead8\",\"typeString\":\"literal_string \\\"You are not allowed!\\\"\"}],\"id\":110,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[306,307],\"referencedDeclaration\":307,\"src\":\"699:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$\",\"typeString\":\"function (bool,string memory) pure\"}},\"id\":116,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"699:49:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":117,\"nodeType\":\"ExpressionStatement\",\"src\":\"699:49:1\"},{\"id\":118,\"nodeType\":\"PlaceholderStatement\",\"src\":\"759:1:1\"}]},\"documentation\":null,\"id\":120,\"name\":\"onlyOwner\",\"nodeType\":\"ModifierDefinition\",\"parameters\":{\"id\":109,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"685:2:1\"},\"src\":\"667:101:1\",\"visibility\":\"internal\"},{\"body\":{\"id\":138,\"nodeType\":\"Block\",\"src\":\"832:206:1\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":125,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":303,\"src\":\"950:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":126,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"950:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}],\"id\":124,\"name\":\"CheckIfAllowed\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":277,\"src\":\"935:14:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_internal_view$_t_address_$returns$_t_bool_$\",\"typeString\":\"function (address) view returns (bool)\"}},\"id\":127,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"935:26:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},{\"argumentTypes\":null,\"hexValue\":\"596f7520617265206e6f7420616c6c6f77656421\",\"id\":128,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"string\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"962:22:1\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_stringliteral_f9f18e7152ecb482b05bc745430c2e40c72dfba99431368b9d2fc7e8b7ebead8\",\"typeString\":\"literal_string \\\"You are not allowed!\\\"\"},\"value\":\"You are not allowed!\"}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},{\"typeIdentifier\":\"t_stringliteral_f9f18e7152ecb482b05bc745430c2e40c72dfba99431368b9d2fc7e8b7ebead8\",\"typeString\":\"literal_string \\\"You are not allowed!\\\"\"}],\"id\":123,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[306,307],\"referencedDeclaration\":307,\"src\":\"927:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$\",\"typeString\":\"function (bool,string memory) pure\"}},\"id\":129,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"927:58:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":130,\"nodeType\":\"ExpressionStatement\",\"src\":\"927:58:1\"},{\"eventCall\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":132,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":303,\"src\":\"1009:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":133,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"1009:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":134,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":303,\"src\":\"1020:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":135,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"value\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"1020:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"},{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}],\"id\":131,\"name\":\"Deposit\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":84,\"src\":\"1001:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$\",\"typeString\":\"function (address,uint256)\"}},\"id\":136,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"1001:29:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":137,\"nodeType\":\"EmitStatement\",\"src\":\"996:34:1\"}]},\"documentation\":null,\"id\":139,\"implemented\":true,\"kind\":\"fallback\",\"modifiers\":[],\"name\":\"\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":121,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"812:2:1\"},\"returnParameters\":{\"id\":122,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"832:0:1\"},\"scope\":288,\"src\":\"804:234:1\",\"stateMutability\":\"payable\",\"superFunction\":null,\"visibility\":\"external\"},{\"body\":{\"id\":205,\"nodeType\":\"Block\",\"src\":\"1139:529:1\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":147,\"name\":\"AllowedAddressesToSendFunds\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":78,\"src\":\"1158:27:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_Senders_$72_storage_$\",\"typeString\":\"mapping(address => struct SimpleWallet.Senders storage ref)\"}},\"id\":150,\"indexExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":148,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":303,\"src\":\"1186:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":149,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"1186:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"1158:39:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_Senders_$72_storage\",\"typeString\":\"struct SimpleWallet.Senders storage ref\"}},\"id\":151,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"allowed\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":65,\"src\":\"1158:47:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},{\"argumentTypes\":null,\"hexValue\":\"596f7520617265206e6f7420616c6c6f77656421\",\"id\":152,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"string\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"1206:22:1\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_stringliteral_f9f18e7152ecb482b05bc745430c2e40c72dfba99431368b9d2fc7e8b7ebead8\",\"typeString\":\"literal_string \\\"You are not allowed!\\\"\"},\"value\":\"You are not allowed!\"}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},{\"typeIdentifier\":\"t_stringliteral_f9f18e7152ecb482b05bc745430c2e40c72dfba99431368b9d2fc7e8b7ebead8\",\"typeString\":\"literal_string \\\"You are not allowed!\\\"\"}],\"id\":146,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[306,307],\"referencedDeclaration\":307,\"src\":\"1150:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$\",\"typeString\":\"function (bool,string memory) pure\"}},\"id\":153,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"1150:79:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":154,\"nodeType\":\"ExpressionStatement\",\"src\":\"1150:79:1\"},{\"expression\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"id\":158,\"name\":\"money\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":141,\"src\":\"1258:5:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}],\"expression\":{\"argumentTypes\":null,\"id\":155,\"name\":\"receiver\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":143,\"src\":\"1240:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"id\":157,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"transfer\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"1240:17:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_transfer_nonpayable$_t_uint256_$returns$__$\",\"typeString\":\"function (uint256)\"}},\"id\":159,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"1240:24:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":160,\"nodeType\":\"ExpressionStatement\",\"src\":\"1240:24:1\"},{\"eventCall\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":162,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":303,\"src\":\"1291:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":163,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"1291:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},{\"argumentTypes\":null,\"id\":164,\"name\":\"money\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":141,\"src\":\"1302:5:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},{\"argumentTypes\":null,\"id\":165,\"name\":\"receiver\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":143,\"src\":\"1308:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"},{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}],\"id\":161,\"name\":\"Withdrawal\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":92,\"src\":\"1280:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_event_nonpayable$_t_address_$_t_uint256_$_t_address_$returns$__$\",\"typeString\":\"function (address,uint256,address)\"}},\"id\":166,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"1280:37:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":167,\"nodeType\":\"EmitStatement\",\"src\":\"1275:42:1\"},{\"expression\":{\"argumentTypes\":null,\"id\":173,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"UnaryOperation\",\"operator\":\"++\",\"prefix\":false,\"src\":\"1328:53:1\",\"subExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":168,\"name\":\"AllowedAddressesToSendFunds\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":78,\"src\":\"1328:27:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_Senders_$72_storage_$\",\"typeString\":\"mapping(address => struct SimpleWallet.Senders storage ref)\"}},\"id\":171,\"indexExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":169,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":303,\"src\":\"1356:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":170,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"1356:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"1328:39:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_Senders_$72_storage\",\"typeString\":\"struct SimpleWallet.Senders storage ref\"}},\"id\":172,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"withdrawals\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":67,\"src\":\"1328:51:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":174,\"nodeType\":\"ExpressionStatement\",\"src\":\"1328:53:1\"},{\"expression\":{\"argumentTypes\":null,\"id\":188,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":175,\"name\":\"AllowedAddressesToSendFunds\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":78,\"src\":\"1392:27:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_Senders_$72_storage_$\",\"typeString\":\"mapping(address => struct SimpleWallet.Senders storage ref)\"}},\"id\":178,\"indexExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":176,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":303,\"src\":\"1420:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":177,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"1420:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"1392:39:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_Senders_$72_storage\",\"typeString\":\"struct SimpleWallet.Senders storage ref\"}},\"id\":179,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"record\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":71,\"src\":\"1392:46:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_uint256_$_t_struct$_withdrawalStruct_$63_storage_$\",\"typeString\":\"mapping(uint256 => struct SimpleWallet.withdrawalStruct storage ref)\"}},\"id\":185,\"indexExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":180,\"name\":\"AllowedAddressesToSendFunds\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":78,\"src\":\"1439:27:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_Senders_$72_storage_$\",\"typeString\":\"mapping(address => struct SimpleWallet.Senders storage ref)\"}},\"id\":183,\"indexExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":181,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":303,\"src\":\"1467:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":182,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"1467:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"1439:39:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_Senders_$72_storage\",\"typeString\":\"struct SimpleWallet.Senders storage ref\"}},\"id\":184,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"withdrawals\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":67,\"src\":\"1439:51:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"1392:99:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_withdrawalStruct_$63_storage\",\"typeString\":\"struct SimpleWallet.withdrawalStruct storage ref\"}},\"id\":186,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"to\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":60,\"src\":\"1392:102:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"argumentTypes\":null,\"id\":187,\"name\":\"receiver\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":143,\"src\":\"1497:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"src\":\"1392:113:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":189,\"nodeType\":\"ExpressionStatement\",\"src\":\"1392:113:1\"},{\"expression\":{\"argumentTypes\":null,\"id\":203,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":190,\"name\":\"AllowedAddressesToSendFunds\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":78,\"src\":\"1516:27:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_Senders_$72_storage_$\",\"typeString\":\"mapping(address => struct SimpleWallet.Senders storage ref)\"}},\"id\":193,\"indexExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":191,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":303,\"src\":\"1544:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":192,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"1544:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"1516:39:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_Senders_$72_storage\",\"typeString\":\"struct SimpleWallet.Senders storage ref\"}},\"id\":194,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"record\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":71,\"src\":\"1516:46:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_uint256_$_t_struct$_withdrawalStruct_$63_storage_$\",\"typeString\":\"mapping(uint256 => struct SimpleWallet.withdrawalStruct storage ref)\"}},\"id\":200,\"indexExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":195,\"name\":\"AllowedAddressesToSendFunds\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":78,\"src\":\"1563:27:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_Senders_$72_storage_$\",\"typeString\":\"mapping(address => struct SimpleWallet.Senders storage ref)\"}},\"id\":198,\"indexExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":196,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":303,\"src\":\"1591:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":197,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"1591:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"1563:39:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_Senders_$72_storage\",\"typeString\":\"struct SimpleWallet.Senders storage ref\"}},\"id\":199,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"withdrawals\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":67,\"src\":\"1563:51:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"1516:99:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_withdrawalStruct_$63_storage\",\"typeString\":\"struct SimpleWallet.withdrawalStruct storage ref\"}},\"id\":201,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"amount\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":62,\"src\":\"1516:106:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"argumentTypes\":null,\"id\":202,\"name\":\"money\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":141,\"src\":\"1625:5:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"1516:114:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":204,\"nodeType\":\"ExpressionStatement\",\"src\":\"1516:114:1\"}]},\"documentation\":null,\"id\":206,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"sendFunds\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":144,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":141,\"name\":\"money\",\"nodeType\":\"VariableDeclaration\",\"scope\":206,\"src\":\"1094:10:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":140,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1094:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":143,\"name\":\"receiver\",\"nodeType\":\"VariableDeclaration\",\"scope\":206,\"src\":\"1106:24:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"},\"typeName\":{\"id\":142,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1106:15:1\",\"stateMutability\":\"payable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"1093:38:1\"},\"returnParameters\":{\"id\":145,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"1139:0:1\"},\"scope\":288,\"src\":\"1075:593:1\",\"stateMutability\":\"nonpayable\",\"superFunction\":null,\"visibility\":\"public\"},{\"body\":{\"id\":233,\"nodeType\":\"Block\",\"src\":\"1763:134:1\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"components\":[{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":217,\"name\":\"AllowedAddressesToSendFunds\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":78,\"src\":\"1781:27:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_Senders_$72_storage_$\",\"typeString\":\"mapping(address => struct SimpleWallet.Senders storage ref)\"}},\"id\":219,\"indexExpression\":{\"argumentTypes\":null,\"id\":218,\"name\":\"_adr\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":208,\"src\":\"1809:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"1781:33:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_Senders_$72_storage\",\"typeString\":\"struct SimpleWallet.Senders storage ref\"}},\"id\":220,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"record\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":71,\"src\":\"1781:40:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_uint256_$_t_struct$_withdrawalStruct_$63_storage_$\",\"typeString\":\"mapping(uint256 => struct SimpleWallet.withdrawalStruct storage ref)\"}},\"id\":222,\"indexExpression\":{\"argumentTypes\":null,\"id\":221,\"name\":\"_index\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":210,\"src\":\"1822:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"1781:48:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_withdrawalStruct_$63_storage\",\"typeString\":\"struct SimpleWallet.withdrawalStruct storage ref\"}},\"id\":223,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"to\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":60,\"src\":\"1781:51:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":224,\"name\":\"AllowedAddressesToSendFunds\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":78,\"src\":\"1833:27:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_Senders_$72_storage_$\",\"typeString\":\"mapping(address => struct SimpleWallet.Senders storage ref)\"}},\"id\":226,\"indexExpression\":{\"argumentTypes\":null,\"id\":225,\"name\":\"_adr\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":208,\"src\":\"1861:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"1833:33:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_Senders_$72_storage\",\"typeString\":\"struct SimpleWallet.Senders storage ref\"}},\"id\":227,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"record\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":71,\"src\":\"1833:40:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_uint256_$_t_struct$_withdrawalStruct_$63_storage_$\",\"typeString\":\"mapping(uint256 => struct SimpleWallet.withdrawalStruct storage ref)\"}},\"id\":229,\"indexExpression\":{\"argumentTypes\":null,\"id\":228,\"name\":\"_index\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":210,\"src\":\"1874:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"1833:48:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_withdrawalStruct_$63_storage\",\"typeString\":\"struct SimpleWallet.withdrawalStruct storage ref\"}},\"id\":230,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"amount\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":62,\"src\":\"1833:55:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}}],\"id\":231,\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"TupleExpression\",\"src\":\"1780:109:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$_t_address_$_t_uint256_$\",\"typeString\":\"tuple(address,uint256)\"}},\"functionReturnParameters\":216,\"id\":232,\"nodeType\":\"Return\",\"src\":\"1774:115:1\"}]},\"documentation\":null,\"id\":234,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"getWithdrawal\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":211,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":208,\"name\":\"_adr\",\"nodeType\":\"VariableDeclaration\",\"scope\":234,\"src\":\"1704:12:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":207,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1704:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":210,\"name\":\"_index\",\"nodeType\":\"VariableDeclaration\",\"scope\":234,\"src\":\"1717:11:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":209,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1717:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"1703:26:1\"},\"returnParameters\":{\"id\":216,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":213,\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":234,\"src\":\"1750:7:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":212,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1750:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":215,\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":234,\"src\":\"1758:4:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":214,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1758:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"1749:14:1\"},\"scope\":288,\"src\":\"1681:216:1\",\"stateMutability\":\"view\",\"superFunction\":null,\"visibility\":\"public\"},{\"body\":{\"id\":248,\"nodeType\":\"Block\",\"src\":\"1972:67:1\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"id\":246,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":241,\"name\":\"AllowedAddressesToSendFunds\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":78,\"src\":\"1983:27:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_Senders_$72_storage_$\",\"typeString\":\"mapping(address => struct SimpleWallet.Senders storage ref)\"}},\"id\":243,\"indexExpression\":{\"argumentTypes\":null,\"id\":242,\"name\":\"_adr\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":236,\"src\":\"2011:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"1983:33:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_Senders_$72_storage\",\"typeString\":\"struct SimpleWallet.Senders storage ref\"}},\"id\":244,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"allowed\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":65,\"src\":\"1983:41:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"argumentTypes\":null,\"hexValue\":\"74727565\",\"id\":245,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"bool\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"2027:4:1\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"value\":\"true\"},\"src\":\"1983:48:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"id\":247,\"nodeType\":\"ExpressionStatement\",\"src\":\"1983:48:1\"}]},\"documentation\":null,\"id\":249,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"arguments\":null,\"id\":239,\"modifierName\":{\"argumentTypes\":null,\"id\":238,\"name\":\"onlyOwner\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":120,\"src\":\"1963:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"1963:9:1\"}],\"name\":\"AllowAddressToSendFunds\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":237,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":236,\"name\":\"_adr\",\"nodeType\":\"VariableDeclaration\",\"scope\":249,\"src\":\"1942:12:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":235,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1942:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"1941:14:1\"},\"returnParameters\":{\"id\":240,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"1972:0:1\"},\"scope\":288,\"src\":\"1909:130:1\",\"stateMutability\":\"nonpayable\",\"superFunction\":null,\"visibility\":\"public\"},{\"body\":{\"id\":263,\"nodeType\":\"Block\",\"src\":\"2111:68:1\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"id\":261,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":256,\"name\":\"AllowedAddressesToSendFunds\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":78,\"src\":\"2122:27:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_Senders_$72_storage_$\",\"typeString\":\"mapping(address => struct SimpleWallet.Senders storage ref)\"}},\"id\":258,\"indexExpression\":{\"argumentTypes\":null,\"id\":257,\"name\":\"_adr\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":251,\"src\":\"2150:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"2122:33:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_Senders_$72_storage\",\"typeString\":\"struct SimpleWallet.Senders storage ref\"}},\"id\":259,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"allowed\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":65,\"src\":\"2122:41:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"argumentTypes\":null,\"hexValue\":\"66616c7365\",\"id\":260,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"bool\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"2166:5:1\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"value\":\"false\"},\"src\":\"2122:49:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"id\":262,\"nodeType\":\"ExpressionStatement\",\"src\":\"2122:49:1\"}]},\"documentation\":null,\"id\":264,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"arguments\":null,\"id\":254,\"modifierName\":{\"argumentTypes\":null,\"id\":253,\"name\":\"onlyOwner\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":120,\"src\":\"2102:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"2102:9:1\"}],\"name\":\"DisallowAddressToSendFunds\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":252,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":251,\"name\":\"_adr\",\"nodeType\":\"VariableDeclaration\",\"scope\":264,\"src\":\"2081:12:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":250,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2081:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"2080:14:1\"},\"returnParameters\":{\"id\":255,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"2111:0:1\"},\"scope\":288,\"src\":\"2045:134:1\",\"stateMutability\":\"nonpayable\",\"superFunction\":null,\"visibility\":\"public\"},{\"body\":{\"id\":276,\"nodeType\":\"Block\",\"src\":\"2250:67:1\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":271,\"name\":\"AllowedAddressesToSendFunds\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":78,\"src\":\"2268:27:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_Senders_$72_storage_$\",\"typeString\":\"mapping(address => struct SimpleWallet.Senders storage ref)\"}},\"id\":273,\"indexExpression\":{\"argumentTypes\":null,\"id\":272,\"name\":\"_adr\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":266,\"src\":\"2296:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"2268:33:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_Senders_$72_storage\",\"typeString\":\"struct SimpleWallet.Senders storage ref\"}},\"id\":274,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"allowed\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":65,\"src\":\"2268:41:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"functionReturnParameters\":270,\"id\":275,\"nodeType\":\"Return\",\"src\":\"2261:48:1\"}]},\"documentation\":null,\"id\":277,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"CheckIfAllowed\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":267,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":266,\"name\":\"_adr\",\"nodeType\":\"VariableDeclaration\",\"scope\":277,\"src\":\"2211:12:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":265,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2211:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"2210:14:1\"},\"returnParameters\":{\"id\":270,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":269,\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":277,\"src\":\"2245:4:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":268,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2245:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"2244:6:1\"},\"scope\":288,\"src\":\"2187:130:1\",\"stateMutability\":\"view\",\"superFunction\":null,\"visibility\":\"public\"},{\"body\":{\"id\":286,\"nodeType\":\"Block\",\"src\":\"2367:38:1\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"id\":283,\"name\":\"owner\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":74,\"src\":\"2391:5:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}],\"id\":282,\"name\":\"selfdestruct\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":311,\"src\":\"2378:12:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_selfdestruct_nonpayable$_t_address_payable_$returns$__$\",\"typeString\":\"function (address payable)\"}},\"id\":284,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"2378:19:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":285,\"nodeType\":\"ExpressionStatement\",\"src\":\"2378:19:1\"}]},\"documentation\":null,\"id\":287,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"arguments\":null,\"id\":280,\"modifierName\":{\"argumentTypes\":null,\"id\":279,\"name\":\"onlyOwner\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":120,\"src\":\"2358:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"2358:9:1\"}],\"name\":\"killWallet\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":278,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"2348:2:1\"},\"returnParameters\":{\"id\":281,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"2367:0:1\"},\"scope\":288,\"src\":\"2329:76:1\",\"stateMutability\":\"nonpayable\",\"superFunction\":null,\"visibility\":\"public\"}],\"scope\":289,\"src\":\"27:2387:1\"}],\"src\":\"0:2414:1\"},\"legacyAST\":{\"absolutePath\":\"/C/angbox_/contracts/SimpleWallet.sol\",\"exportedSymbols\":{\"SimpleWallet\":[288]},\"id\":289,\"nodeType\":\"SourceUnit\",\"nodes\":[{\"id\":58,\"literals\":[\"solidity\",\"^\",\"0.5\",\".0\"],\"nodeType\":\"PragmaDirective\",\"src\":\"0:23:1\"},{\"baseContracts\":[],\"contractDependencies\":[],\"contractKind\":\"contract\",\"documentation\":null,\"fullyImplemented\":true,\"id\":288,\"linearizedBaseContracts\":[288],\"name\":\"SimpleWallet\",\"nodeType\":\"ContractDefinition\",\"nodes\":[{\"canonicalName\":\"SimpleWallet.withdrawalStruct\",\"id\":63,\"members\":[{\"constant\":false,\"id\":60,\"name\":\"to\",\"nodeType\":\"VariableDeclaration\",\"scope\":63,\"src\":\"95:10:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":59,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"95:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":62,\"name\":\"amount\",\"nodeType\":\"VariableDeclaration\",\"scope\":63,\"src\":\"116:11:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":61,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"116:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"}],\"name\":\"withdrawalStruct\",\"nodeType\":\"StructDefinition\",\"scope\":288,\"src\":\"61:74:1\",\"visibility\":\"public\"},{\"canonicalName\":\"SimpleWallet.Senders\",\"id\":72,\"members\":[{\"constant\":false,\"id\":65,\"name\":\"allowed\",\"nodeType\":\"VariableDeclaration\",\"scope\":72,\"src\":\"173:12:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":64,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"173:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":67,\"name\":\"withdrawals\",\"nodeType\":\"VariableDeclaration\",\"scope\":72,\"src\":\"197:16:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":66,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"197:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":71,\"name\":\"record\",\"nodeType\":\"VariableDeclaration\",\"scope\":72,\"src\":\"225:39:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_uint256_$_t_struct$_withdrawalStruct_$63_storage_$\",\"typeString\":\"mapping(uint256 => struct SimpleWallet.withdrawalStruct)\"},\"typeName\":{\"id\":70,\"keyType\":{\"id\":68,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"233:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Mapping\",\"src\":\"225:31:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_uint256_$_t_struct$_withdrawalStruct_$63_storage_$\",\"typeString\":\"mapping(uint256 => struct SimpleWallet.withdrawalStruct)\"},\"valueType\":{\"contractScope\":null,\"id\":69,\"name\":\"withdrawalStruct\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":63,\"src\":\"239:16:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_withdrawalStruct_$63_storage_ptr\",\"typeString\":\"struct SimpleWallet.withdrawalStruct\"}}},\"value\":null,\"visibility\":\"internal\"}],\"name\":\"Senders\",\"nodeType\":\"StructDefinition\",\"scope\":288,\"src\":\"147:125:1\",\"visibility\":\"public\"},{\"constant\":false,\"id\":74,\"name\":\"owner\",\"nodeType\":\"VariableDeclaration\",\"scope\":288,\"src\":\"284:21:1\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"},\"typeName\":{\"id\":73,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"284:15:1\",\"stateMutability\":\"payable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":78,\"name\":\"AllowedAddressesToSendFunds\",\"nodeType\":\"VariableDeclaration\",\"scope\":288,\"src\":\"312:60:1\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_Senders_$72_storage_$\",\"typeString\":\"mapping(address => struct SimpleWallet.Senders)\"},\"typeName\":{\"id\":77,\"keyType\":{\"id\":75,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"320:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"Mapping\",\"src\":\"312:25:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_Senders_$72_storage_$\",\"typeString\":\"mapping(address => struct SimpleWallet.Senders)\"},\"valueType\":{\"contractScope\":null,\"id\":76,\"name\":\"Senders\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":72,\"src\":\"329:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_Senders_$72_storage_ptr\",\"typeString\":\"struct SimpleWallet.Senders\"}}},\"value\":null,\"visibility\":\"public\"},{\"anonymous\":false,\"documentation\":null,\"id\":84,\"name\":\"Deposit\",\"nodeType\":\"EventDefinition\",\"parameters\":{\"id\":83,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":80,\"indexed\":false,\"name\":\"_sender\",\"nodeType\":\"VariableDeclaration\",\"scope\":84,\"src\":\"405:15:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":79,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"405:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":82,\"indexed\":false,\"name\":\"_amount\",\"nodeType\":\"VariableDeclaration\",\"scope\":84,\"src\":\"421:12:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":81,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"421:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"404:30:1\"},\"src\":\"391:44:1\"},{\"anonymous\":false,\"documentation\":null,\"id\":92,\"name\":\"Withdrawal\",\"nodeType\":\"EventDefinition\",\"parameters\":{\"id\":91,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":86,\"indexed\":false,\"name\":\"_sender\",\"nodeType\":\"VariableDeclaration\",\"scope\":92,\"src\":\"458:15:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":85,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"458:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":88,\"indexed\":false,\"name\":\"_amount\",\"nodeType\":\"VariableDeclaration\",\"scope\":92,\"src\":\"474:12:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":87,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"474:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":90,\"indexed\":false,\"name\":\"_beneficiary\",\"nodeType\":\"VariableDeclaration\",\"scope\":92,\"src\":\"488:20:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":89,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"488:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"457:52:1\"},\"src\":\"441:69:1\"},{\"body\":{\"id\":107,\"nodeType\":\"Block\",\"src\":\"548:107:1\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"id\":98,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"argumentTypes\":null,\"id\":95,\"name\":\"owner\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":74,\"src\":\"559:5:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":96,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":303,\"src\":\"567:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":97,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"567:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"src\":\"559:18:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"id\":99,\"nodeType\":\"ExpressionStatement\",\"src\":\"559:18:1\"},{\"expression\":{\"argumentTypes\":null,\"id\":105,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":100,\"name\":\"AllowedAddressesToSendFunds\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":78,\"src\":\"588:27:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_Senders_$72_storage_$\",\"typeString\":\"mapping(address => struct SimpleWallet.Senders storage ref)\"}},\"id\":102,\"indexExpression\":{\"argumentTypes\":null,\"id\":101,\"name\":\"owner\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":74,\"src\":\"616:5:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"588:34:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_Senders_$72_storage\",\"typeString\":\"struct SimpleWallet.Senders storage ref\"}},\"id\":103,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"allowed\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":65,\"src\":\"588:42:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"argumentTypes\":null,\"hexValue\":\"74727565\",\"id\":104,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"bool\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"633:4:1\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"value\":\"true\"},\"src\":\"588:49:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"id\":106,\"nodeType\":\"ExpressionStatement\",\"src\":\"588:49:1\"}]},\"documentation\":null,\"id\":108,\"implemented\":true,\"kind\":\"constructor\",\"modifiers\":[],\"name\":\"\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":93,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"539:2:1\"},\"returnParameters\":{\"id\":94,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"548:0:1\"},\"scope\":288,\"src\":\"528:127:1\",\"stateMutability\":\"nonpayable\",\"superFunction\":null,\"visibility\":\"public\"},{\"body\":{\"id\":119,\"nodeType\":\"Block\",\"src\":\"687:81:1\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"commonType\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"},\"id\":114,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":111,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":303,\"src\":\"707:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":112,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"707:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"==\",\"rightExpression\":{\"argumentTypes\":null,\"id\":113,\"name\":\"owner\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":74,\"src\":\"719:5:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"src\":\"707:17:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},{\"argumentTypes\":null,\"hexValue\":\"596f7520617265206e6f7420616c6c6f77656421\",\"id\":115,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"string\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"725:22:1\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_stringliteral_f9f18e7152ecb482b05bc745430c2e40c72dfba99431368b9d2fc7e8b7ebead8\",\"typeString\":\"literal_string \\\"You are not allowed!\\\"\"},\"value\":\"You are not allowed!\"}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},{\"typeIdentifier\":\"t_stringliteral_f9f18e7152ecb482b05bc745430c2e40c72dfba99431368b9d2fc7e8b7ebead8\",\"typeString\":\"literal_string \\\"You are not allowed!\\\"\"}],\"id\":110,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[306,307],\"referencedDeclaration\":307,\"src\":\"699:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$\",\"typeString\":\"function (bool,string memory) pure\"}},\"id\":116,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"699:49:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":117,\"nodeType\":\"ExpressionStatement\",\"src\":\"699:49:1\"},{\"id\":118,\"nodeType\":\"PlaceholderStatement\",\"src\":\"759:1:1\"}]},\"documentation\":null,\"id\":120,\"name\":\"onlyOwner\",\"nodeType\":\"ModifierDefinition\",\"parameters\":{\"id\":109,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"685:2:1\"},\"src\":\"667:101:1\",\"visibility\":\"internal\"},{\"body\":{\"id\":138,\"nodeType\":\"Block\",\"src\":\"832:206:1\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":125,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":303,\"src\":\"950:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":126,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"950:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}],\"id\":124,\"name\":\"CheckIfAllowed\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":277,\"src\":\"935:14:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_internal_view$_t_address_$returns$_t_bool_$\",\"typeString\":\"function (address) view returns (bool)\"}},\"id\":127,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"935:26:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},{\"argumentTypes\":null,\"hexValue\":\"596f7520617265206e6f7420616c6c6f77656421\",\"id\":128,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"string\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"962:22:1\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_stringliteral_f9f18e7152ecb482b05bc745430c2e40c72dfba99431368b9d2fc7e8b7ebead8\",\"typeString\":\"literal_string \\\"You are not allowed!\\\"\"},\"value\":\"You are not allowed!\"}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},{\"typeIdentifier\":\"t_stringliteral_f9f18e7152ecb482b05bc745430c2e40c72dfba99431368b9d2fc7e8b7ebead8\",\"typeString\":\"literal_string \\\"You are not allowed!\\\"\"}],\"id\":123,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[306,307],\"referencedDeclaration\":307,\"src\":\"927:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$\",\"typeString\":\"function (bool,string memory) pure\"}},\"id\":129,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"927:58:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":130,\"nodeType\":\"ExpressionStatement\",\"src\":\"927:58:1\"},{\"eventCall\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":132,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":303,\"src\":\"1009:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":133,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"1009:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":134,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":303,\"src\":\"1020:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":135,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"value\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"1020:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"},{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}],\"id\":131,\"name\":\"Deposit\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":84,\"src\":\"1001:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$\",\"typeString\":\"function (address,uint256)\"}},\"id\":136,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"1001:29:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":137,\"nodeType\":\"EmitStatement\",\"src\":\"996:34:1\"}]},\"documentation\":null,\"id\":139,\"implemented\":true,\"kind\":\"fallback\",\"modifiers\":[],\"name\":\"\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":121,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"812:2:1\"},\"returnParameters\":{\"id\":122,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"832:0:1\"},\"scope\":288,\"src\":\"804:234:1\",\"stateMutability\":\"payable\",\"superFunction\":null,\"visibility\":\"external\"},{\"body\":{\"id\":205,\"nodeType\":\"Block\",\"src\":\"1139:529:1\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":147,\"name\":\"AllowedAddressesToSendFunds\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":78,\"src\":\"1158:27:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_Senders_$72_storage_$\",\"typeString\":\"mapping(address => struct SimpleWallet.Senders storage ref)\"}},\"id\":150,\"indexExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":148,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":303,\"src\":\"1186:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":149,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"1186:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"1158:39:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_Senders_$72_storage\",\"typeString\":\"struct SimpleWallet.Senders storage ref\"}},\"id\":151,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"allowed\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":65,\"src\":\"1158:47:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},{\"argumentTypes\":null,\"hexValue\":\"596f7520617265206e6f7420616c6c6f77656421\",\"id\":152,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"string\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"1206:22:1\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_stringliteral_f9f18e7152ecb482b05bc745430c2e40c72dfba99431368b9d2fc7e8b7ebead8\",\"typeString\":\"literal_string \\\"You are not allowed!\\\"\"},\"value\":\"You are not allowed!\"}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},{\"typeIdentifier\":\"t_stringliteral_f9f18e7152ecb482b05bc745430c2e40c72dfba99431368b9d2fc7e8b7ebead8\",\"typeString\":\"literal_string \\\"You are not allowed!\\\"\"}],\"id\":146,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[306,307],\"referencedDeclaration\":307,\"src\":\"1150:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$\",\"typeString\":\"function (bool,string memory) pure\"}},\"id\":153,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"1150:79:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":154,\"nodeType\":\"ExpressionStatement\",\"src\":\"1150:79:1\"},{\"expression\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"id\":158,\"name\":\"money\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":141,\"src\":\"1258:5:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}],\"expression\":{\"argumentTypes\":null,\"id\":155,\"name\":\"receiver\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":143,\"src\":\"1240:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"id\":157,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"transfer\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"1240:17:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_transfer_nonpayable$_t_uint256_$returns$__$\",\"typeString\":\"function (uint256)\"}},\"id\":159,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"1240:24:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":160,\"nodeType\":\"ExpressionStatement\",\"src\":\"1240:24:1\"},{\"eventCall\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":162,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":303,\"src\":\"1291:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":163,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"1291:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},{\"argumentTypes\":null,\"id\":164,\"name\":\"money\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":141,\"src\":\"1302:5:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},{\"argumentTypes\":null,\"id\":165,\"name\":\"receiver\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":143,\"src\":\"1308:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"},{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}],\"id\":161,\"name\":\"Withdrawal\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":92,\"src\":\"1280:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_event_nonpayable$_t_address_$_t_uint256_$_t_address_$returns$__$\",\"typeString\":\"function (address,uint256,address)\"}},\"id\":166,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"1280:37:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":167,\"nodeType\":\"EmitStatement\",\"src\":\"1275:42:1\"},{\"expression\":{\"argumentTypes\":null,\"id\":173,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"UnaryOperation\",\"operator\":\"++\",\"prefix\":false,\"src\":\"1328:53:1\",\"subExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":168,\"name\":\"AllowedAddressesToSendFunds\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":78,\"src\":\"1328:27:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_Senders_$72_storage_$\",\"typeString\":\"mapping(address => struct SimpleWallet.Senders storage ref)\"}},\"id\":171,\"indexExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":169,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":303,\"src\":\"1356:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":170,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"1356:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"1328:39:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_Senders_$72_storage\",\"typeString\":\"struct SimpleWallet.Senders storage ref\"}},\"id\":172,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"withdrawals\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":67,\"src\":\"1328:51:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":174,\"nodeType\":\"ExpressionStatement\",\"src\":\"1328:53:1\"},{\"expression\":{\"argumentTypes\":null,\"id\":188,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":175,\"name\":\"AllowedAddressesToSendFunds\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":78,\"src\":\"1392:27:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_Senders_$72_storage_$\",\"typeString\":\"mapping(address => struct SimpleWallet.Senders storage ref)\"}},\"id\":178,\"indexExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":176,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":303,\"src\":\"1420:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":177,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"1420:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"1392:39:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_Senders_$72_storage\",\"typeString\":\"struct SimpleWallet.Senders storage ref\"}},\"id\":179,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"record\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":71,\"src\":\"1392:46:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_uint256_$_t_struct$_withdrawalStruct_$63_storage_$\",\"typeString\":\"mapping(uint256 => struct SimpleWallet.withdrawalStruct storage ref)\"}},\"id\":185,\"indexExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":180,\"name\":\"AllowedAddressesToSendFunds\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":78,\"src\":\"1439:27:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_Senders_$72_storage_$\",\"typeString\":\"mapping(address => struct SimpleWallet.Senders storage ref)\"}},\"id\":183,\"indexExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":181,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":303,\"src\":\"1467:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":182,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"1467:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"1439:39:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_Senders_$72_storage\",\"typeString\":\"struct SimpleWallet.Senders storage ref\"}},\"id\":184,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"withdrawals\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":67,\"src\":\"1439:51:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"1392:99:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_withdrawalStruct_$63_storage\",\"typeString\":\"struct SimpleWallet.withdrawalStruct storage ref\"}},\"id\":186,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"to\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":60,\"src\":\"1392:102:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"argumentTypes\":null,\"id\":187,\"name\":\"receiver\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":143,\"src\":\"1497:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"src\":\"1392:113:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":189,\"nodeType\":\"ExpressionStatement\",\"src\":\"1392:113:1\"},{\"expression\":{\"argumentTypes\":null,\"id\":203,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":190,\"name\":\"AllowedAddressesToSendFunds\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":78,\"src\":\"1516:27:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_Senders_$72_storage_$\",\"typeString\":\"mapping(address => struct SimpleWallet.Senders storage ref)\"}},\"id\":193,\"indexExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":191,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":303,\"src\":\"1544:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":192,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"1544:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"1516:39:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_Senders_$72_storage\",\"typeString\":\"struct SimpleWallet.Senders storage ref\"}},\"id\":194,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"record\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":71,\"src\":\"1516:46:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_uint256_$_t_struct$_withdrawalStruct_$63_storage_$\",\"typeString\":\"mapping(uint256 => struct SimpleWallet.withdrawalStruct storage ref)\"}},\"id\":200,\"indexExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":195,\"name\":\"AllowedAddressesToSendFunds\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":78,\"src\":\"1563:27:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_Senders_$72_storage_$\",\"typeString\":\"mapping(address => struct SimpleWallet.Senders storage ref)\"}},\"id\":198,\"indexExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":196,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":303,\"src\":\"1591:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":197,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"1591:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"1563:39:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_Senders_$72_storage\",\"typeString\":\"struct SimpleWallet.Senders storage ref\"}},\"id\":199,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"withdrawals\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":67,\"src\":\"1563:51:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"1516:99:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_withdrawalStruct_$63_storage\",\"typeString\":\"struct SimpleWallet.withdrawalStruct storage ref\"}},\"id\":201,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"amount\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":62,\"src\":\"1516:106:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"argumentTypes\":null,\"id\":202,\"name\":\"money\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":141,\"src\":\"1625:5:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"1516:114:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":204,\"nodeType\":\"ExpressionStatement\",\"src\":\"1516:114:1\"}]},\"documentation\":null,\"id\":206,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"sendFunds\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":144,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":141,\"name\":\"money\",\"nodeType\":\"VariableDeclaration\",\"scope\":206,\"src\":\"1094:10:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":140,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1094:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":143,\"name\":\"receiver\",\"nodeType\":\"VariableDeclaration\",\"scope\":206,\"src\":\"1106:24:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"},\"typeName\":{\"id\":142,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1106:15:1\",\"stateMutability\":\"payable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"1093:38:1\"},\"returnParameters\":{\"id\":145,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"1139:0:1\"},\"scope\":288,\"src\":\"1075:593:1\",\"stateMutability\":\"nonpayable\",\"superFunction\":null,\"visibility\":\"public\"},{\"body\":{\"id\":233,\"nodeType\":\"Block\",\"src\":\"1763:134:1\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"components\":[{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":217,\"name\":\"AllowedAddressesToSendFunds\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":78,\"src\":\"1781:27:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_Senders_$72_storage_$\",\"typeString\":\"mapping(address => struct SimpleWallet.Senders storage ref)\"}},\"id\":219,\"indexExpression\":{\"argumentTypes\":null,\"id\":218,\"name\":\"_adr\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":208,\"src\":\"1809:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"1781:33:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_Senders_$72_storage\",\"typeString\":\"struct SimpleWallet.Senders storage ref\"}},\"id\":220,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"record\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":71,\"src\":\"1781:40:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_uint256_$_t_struct$_withdrawalStruct_$63_storage_$\",\"typeString\":\"mapping(uint256 => struct SimpleWallet.withdrawalStruct storage ref)\"}},\"id\":222,\"indexExpression\":{\"argumentTypes\":null,\"id\":221,\"name\":\"_index\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":210,\"src\":\"1822:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"1781:48:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_withdrawalStruct_$63_storage\",\"typeString\":\"struct SimpleWallet.withdrawalStruct storage ref\"}},\"id\":223,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"to\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":60,\"src\":\"1781:51:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":224,\"name\":\"AllowedAddressesToSendFunds\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":78,\"src\":\"1833:27:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_Senders_$72_storage_$\",\"typeString\":\"mapping(address => struct SimpleWallet.Senders storage ref)\"}},\"id\":226,\"indexExpression\":{\"argumentTypes\":null,\"id\":225,\"name\":\"_adr\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":208,\"src\":\"1861:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"1833:33:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_Senders_$72_storage\",\"typeString\":\"struct SimpleWallet.Senders storage ref\"}},\"id\":227,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"record\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":71,\"src\":\"1833:40:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_uint256_$_t_struct$_withdrawalStruct_$63_storage_$\",\"typeString\":\"mapping(uint256 => struct SimpleWallet.withdrawalStruct storage ref)\"}},\"id\":229,\"indexExpression\":{\"argumentTypes\":null,\"id\":228,\"name\":\"_index\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":210,\"src\":\"1874:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"1833:48:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_withdrawalStruct_$63_storage\",\"typeString\":\"struct SimpleWallet.withdrawalStruct storage ref\"}},\"id\":230,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"amount\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":62,\"src\":\"1833:55:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}}],\"id\":231,\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"TupleExpression\",\"src\":\"1780:109:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$_t_address_$_t_uint256_$\",\"typeString\":\"tuple(address,uint256)\"}},\"functionReturnParameters\":216,\"id\":232,\"nodeType\":\"Return\",\"src\":\"1774:115:1\"}]},\"documentation\":null,\"id\":234,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"getWithdrawal\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":211,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":208,\"name\":\"_adr\",\"nodeType\":\"VariableDeclaration\",\"scope\":234,\"src\":\"1704:12:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":207,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1704:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":210,\"name\":\"_index\",\"nodeType\":\"VariableDeclaration\",\"scope\":234,\"src\":\"1717:11:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":209,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1717:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"1703:26:1\"},\"returnParameters\":{\"id\":216,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":213,\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":234,\"src\":\"1750:7:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":212,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1750:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":215,\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":234,\"src\":\"1758:4:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":214,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1758:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"1749:14:1\"},\"scope\":288,\"src\":\"1681:216:1\",\"stateMutability\":\"view\",\"superFunction\":null,\"visibility\":\"public\"},{\"body\":{\"id\":248,\"nodeType\":\"Block\",\"src\":\"1972:67:1\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"id\":246,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":241,\"name\":\"AllowedAddressesToSendFunds\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":78,\"src\":\"1983:27:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_Senders_$72_storage_$\",\"typeString\":\"mapping(address => struct SimpleWallet.Senders storage ref)\"}},\"id\":243,\"indexExpression\":{\"argumentTypes\":null,\"id\":242,\"name\":\"_adr\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":236,\"src\":\"2011:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"1983:33:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_Senders_$72_storage\",\"typeString\":\"struct SimpleWallet.Senders storage ref\"}},\"id\":244,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"allowed\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":65,\"src\":\"1983:41:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"argumentTypes\":null,\"hexValue\":\"74727565\",\"id\":245,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"bool\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"2027:4:1\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"value\":\"true\"},\"src\":\"1983:48:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"id\":247,\"nodeType\":\"ExpressionStatement\",\"src\":\"1983:48:1\"}]},\"documentation\":null,\"id\":249,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"arguments\":null,\"id\":239,\"modifierName\":{\"argumentTypes\":null,\"id\":238,\"name\":\"onlyOwner\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":120,\"src\":\"1963:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"1963:9:1\"}],\"name\":\"AllowAddressToSendFunds\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":237,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":236,\"name\":\"_adr\",\"nodeType\":\"VariableDeclaration\",\"scope\":249,\"src\":\"1942:12:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":235,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1942:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"1941:14:1\"},\"returnParameters\":{\"id\":240,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"1972:0:1\"},\"scope\":288,\"src\":\"1909:130:1\",\"stateMutability\":\"nonpayable\",\"superFunction\":null,\"visibility\":\"public\"},{\"body\":{\"id\":263,\"nodeType\":\"Block\",\"src\":\"2111:68:1\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"id\":261,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":256,\"name\":\"AllowedAddressesToSendFunds\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":78,\"src\":\"2122:27:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_Senders_$72_storage_$\",\"typeString\":\"mapping(address => struct SimpleWallet.Senders storage ref)\"}},\"id\":258,\"indexExpression\":{\"argumentTypes\":null,\"id\":257,\"name\":\"_adr\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":251,\"src\":\"2150:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"2122:33:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_Senders_$72_storage\",\"typeString\":\"struct SimpleWallet.Senders storage ref\"}},\"id\":259,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"allowed\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":65,\"src\":\"2122:41:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"argumentTypes\":null,\"hexValue\":\"66616c7365\",\"id\":260,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"bool\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"2166:5:1\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"value\":\"false\"},\"src\":\"2122:49:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"id\":262,\"nodeType\":\"ExpressionStatement\",\"src\":\"2122:49:1\"}]},\"documentation\":null,\"id\":264,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"arguments\":null,\"id\":254,\"modifierName\":{\"argumentTypes\":null,\"id\":253,\"name\":\"onlyOwner\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":120,\"src\":\"2102:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"2102:9:1\"}],\"name\":\"DisallowAddressToSendFunds\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":252,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":251,\"name\":\"_adr\",\"nodeType\":\"VariableDeclaration\",\"scope\":264,\"src\":\"2081:12:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":250,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2081:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"2080:14:1\"},\"returnParameters\":{\"id\":255,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"2111:0:1\"},\"scope\":288,\"src\":\"2045:134:1\",\"stateMutability\":\"nonpayable\",\"superFunction\":null,\"visibility\":\"public\"},{\"body\":{\"id\":276,\"nodeType\":\"Block\",\"src\":\"2250:67:1\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":271,\"name\":\"AllowedAddressesToSendFunds\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":78,\"src\":\"2268:27:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_Senders_$72_storage_$\",\"typeString\":\"mapping(address => struct SimpleWallet.Senders storage ref)\"}},\"id\":273,\"indexExpression\":{\"argumentTypes\":null,\"id\":272,\"name\":\"_adr\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":266,\"src\":\"2296:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"2268:33:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_Senders_$72_storage\",\"typeString\":\"struct SimpleWallet.Senders storage ref\"}},\"id\":274,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"allowed\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":65,\"src\":\"2268:41:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"functionReturnParameters\":270,\"id\":275,\"nodeType\":\"Return\",\"src\":\"2261:48:1\"}]},\"documentation\":null,\"id\":277,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"CheckIfAllowed\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":267,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":266,\"name\":\"_adr\",\"nodeType\":\"VariableDeclaration\",\"scope\":277,\"src\":\"2211:12:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":265,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2211:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"2210:14:1\"},\"returnParameters\":{\"id\":270,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":269,\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":277,\"src\":\"2245:4:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":268,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2245:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"2244:6:1\"},\"scope\":288,\"src\":\"2187:130:1\",\"stateMutability\":\"view\",\"superFunction\":null,\"visibility\":\"public\"},{\"body\":{\"id\":286,\"nodeType\":\"Block\",\"src\":\"2367:38:1\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"id\":283,\"name\":\"owner\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":74,\"src\":\"2391:5:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}],\"id\":282,\"name\":\"selfdestruct\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":311,\"src\":\"2378:12:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_selfdestruct_nonpayable$_t_address_payable_$returns$__$\",\"typeString\":\"function (address payable)\"}},\"id\":284,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"2378:19:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":285,\"nodeType\":\"ExpressionStatement\",\"src\":\"2378:19:1\"}]},\"documentation\":null,\"id\":287,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"arguments\":null,\"id\":280,\"modifierName\":{\"argumentTypes\":null,\"id\":279,\"name\":\"onlyOwner\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":120,\"src\":\"2358:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"2358:9:1\"}],\"name\":\"killWallet\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":278,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"2348:2:1\"},\"returnParameters\":{\"id\":281,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"2367:0:1\"},\"scope\":288,\"src\":\"2329:76:1\",\"stateMutability\":\"nonpayable\",\"superFunction\":null,\"visibility\":\"public\"}],\"scope\":289,\"src\":\"27:2387:1\"}],\"src\":\"0:2414:1\"},\"compiler\":{\"name\":\"solc\",\"version\":\"0.5.12+commit.7709ece9.Emscripten.clang\"},\"networks\":{\"3\":{\"events\":{\"0xe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_sender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"Deposit\",\"type\":\"event\",\"signature\":\"0xe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c\"},\"0x001a143d5b175701cb3246058ffac3d63945192075a926ff73a19930f09d587a\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_sender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_beneficiary\",\"type\":\"address\"}],\"name\":\"Withdrawal\",\"type\":\"event\",\"signature\":\"0x001a143d5b175701cb3246058ffac3d63945192075a926ff73a19930f09d587a\"}},\"links\":{},\"address\":\"0x1cf5679f73c410715daDA895176121500f3D87a4\",\"transactionHash\":\"0x1551aea96b6e0d52520757decdec27f1622052c4a3f1b2d537229f2e50e5ba1f\"},\"1576835473846\":{\"events\":{\"0xe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_sender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"Deposit\",\"type\":\"event\",\"signature\":\"0xe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c\"},\"0x001a143d5b175701cb3246058ffac3d63945192075a926ff73a19930f09d587a\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_sender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_beneficiary\",\"type\":\"address\"}],\"name\":\"Withdrawal\",\"type\":\"event\",\"signature\":\"0x001a143d5b175701cb3246058ffac3d63945192075a926ff73a19930f09d587a\"}},\"links\":{},\"address\":\"0x6C202f69c7064aF9c6A23F518536b4eb49d12985\",\"transactionHash\":\"0x3df5404b19a924da7e06397abc1a51fbb66ba1ee85a3e751088ccf0e6b6b32f8\"},\"1576848988928\":{\"events\":{\"0xe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_sender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"Deposit\",\"type\":\"event\",\"signature\":\"0xe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c\"},\"0x001a143d5b175701cb3246058ffac3d63945192075a926ff73a19930f09d587a\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_sender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_beneficiary\",\"type\":\"address\"}],\"name\":\"Withdrawal\",\"type\":\"event\",\"signature\":\"0x001a143d5b175701cb3246058ffac3d63945192075a926ff73a19930f09d587a\"}},\"links\":{},\"address\":\"0x2D7DE3d5A05837dc2870b39Fd4CC6E6ad9be9056\",\"transactionHash\":\"0xdf01b772e76ee52951f106d93b880700e4045e66ce82752bf7195be3a3d357e6\"},\"1576849384899\":{\"events\":{\"0xe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_sender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"Deposit\",\"type\":\"event\",\"signature\":\"0xe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c\"},\"0x001a143d5b175701cb3246058ffac3d63945192075a926ff73a19930f09d587a\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_sender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_beneficiary\",\"type\":\"address\"}],\"name\":\"Withdrawal\",\"type\":\"event\",\"signature\":\"0x001a143d5b175701cb3246058ffac3d63945192075a926ff73a19930f09d587a\"}},\"links\":{},\"address\":\"0xD74553ef39654572AC6A5BCa0833a4BE557c400a\",\"transactionHash\":\"0xe810015bbf5bb21f2b0128b1e4e8c9d9ca578432e66ff68278740c37b24a35a5\"},\"1577027593117\":{\"events\":{\"0xe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_sender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"Deposit\",\"type\":\"event\",\"signature\":\"0xe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c\"},\"0x001a143d5b175701cb3246058ffac3d63945192075a926ff73a19930f09d587a\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_sender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_beneficiary\",\"type\":\"address\"}],\"name\":\"Withdrawal\",\"type\":\"event\",\"signature\":\"0x001a143d5b175701cb3246058ffac3d63945192075a926ff73a19930f09d587a\"}},\"links\":{},\"address\":\"0x1e28592Ae91429899544F577346ee3E504158a0c\",\"transactionHash\":\"0x6e45a425b751bb9da736b0ff5be3b13972af9eae6fd1c2895f2fb2f4832f5802\"}},\"schemaVersion\":\"3.0.20\",\"updatedAt\":\"2020-01-03T16:57:26.020Z\",\"networkType\":\"ethereum\",\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}}");
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar color=\"primary\">Simple Shared Wallet</mat-toolbar>\n<app-meta-sender></app-meta-sender>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/simple/simple-wallet/simple-wallet.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/simple/simple-wallet/simple-wallet.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSimpleSimpleWalletSimpleWalletComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card>\n  <mat-card-title>Balance of the Wallet</mat-card-title>\n  <mat-card-content>\n    {{model.balance}} Ether\n  </mat-card-content>\n  <mat-card-content>\n    This account is {{model.accountAllowed}} allowed to Deposit and Withdraw Ether!\n  </mat-card-content>\n</mat-card>\n\n<mat-card>\n    <mat-card-title>Fill up the Wallet</mat-card-title>\n  <mat-card-content>\n    <mat-form-field id=\"address-selector\" class=\"address-field\">\n      <mat-select name=\"account\" (selectionChange)=\"refreshBalance()\" [(value)]=\"model.account\" placeholder=\"Address\">\n        <mat-option *ngFor=\"let account of accounts\" [value]=\"account\">{{account}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <mat-form-field>\n        <input type=\"text\" matInput id=\"amount\" placeholder=\"Amount in Ether\" (change)=\"setDepositAmount($event)\">\n    </mat-form-field>\n    <button mat-button id=\"send\" (click)=\"DepositEther()\">Deposit Ether</button>\n  </mat-card-content>\n</mat-card>\n\n<mat-card>\n    <mat-card-title>Add Address to Address-Whitelist</mat-card-title>\n  <mat-card-content>\n    <mat-form-field id=\"address-selector\" class=\"address-field\">\n        <input type=\"text\" matInput id=\"receiver\" placeholder=\"Allow this Address\" (change)=\"setWhitelistAddress($event)\">\n    </mat-form-field>\n    <button mat-button id=\"send\" (click)=\"addAllowedAddress()\">Allow Address to Deposit and Withdraw Ether</button>\n  </mat-card-content>\n</mat-card>\n\n<mat-card>\n    <mat-card-title>Add Address to Address-Blacklist</mat-card-title>\n  <mat-card-content>\n    <mat-form-field id=\"address-selector\" class=\"address-field\">\n        <input type=\"text\" matInput id=\"receiver\" placeholder=\"Disallow this Address\" (change)=\"setBlacklistAddress($event)\">\n    </mat-form-field>\n    <button mat-button id=\"send\" (click)=\"removeAllowedAddress()\">Disallow Address to Deposit and Withdraw Ether</button>\n  </mat-card-content>\n</mat-card>\n\n<mat-card>\n<mat-card-title>Send Ether from Wallet to Address</mat-card-title>\n<mat-card-content>\n<mat-form-field id=\"address-selector\" class=\"address-field\">\n  <input type=\"text\" matInput id=\"sendToAddress\" placeholder=\"Send Ether to this address\" (change)=\"setSendToAddress($event)\">\n</mat-form-field>\n<mat-form-field id=\"amount-setter\">\n  <input type=\"text\" matInput id=\"SendThisAmount\" placeholder=\"Send This Amount of Ether\" (change)=\"setSendAmount($event)\">\n</mat-form-field>\n<button mat-button id=\"send\" (click)=\"sendFromWallet()\">Send This Amount of Ether to the Address</button>\n</mat-card-content>\n</mat-card>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }
    /***/

  },

  /***/
  "./node_modules/web3-eth-accounts/src sync recursive":
  /*!*************************************************!*\
    !*** ./node_modules/web3-eth-accounts/src sync ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesWeb3EthAccountsSrcSyncRecursive(module, exports) {
    function webpackEmptyContext(req) {
      var e = new Error("Cannot find module '" + req + "'");
      e.code = 'MODULE_NOT_FOUND';
      throw e;
    }

    webpackEmptyContext.keys = function () {
      return [];
    };

    webpackEmptyContext.resolve = webpackEmptyContext;
    module.exports = webpackEmptyContext;
    webpackEmptyContext.id = "./node_modules/web3-eth-accounts/src sync recursive";
    /***/
  },

  /***/
  "./node_modules/webpack/buildin/global.js":
  /*!***********************************!*\
    !*** (webpack)/buildin/global.js ***!
    \***********************************/

  /*! no static exports found */

  /***/
  function node_modulesWebpackBuildinGlobalJs(module, exports) {
    var g; // This works in non-strict mode

    g = function () {
      return this;
    }();

    try {
      // This works if eval is allowed (see CSP)
      g = g || new Function("return this")();
    } catch (e) {
      // This works if the window reference is available
      if (typeof window === "object") g = window;
    } // g can still be undefined, but nothing to do about it...
    // We return undefined, instead of nothing here, so it's
    // easier to handle this case. if(!global) { ...}


    module.exports = g;
    /***/
  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'app works!';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _simple_simplewallet_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./simple/simplewallet.module */
    "./src/app/simple/simplewallet.module.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
      imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _simple_simplewallet_module__WEBPACK_IMPORTED_MODULE_6__["SimpleModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/simple/simple-wallet/simple-wallet.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/simple/simple-wallet/simple-wallet.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSimpleSimpleWalletSimpleWalletComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".address-field {\n  width: 400px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2ltcGxlL3NpbXBsZS13YWxsZXQvc2ltcGxlLXdhbGxldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvc2ltcGxlL3NpbXBsZS13YWxsZXQvc2ltcGxlLXdhbGxldC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZHJlc3MtZmllbGQge1xuICB3aWR0aDogNDAwcHg7XG59XG5cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/simple/simple-wallet/simple-wallet.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/simple/simple-wallet/simple-wallet.component.ts ***!
    \*****************************************************************/

  /*! exports provided: SimpleWalletComponent */

  /***/
  function srcAppSimpleSimpleWalletSimpleWalletComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SimpleWalletComponent", function () {
      return SimpleWalletComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _util_web3_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../util/web3.service */
    "./src/app/util/web3.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");

    var simplewallet_artifacts = __webpack_require__(
    /*! ../../../../build/contracts/SimpleWallet.json */
    "./build/contracts/SimpleWallet.json");

    var SimpleWalletComponent =
    /*#__PURE__*/
    function () {
      function SimpleWalletComponent(web3Service, matSnackBar) {
        _classCallCheck(this, SimpleWalletComponent);

        this.web3Service = web3Service;
        this.matSnackBar = matSnackBar;
        this.model = {
          account: '',
          DepositAmount: 0,
          balance: 0,
          whitelistAddress: '',
          blacklistAddress: '',
          receiverAddress: '',
          accountAllowed: 'not',
          sendAmount: 0
        };
        this.status = '';
        console.log('Constructor: ' + web3Service);
      }

      _createClass(SimpleWalletComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          console.log('OnInit: ' + this.web3Service);
          console.log(this);
          this.watchAccount();
          this.web3Service.artifactsToContract(simplewallet_artifacts).then(function (SimplewalletAbstraction) {
            _this.SimpleWallet = SimplewalletAbstraction;

            _this.SimpleWallet.deployed().then(function (deployed) {
              console.log(deployed);
              deployed.Deposit({}, function (err, ev) {
                console.log('Deposit event came in, refreshing balance');

                _this.refreshBalance();
              });
              deployed.Withdrawl({}, function (err, ev) {
                console.log('Withdrawl event came in, refreshing balance');

                _this.refreshBalance();
              });
            });
          });
        }
      }, {
        key: "watchAccount",
        value: function watchAccount() {
          var _this2 = this;

          this.web3Service.accountsObservable.subscribe(function (accounts) {
            _this2.accounts = accounts;
            _this2.model.account = accounts[0];

            _this2.refreshBalance();

            _this2.SimpleWallet.deployed().then(function (i) {
              return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0,
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee() {
                var isAllowed;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return i.CheckIfAllowed(this.model.account);

                      case 2:
                        isAllowed = _context.sent;

                        if (isAllowed) {
                          this.model.accountAllowed = '';
                        } else {
                          this.model.accountAllowed = 'not';
                        }

                      case 4:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            });
          });
        }
      }, {
        key: "setStatus",
        value: function setStatus(status) {
          this.matSnackBar.open(status, null, {
            duration: 3000
          });
        }
      }, {
        key: "addAllowedAddress",
        value: function addAllowedAddress() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var whitelistAddress, instance, transaction;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (this.SimpleWallet) {
                      _context2.next = 3;
                      break;
                    }

                    this.setStatus('SimpleWallet is not loaded, unable to send transaction');
                    return _context2.abrupt("return");

                  case 3:
                    whitelistAddress = this.model.whitelistAddress;
                    console.log('Whitelisting address:' + whitelistAddress);
                    this.setStatus('Initiating transaction... (please wait)');
                    _context2.prev = 6;
                    _context2.next = 9;
                    return this.SimpleWallet.deployed();

                  case 9:
                    instance = _context2.sent;
                    _context2.next = 12;
                    return instance.AllowAddressToSendFunds(whitelistAddress, {
                      from: this.model.account
                    });

                  case 12:
                    transaction = _context2.sent;

                    if (!transaction) {
                      this.setStatus('Transaction failed!');
                    } else {
                      this.setStatus('Transaction complete!');
                    }

                    _context2.next = 20;
                    break;

                  case 16:
                    _context2.prev = 16;
                    _context2.t0 = _context2["catch"](6);
                    console.log(_context2.t0);
                    this.setStatus('Error sending transaction; see log.');

                  case 20:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this, [[6, 16]]);
          }));
        }
      }, {
        key: "removeAllowedAddress",
        value: function removeAllowedAddress() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var blacklistAddress, instance, transaction;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (this.SimpleWallet) {
                      _context3.next = 3;
                      break;
                    }

                    this.setStatus('SimpleWallet is not loaded, unable to send transaction');
                    return _context3.abrupt("return");

                  case 3:
                    blacklistAddress = this.model.blacklistAddress;
                    console.log('Blacklisting address:' + blacklistAddress);
                    this.setStatus('Initiating transaction... (please wait)');
                    _context3.prev = 6;
                    _context3.next = 9;
                    return this.SimpleWallet.deployed();

                  case 9:
                    instance = _context3.sent;
                    _context3.next = 12;
                    return instance.DisallowAddressToSendFunds(blacklistAddress, {
                      from: this.model.account
                    });

                  case 12:
                    transaction = _context3.sent;

                    if (!transaction) {
                      this.setStatus('Transaction failed!');
                    } else {
                      this.setStatus('Transaction complete!');
                    }

                    _context3.next = 20;
                    break;

                  case 16:
                    _context3.prev = 16;
                    _context3.t0 = _context3["catch"](6);
                    console.log(_context3.t0);
                    this.setStatus('Error sending transaction; see log.');

                  case 20:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this, [[6, 16]]);
          }));
        }
      }, {
        key: "refreshBalance",
        value: function refreshBalance() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var deployedSimpleWallet, simpleWalletBalance;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    console.log('Refreshing balance');
                    _context4.prev = 1;
                    _context4.next = 4;
                    return this.SimpleWallet.deployed();

                  case 4:
                    deployedSimpleWallet = _context4.sent;
                    console.log(deployedSimpleWallet);
                    console.log('Account', this.model.account);
                    _context4.next = 9;
                    return this.web3Service.getWeb3().then(function (web3) {
                      return web3.eth.getBalance(deployedSimpleWallet.address);
                    });

                  case 9:
                    simpleWalletBalance = _context4.sent;
                    console.log('Found balance (Wei): ' + simpleWalletBalance);
                    this.model.balance = this.SimpleWallet.web3.utils.fromWei(simpleWalletBalance, "Ether");
                    _context4.next = 18;
                    break;

                  case 14:
                    _context4.prev = 14;
                    _context4.t0 = _context4["catch"](1);
                    console.log(_context4.t0);
                    this.setStatus('Error getting balance; see log.');

                  case 18:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this, [[1, 14]]);
          }));
        }
      }, {
        key: "setDepositAmount",
        value: function setDepositAmount(e) {
          this.model.DepositAmount = e.target.value;
        }
      }, {
        key: "setWhitelistAddress",
        value: function setWhitelistAddress(e) {
          this.model.whitelistAddress = e.target.value;
        }
      }, {
        key: "setBlacklistAddress",
        value: function setBlacklistAddress(e) {
          this.model.blacklistAddress = e.target.value;
        }
      }, {
        key: "setSendToAddress",
        value: function setSendToAddress(e) {
          this.model.receiverAddress = e.target.value;
        }
      }, {
        key: "setSendAmount",
        value: function setSendAmount(e) {
          this.model.sendAmount = e.target.value;
        }
      }, {
        key: "sendFromWallet",
        value: function sendFromWallet() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var amount, receiver, instance, web3, transaction;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    if (this.SimpleWallet) {
                      _context5.next = 3;
                      break;
                    }

                    this.setStatus('SimpleWallet is not loaded, unable to send transaction');
                    return _context5.abrupt("return");

                  case 3:
                    amount = this.model.sendAmount;
                    receiver = this.model.receiverAddress;
                    console.log('Sending Ether ' + amount + ' to ' + receiver);
                    this.setStatus('Initializing transaction.. (please wait)');
                    _context5.prev = 7;
                    _context5.next = 10;
                    return this.SimpleWallet.deployed();

                  case 10:
                    instance = _context5.sent;
                    _context5.next = 13;
                    return this.web3Service.getWeb3();

                  case 13:
                    web3 = _context5.sent;
                    console.log('That is in Wei : ' + web3.utils.toWei(amount, "ether") + ' Ether');
                    _context5.next = 17;
                    return instance.sendFunds(web3.utils.toWei(amount, "ether"), receiver, {
                      from: this.model.account
                    });

                  case 17:
                    transaction = _context5.sent;

                    if (!transaction) {
                      this.setStatus('Transaction failed!');
                    } else {
                      this.setStatus('Transaction complete!');
                    }

                    _context5.next = 25;
                    break;

                  case 21:
                    _context5.prev = 21;
                    _context5.t0 = _context5["catch"](7);
                    console.log(_context5.t0);
                    this.setStatus('Error sending transaction; see log.');

                  case 25:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this, [[7, 21]]);
          }));
        }
      }, {
        key: "DepositEther",
        value: function DepositEther() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var amount, sender, deployedSimpleWallet, transaction;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    if (this.SimpleWallet) {
                      _context6.next = 3;
                      break;
                    }

                    this.setStatus('SimpleWallet is not loaded, unable to send transaction');
                    return _context6.abrupt("return");

                  case 3:
                    amount = this.model.DepositAmount;
                    sender = this.model.account;
                    console.log('Sending Ether' + amount + ' from ' + sender);
                    this.setStatus('Initiating transaction... (please wait)');
                    _context6.prev = 7;
                    _context6.next = 10;
                    return this.SimpleWallet.deployed();

                  case 10:
                    deployedSimpleWallet = _context6.sent;
                    _context6.next = 13;
                    return deployedSimpleWallet.sendTransaction({
                      from: this.model.account,
                      value: this.SimpleWallet.web3.utils.toWei(amount, "Ether")
                    });

                  case 13:
                    transaction = _context6.sent;

                    if (!transaction) {
                      this.setStatus('Transaction failed!');
                    } else {
                      this.setStatus('Transaction complete!'); //this.model.balance=this.web3.eth.getBalance(this.SimpleWallet.address);
                    }

                    _context6.next = 21;
                    break;

                  case 17:
                    _context6.prev = 17;
                    _context6.t0 = _context6["catch"](7);
                    console.log(_context6.t0);
                    this.setStatus('Error sending coin; see log.');

                  case 21:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this, [[7, 17]]);
          }));
        }
      }]);

      return SimpleWalletComponent;
    }();

    SimpleWalletComponent.ctorParameters = function () {
      return [{
        type: _util_web3_service__WEBPACK_IMPORTED_MODULE_2__["Web3Service"]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
      }];
    };

    SimpleWalletComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-meta-sender',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./simple-wallet.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/simple/simple-wallet/simple-wallet.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./simple-wallet.component.css */
      "./src/app/simple/simple-wallet/simple-wallet.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_web3_service__WEBPACK_IMPORTED_MODULE_2__["Web3Service"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])], SimpleWalletComponent);
    /***/
  },

  /***/
  "./src/app/simple/simplewallet.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/simple/simplewallet.module.ts ***!
    \***********************************************/

  /*! exports provided: SimpleModule */

  /***/
  function srcAppSimpleSimplewalletModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SimpleModule", function () {
      return SimpleModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _simple_wallet_simple_wallet_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./simple-wallet/simple-wallet.component */
    "./src/app/simple/simple-wallet/simple-wallet.component.ts");
    /* harmony import */


    var _util_util_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../util/util.module */
    "./src/app/util/util.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");

    var SimpleModule = function SimpleModule() {
      _classCallCheck(this, SimpleModule);
    };

    SimpleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOptionModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _util_util_module__WEBPACK_IMPORTED_MODULE_4__["UtilModule"]],
      declarations: [_simple_wallet_simple_wallet_component__WEBPACK_IMPORTED_MODULE_3__["SimpleWalletComponent"]],
      exports: [_simple_wallet_simple_wallet_component__WEBPACK_IMPORTED_MODULE_3__["SimpleWalletComponent"]]
    })], SimpleModule);
    /***/
  },

  /***/
  "./src/app/util/util.module.ts":
  /*!*************************************!*\
    !*** ./src/app/util/util.module.ts ***!
    \*************************************/

  /*! exports provided: UtilModule */

  /***/
  function srcAppUtilUtilModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UtilModule", function () {
      return UtilModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _web3_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./web3.service */
    "./src/app/util/web3.service.ts");

    var UtilModule = function UtilModule() {
      _classCallCheck(this, UtilModule);
    };

    UtilModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      providers: [_web3_service__WEBPACK_IMPORTED_MODULE_3__["Web3Service"]],
      declarations: []
    })], UtilModule);
    /***/
  },

  /***/
  "./src/app/util/web3.service.ts":
  /*!**************************************!*\
    !*** ./src/app/util/web3.service.ts ***!
    \**************************************/

  /*! exports provided: Web3Service */

  /***/
  function srcAppUtilWeb3ServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Web3Service", function () {
      return Web3Service;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var truffle_contract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! truffle-contract */
    "./node_modules/truffle-contract/index.js");
    /* harmony import */


    var truffle_contract__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(truffle_contract__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var Web3 = __webpack_require__(
    /*! web3 */
    "./node_modules/web3/src/index.js");

    var Web3Service =
    /*#__PURE__*/
    function () {
      function Web3Service() {
        var _this3 = this;

        _classCallCheck(this, Web3Service);

        this.ready = false;
        this.accountsObservable = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        window.addEventListener('load', function (event) {
          _this3.bootstrapWeb3();
        });
      }

      _createClass(Web3Service, [{
        key: "bootstrapWeb3",
        value: function bootstrapWeb3() {
          var _this4 = this;

          // Checking if Web3 has been injected by the browser (Mist/MetaMask)
          if (typeof window.web3 !== 'undefined') {
            // Use Mist/MetaMask's provider
            this.web3 = new Web3(window.web3.currentProvider);
          } else {
            console.log('No web3? You should consider trying MetaMask!'); // Hack to provide backwards compatibility for Truffle, which uses web3js 0.20.x

            Web3.providers.HttpProvider.prototype.sendAsync = Web3.providers.HttpProvider.prototype.send; // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)

            this.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
          }

          setInterval(function () {
            return _this4.refreshAccounts();
          }, 100);
        }
      }, {
        key: "getWeb3",
        value: function getWeb3() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            var delay;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    if (this.web3) {
                      _context7.next = 7;
                      break;
                    }

                    delay = new Promise(function (resolve) {
                      return setTimeout(resolve, 100);
                    });
                    _context7.next = 4;
                    return delay;

                  case 4:
                    _context7.next = 6;
                    return this.getWeb3();

                  case 6:
                    return _context7.abrupt("return", _context7.sent);

                  case 7:
                    return _context7.abrupt("return", this.web3);

                  case 8:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "artifactsToContract",
        value: function artifactsToContract(artifacts) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8() {
            var delay, contractAbstraction;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    if (this.web3) {
                      _context8.next = 7;
                      break;
                    }

                    delay = new Promise(function (resolve) {
                      return setTimeout(resolve, 100);
                    });
                    _context8.next = 4;
                    return delay;

                  case 4:
                    _context8.next = 6;
                    return this.artifactsToContract(artifacts);

                  case 6:
                    return _context8.abrupt("return", _context8.sent);

                  case 7:
                    contractAbstraction = truffle_contract__WEBPACK_IMPORTED_MODULE_2___default()(artifacts);
                    contractAbstraction.setProvider(this.web3.currentProvider);
                    return _context8.abrupt("return", contractAbstraction);

                  case 10:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "refreshAccounts",
        value: function refreshAccounts() {
          var _this5 = this;

          this.web3.eth.getAccounts(function (err, accs) {
            console.log('Refreshing accounts');

            if (err != null) {
              console.warn('There was an error fetching your accounts.');
              return;
            } // Get the initial account balance so it can be displayed.


            if (accs.length === 0) {
              console.warn('Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.');
              return;
            }

            if (!_this5.accounts || _this5.accounts.length !== accs.length || _this5.accounts[0] !== accs[0]) {
              console.log('Observed new accounts');

              _this5.accountsObservable.next(accs);

              _this5.accounts = accs;
            }

            _this5.ready = true;
          });
        }
        /*
        private async refreshAccounts(): Promise<string> {
        if (this._account == null) {
          this._account = await new Promise((resolve, reject) => {
            this._web3.eth.getAccounts((err, accs) => {
              if (err != null) {
                alert('There was an error fetching your accounts.');
                return;
              }
                    if (accs.length === 0) {
                alert(
                  'Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.'
                );
                return;
              }
              resolve(accs[0]);
            })
          }) as string;
                this._web3.eth.defaultAccount = this._account;
        }
              return Promise.resolve(this._account);
        }*/

      }]);

      return Web3Service;
    }();

    Web3Service = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], Web3Service);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // The file contents for the current environment will overwrite these during build.
    // The build system defaults to the dev environment which uses `environment.ts`, but if you do
    // `ng build --env=prod` then `environment.prod.ts` will be used instead.
    // The list of which env maps to which file can be found in `.angular-cli.json`.


    var environment = {
      production: false
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\angbox_\src\main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!************************!*\
    !*** buffer (ignored) ***!
    \************************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  2:
  /*!**********************!*\
    !*** util (ignored) ***!
    \**********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  3:
  /*!**********************!*\
    !*** util (ignored) ***!
    \**********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  4:
  /*!************************!*\
    !*** crypto (ignored) ***!
    \************************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map