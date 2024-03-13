// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./ERC20.sol";

contract BIMA is ERC20 {
    address public owner;

    constructor(
        string memory name,
        string memory symbol,
        uint8 decimals,
        uint256 initialSupply,
        address _owner
    ) ERC20(name, symbol) {
        _mint(_owner, initialSupply * (10 ** uint256(decimals)));
        owner = _owner;
    }

    function transferOwnership(address newOwner) public {
        require(newOwner != address(0), "New owner is the zero address");
        require(msg.sender == owner, "Only the owner can transfer ownership");
        owner = newOwner;
    }
}
