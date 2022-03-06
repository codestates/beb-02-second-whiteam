// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

interface IWhiteNFT {
    function mintNFT(address recipient, string memory tokenURI) external returns (uint256);

    function currentTokenIds() external returns (uint256);

    function ownerOf(uint256 tokenId) external view returns (address owner);

    function transferFrom(address from, address to, uint256 tokenId) external;

    function name() external view returns (string memory);

    function symbol() external view returns (string memory);

    function tokenURI(uint256 tokenId) external view returns (string memory);
}
