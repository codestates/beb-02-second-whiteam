const WhiteFactory = artifacts.require('WhiteFactory');

module.exports = async function (deployer) {
  deployer.deploy(WhiteFactory);
};
