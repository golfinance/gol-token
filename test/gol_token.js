// GolToken - GOL Finance 2021 
// File: gol_token.js (core.goltoken)
// Author: Maradona {I.S.} AUG - 2021
//////////////////////////////////////

const GolToken = artifacts.require("GolToken");

contract("GolToken", accounts=> {
  let token;
  const [admin, _] = accounts;
  const TOTAL_SUPPLY = web3.utils.toWei('10000000');

  before(async () => {
    token = await GolToken.new();
  });

  it("should assert true", async function () {
    await GolToken.deployed();
    return assert.isTrue(true);
  });
  it('admin should have total supply', async () => {
    const totalSupply = await token.totalSupply();
    const balanceAdmin = await token.balanceOf(admin);
    assert(totalSupply.toString() === TOTAL_SUPPLY);
    assert(balanceAdmin.toString() === TOTAL_SUPPLY);
  });
});
