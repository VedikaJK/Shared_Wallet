const SimpleWallet = artifacts.require("SimpleWallet");

contract("SimpleWallet Test", async accounts => {

    it("should be empty at the beginning", async () => {
        let instance = await SimpleWallet.deployed();
        let balance = await web3.eth.getBalance(instance.address);
        assert.equal(0, balance.valueOf(), "The balance wasn't zero");
    });
    it("should be not be possible for account#3 to deposit and withdraw ether", async () => {
        let instance = await SimpleWallet.deployed();
        let isAllowedToSend = await instance.CheckIfAllowed.call(accounts[2]);
        assert.equal(false, isAllowedToSend, "The account 3 was allowed");
      });
      it("should be possible to add and remove an account", async () => {
        let instance = await SimpleWallet.deployed();
        let isAllowedBefore = await instance.CheckIfAllowed.call(accounts[1]);
        assert.equal(false, isAllowedBefore, "The account was allowed");
        await instance.AllowAddressToSendFunds(accounts[1]);
        
        let isAllowedMidway = await instance.CheckIfAllowed.call(accounts[1]);
        assert.equal(true, isAllowedMidway, "The account was not allowed");
        
        await instance.DisallowAddressToSendFunds(accounts[1]);
        
        let isAllowedEnd = await instance.CheckIfAllowed.call(accounts[1]);
        assert.equal(false, isAllowedEnd, "The account was allowed");
  });
  it("should be possible for the admin to deposit and withdraw ether", async () => {
    let instance = await SimpleWallet.deployed();
    let isAllowedToSend = await instance.CheckIfAllowed.call(accounts[0]);
    assert.equal(true, isAllowedToSend, "The Admin wasn't allowed to deposit and withdraw");
  });


  it("should emit a Deposit Event", async () => {
    let instance = await SimpleWallet.deployed();
    let result = await instance.sendTransaction({from:accounts[0], value: web3.utils.toWei("1","ether")});
    //console.log(result);
    assert.equal("Deposit", result.logs[0].event);
    //console.log(result.logs[0].args);
    assert.equal(web3.utils.toWei("1", "ether"),result.logs[0].args._amount);
    assert.equal(accounts[0],result.logs[0].args._sender);
  });

  it("should be impossible to deposit ether for account#2", async () => {
    let instance = await SimpleWallet.deployed();
    let errorHappened = false
    try{
    await instance.sendTransaction({from:accounts[1], value: web3.utils.toWei("1","ether")});
    
}catch(e){
errorHappened = true    
}
    assert.equal(true,errorHappened,"No error happened even though we expected an error");
});
    
 
      
    

});