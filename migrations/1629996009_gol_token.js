const GolToken = artifacts.require("GolToken");

module.exports = function(deployer) {
  deployer.deploy(GolToken);
};
