const Web3 = require('web3');
const ipfsAPI = require('ipfs-api');
const { whiteNFTBinary } = require('./contracts.json');

const web3 = new Web3(process.env.PROVIDER);
const serverAccount = web3.eth.accounts.privateKeyToAccount(
  process.env.PRIVATE_KEY,
);
const ipfs = ipfsAPI(process.env.IPFS, process.env.IPFS_PORT, {
  protocol: 'http',
});

module.exports = {
  web3: web3,
  serverAccount: serverAccount,
  ipfs: ipfs,
  getBytecode: (name, symbol, ownerAddr) => {
    return `0x${[
      whiteNFTBinary,
      web3.eth.abi.encodeParameters(
        ['string', 'string', 'address'],
        [name, symbol, ownerAddr],
      ),
    ]
      .map((x) => x.replace(/0x/, ''))
      .join('')}`;
  },
  getAddress: (creatorAddress, saltInteger, bytecode) => {
    const salt = web3.eth.abi.encodeParameter('uint', saltInteger);
    return `0x${web3.utils
      .keccak256(
        `0x${['ff', creatorAddress, salt, web3.utils.keccak256(bytecode)]
          .map((x) => x.replace(/0x/, ''))
          .join('')}`,
      )
      .slice(-40)}`.toLowerCase();
  },
};
