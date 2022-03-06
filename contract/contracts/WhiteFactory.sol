// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract WhiteFactory {
    address private _owner;

    event Deployed(address addr, uint salt);

    constructor() {
        _owner = msg.sender;
    }

    function owner() public view virtual returns (address) {
        return _owner;
    }

    modifier onlyOwner() {
        require(owner() == msg.sender, "Caller is not the owner");
        _;
    }

    function deploy(bytes memory bytecode, uint _salt) public onlyOwner {
        address addr;

        assembly {
            addr := create2(0, add(bytecode, 0x20), mload(bytecode), _salt)
            if iszero(extcodesize(addr)) {
                revert(0, 0)
            }
        }

        emit Deployed(addr, _salt);
    }
}
