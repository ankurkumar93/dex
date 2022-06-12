const Router = artifacts.require("UniswapV2Router02.sol");
const WETH = artifacts.require("WETH.sol");


module.exports = async function (deployer) {
    let weth;
    const FACTORY_ADDRESS = '0x28fb1924A1371029939811A0051167d37144aAa3'

    await deployer.deploy(WETH)
    weth = await WETH.deployed() 
 await  deployer.deploy(Router, FACTORY_ADDRESS, weth.address);
};
