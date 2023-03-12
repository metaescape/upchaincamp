// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const Counter = await hre.ethers.getContractFactory("Counter");
  const counter = await Counter.deploy();

  await counter.deployed();
  console.log("Counter deployed to:", counter.address);
  console.log(`Counter counter: ${await counter.counter()}`);
  console.log(`network chainId: ${hre.network.config.chainId}`);

  if (hre.network.config.chainId === 5) {
    // goerli testnet
    console.log("Waiting for block confirmations...");
    await counter.deployTransaction.wait(6);
    console.log(`counter Contract deployed at address: ${counter.address}`);
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
