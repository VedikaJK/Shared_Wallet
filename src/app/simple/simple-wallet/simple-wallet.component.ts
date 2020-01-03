import {Component, OnInit} from '@angular/core';
import {Web3Service} from '../../util/web3.service';

import { MatSnackBar } from '@angular/material/snack-bar';

declare let require: any;
const simplewallet_artifacts = require('../../../../build/contracts/SimpleWallet.json');

@Component({
  selector: 'app-meta-sender',
  templateUrl: './simple-wallet.component.html',
  styleUrls: ['./simple-wallet.component.css']
})
export class SimpleWalletComponent implements OnInit {
  accounts: string[];
  SimpleWallet: any;

  model = {
    account: '',
    DepositAmount:0,
    balance:0,
    whitelistAddress:'',
    blacklistAddress:'',
    receiverAddress:'',
    accountAllowed:'not',
    sendAmount:0
  };

  status = '';

  constructor(private web3Service: Web3Service, private matSnackBar: MatSnackBar) {
    console.log('Constructor: ' + web3Service);
  }

  ngOnInit(): void {
    console.log('OnInit: ' + this.web3Service);
    console.log(this);
    this.watchAccount();
    this.web3Service.artifactsToContract(simplewallet_artifacts)
      .then((SimplewalletAbstraction) => {
        this.SimpleWallet = SimplewalletAbstraction;
        this.SimpleWallet.deployed().then(deployed => {
          console.log(deployed);
          deployed.Deposit({}, (err, ev) => {
            console.log('Deposit event came in, refreshing balance');
            this.refreshBalance();
          });
          deployed.Withdrawl({}, (err, ev) => {
            console.log('Withdrawl event came in, refreshing balance');
            this.refreshBalance();
          });

        });

      });
  }

  watchAccount() {
    this.web3Service.accountsObservable.subscribe((accounts) => {
      this.accounts = accounts;
      this.model.account = accounts[0];
      this.refreshBalance();
      this.SimpleWallet.deployed().then(async i => {
        const isAllowed = await i.CheckIfAllowed(this.model.account);
        if(isAllowed) {
          this.model.accountAllowed = '';
        } else {
          this.model.accountAllowed = 'not';
        }
      })
    });
  }

  setStatus(status) {
    this.matSnackBar.open(status, null, {duration: 3000});
  }

  
  async addAllowedAddress() {
    if (!this.SimpleWallet) {
      this.setStatus('SimpleWallet is not loaded, unable to send transaction');
      return;
    }

   
    const whitelistAddress = this.model.whitelistAddress;

    console.log('Whitelisting address:' + whitelistAddress);

    this.setStatus('Initiating transaction... (please wait)');
    try {
      const instance = await this.SimpleWallet.deployed();
      const transaction = await instance.AllowAddressToSendFunds(whitelistAddress, {from: this.model.account});

      if (!transaction) {
        this.setStatus('Transaction failed!');
      } else {
        this.setStatus('Transaction complete!');
      }
    } catch (e) {
      console.log(e);
      this.setStatus('Error sending transaction; see log.');
    }
  }

  async removeAllowedAddress() {
    if (!this.SimpleWallet) {
      this.setStatus('SimpleWallet is not loaded, unable to send transaction');
      return;
    }

   
    const blacklistAddress = this.model.blacklistAddress;

    console.log('Blacklisting address:' + blacklistAddress);

    this.setStatus('Initiating transaction... (please wait)');
    try {
      const instance = await this.SimpleWallet.deployed();
      const transaction = await instance.DisallowAddressToSendFunds(blacklistAddress, {from: this.model.account});

      if (!transaction) {
        this.setStatus('Transaction failed!');
      } else {
        this.setStatus('Transaction complete!');
      }
    } catch (e) {
      console.log(e);
      this.setStatus('Error sending transaction; see log.');
    }
  }
  async refreshBalance() {
    console.log('Refreshing balance');

    try {
      const deployedSimpleWallet = await this.SimpleWallet.deployed();
      console.log(deployedSimpleWallet);
      console.log('Account', this.model.account);
      const simpleWalletBalance = await this.web3Service.getWeb3().then(web3 => {return web3.eth.getBalance(deployedSimpleWallet.address)});
      console.log('Found balance (Wei): ' + simpleWalletBalance);
      this.model.balance = this.SimpleWallet.web3.utils.fromWei(simpleWalletBalance, "Ether");
    } catch (e) {
      console.log(e);
      this.setStatus('Error getting balance; see log.');
    }
  }
  setDepositAmount(e){
    this.model.DepositAmount = e.target.value;
  }

  setWhitelistAddress(e){
    this.model.whitelistAddress = e.target.value;
  }
  setBlacklistAddress(e){
    this.model.blacklistAddress = e.target.value;
  }

  setSendToAddress(e){
    this.model.receiverAddress=e.target.value;
  }

  setSendAmount(e){
    this.model.sendAmount=e.target.value;
  }
  async sendFromWallet(){
    if (!this.SimpleWallet) {
      this.setStatus('SimpleWallet is not loaded, unable to send transaction');
      return;
    }
    const amount=this.model.sendAmount;
    const receiver=this.model.receiverAddress;
    console.log('Sending Ether '+ amount+' to '+receiver);
    this.setStatus('Initializing transaction.. (please wait)');
    try{
      const instance = await this.SimpleWallet.deployed();
      const web3 = await this.web3Service.getWeb3();
      console.log('That is in Wei : '+web3.utils.toWei(amount,"ether")+' Ether');
      const transaction = await instance.sendFunds(web3.utils.toWei(amount,"ether"),receiver,{from: this.model.account});
      if (!transaction) {
        this.setStatus('Transaction failed!');
      } else {
        this.setStatus('Transaction complete!');
      }
    } catch (e) {
      console.log(e);
      this.setStatus('Error sending transaction; see log.');
    }
    
  }

  async DepositEther() {
    if (!this.SimpleWallet) {
      this.setStatus('SimpleWallet is not loaded, unable to send transaction');
      return;
    }

    const amount = this.model.DepositAmount;
    const sender = this.model.account;

    console.log('Sending Ether' + amount + ' from ' + sender);

    this.setStatus('Initiating transaction... (please wait)');
    try {
      const deployedSimpleWallet = await this.SimpleWallet.deployed();
      const transaction = await deployedSimpleWallet.sendTransaction({from: this.model.account, value: this.SimpleWallet.web3.utils.toWei(amount, "Ether")});

      if (!transaction) {
        this.setStatus('Transaction failed!');
      } else {
        this.setStatus('Transaction complete!');
        //this.model.balance=this.web3.eth.getBalance(this.SimpleWallet.address);
      }
    } catch (e) {
      console.log(e);
      this.setStatus('Error sending coin; see log.');
    }
  }

}
