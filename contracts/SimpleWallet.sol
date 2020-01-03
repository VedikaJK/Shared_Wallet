pragma solidity ^0.5.0;

contract SimpleWallet{
    
    struct withdrawalStruct{
        address to;
        uint amount;
    }
    
    struct  Senders{
        bool allowed ;
        uint withdrawals ;
        mapping(uint=>withdrawalStruct)  record;
    }
    
    address payable owner;
    mapping(address=>Senders) public AllowedAddressesToSendFunds;
    
    
    event Deposit(address _sender,uint _amount);
    event Withdrawal(address _sender,uint _amount, address _beneficiary);
    
    
    constructor() public{
        owner = msg.sender;
        AllowedAddressesToSendFunds[owner].allowed = true;
        
    }
    
    modifier onlyOwner(){
         require(msg.sender==owner,"You are not allowed!");
        _;
    }
    
    //Deposit function
    function() external payable {
        //require(AllowedAddressesToSendFunds[msg.sender],"You are not allowed!");
        require(CheckIfAllowed(msg.sender),"You are not allowed!");
        emit Deposit(msg.sender,msg.value);
    }
    
    //Withdraw function
    function sendFunds(uint money, address payable receiver) public {
        require(AllowedAddressesToSendFunds[msg.sender].allowed,"You are not allowed!");
        receiver.transfer(money);
        emit Withdrawal(msg.sender,money,receiver);
        AllowedAddressesToSendFunds[msg.sender].withdrawals++;
        AllowedAddressesToSendFunds[msg.sender].record[AllowedAddressesToSendFunds[msg.sender].withdrawals].to = receiver;
        AllowedAddressesToSendFunds[msg.sender].record[AllowedAddressesToSendFunds[msg.sender].withdrawals].amount = money;
        
        
        
    } 
    
    function getWithdrawal(address _adr,uint _index) public view returns(address,uint){
        return(AllowedAddressesToSendFunds[_adr].record[_index].to,AllowedAddressesToSendFunds[_adr].record[_index].amount);
    }
    
    function AllowAddressToSendFunds(address _adr) public onlyOwner{
        AllowedAddressesToSendFunds[_adr].allowed = true;
    }
    function DisallowAddressToSendFunds(address _adr) public onlyOwner{
        AllowedAddressesToSendFunds[_adr].allowed = false;
    }

    function CheckIfAllowed(address _adr) public view returns(bool){
        return AllowedAddressesToSendFunds[_adr].allowed;
    }
    
    function killWallet() public onlyOwner{
        selfdestruct(owner);
    }
    
}