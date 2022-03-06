const fs = require('fs');
const WhiteFactory = artifacts.require('WhiteFactory');

module.exports = async function (deployer) {
  const data = {
    whiteFactoryAddress: WhiteFactory.address,
    ...require('../compilation'),
  };
  fs.writeFile(
    deployer.basePath + '/../../server/blockchain/contracts.json',
    JSON.stringify(data),
    (err) => {
      if (err) {
        throw err;
      }
    },
  );
};
