//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.10;

import "hardhat/console.sol";

contract Domains {
    //map data type to store names
    mapping(string => address) public domains;
    mapping(string => string) public records;

    constructor(){
        console.log("Yo Yo I'm a contract and I'm smart.");
      }

    //register is a function to add names to map
    function register(string calldata name) public {
        require(domains[name] == address(0));
        //msg.sender wallet address of person calling register function
        domains[name] = msg.sender;
        console.log("%s has registered a domain!", msg.sender);
    }
//getAddress gets wallet address of domain owner
//calldata -indicates location of name argument /non-persistent/unmodifiable
//public view -for viewing only by public
//returns- domain owners wallet address
    function getAddress(string calldata name) public view returns (address) {
        return domains[name];
        }
    function setRecord(string calldata name, string calldata record) public {
        require(domains[name] == msg.sender);
        records[name] = record;
    }

     function getRecord(string calldata name) public view returns(string memory){
         return records[name];
     }
     }
