// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract Counter {
    uint256 public counter;

    constructor () {
        counter = 0;
    }

    function count() public {
        counter += 1;
    }

    function add(uint x) public {
        counter =  counter + x;
    }

}