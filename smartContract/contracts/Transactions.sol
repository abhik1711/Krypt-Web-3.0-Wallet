// SPDX-License-Identifier: UNLICENSED

/* As a newbie in the world of Blockchain and Web3, this was a great experience to learn and know about a new language - "Solidity" 
    The reference on how to setup and syntax accuracies was verified using the Javascript Mastery YT channel 
    Video Link - https://youtu.be/Wn_Kb3MR_cU?si=ApqRr6nYMvBaHmCR 
*/


pragma solidity ^0.8.0;

contract Transactions {
    uint256 transactionCount;

    event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp, string keyword);
  
    struct TransferStruct {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    TransferStruct[] transactions;

    function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public {
        transactionCount += 1;
        transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword));

        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
    }

    function getAllTransactions() public view returns (TransferStruct[] memory) {
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    }
}
