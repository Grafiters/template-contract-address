const { writeAddr,writeJson } = require("./artifact_log")
// This is a script for deploying your contracts. You can adapt it to deploy
// yours, or create new ones.
async function main() {
    // This is just a convenience check
    if (network.name === "hardhat") {
      console.warn(
        "You are trying to deploy a contract to the Hardhat Network, which" +
          "gets automatically created and destroyed every time. Use the Hardhat" +
          " option '--network localhost'"
      );
    }
  
    // ethers is avaialble in the global scope
    const [deployer] = await ethers.getSigners();
    console.log(
      "Deploying the contracts with the account:",
      await deployer.getAddress()
    );

    // deployer address as feeToSetter
    feeToSetter = deployer.getAddress()

    const _BIMA = await ethers.getContractFactory("BimaToken");
    const BIMA = await _BIMA.deploy({gasLimit: 1000000});
    await BIMA.deployed();
    console.log("BIMA address:", BIMA.address);
    await writeAddr(BIMA.address, "BIMA");
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  