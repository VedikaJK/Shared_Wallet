# Shared_Wallet
A smart contract that stores ether and can be accessed by privileged members only. The person who deploys the contract is the owner of the wallet. The owner has the authority to blacklist as well as whitelist addresses to use the wallet.

## Tools and Technologies Used
- Remix
- Solidity
- Ganache (Used as test environment before actual deployment)
- Truffle 5.1.5
- Truffle HD-Wallet Provider
- Quintor/Angular-Truffle-Box
- HTML
- Metamask
- Infura

## User Interface

![](Screenshot%20(21).png)
## Installations

1. Install truffle, Angular CLI and an Ethereum client. If you don't have a test environment, we recommend ganache-cli.
```
npm install -g truffle
npm install -g @angular/cli
npm install -g ganache-cli
```
2. Install HTTP server

```
npm install -g http-server
```
## Configuration

Edit truffle-config.js file. <br>
    - Create Metamask account. Write the Metamask 12-word mnemonic as mentioned in the file. <br>
    - Create an Infura account. Create a new project. Copy the project ID from Infura and paste it as mentioned in the file

## Running
1. Run the following commands on the command prompt: <br>
  ```
truffle migrate --network ropsten
npm install @truffle/hdwallet-provider
npm run start
cd dist
http-server.cmd
 ```
 2. Making sure you have configured MetaMask, visit http://127.0.0.1:8080/ in your browser.
 3. Start by sending Ether!
 
