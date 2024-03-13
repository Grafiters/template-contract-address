const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying the contract with the account:", deployer.address);

    const gasPrice = ethers.utils.parseUnits("10", "gwei");

    const MyToken = await ethers.getContractFactory("BIMA");
    const myToken = await MyToken.deploy(
        "Fantom USDT", // name
        "FUSDT", // symbol
        18, // decimals
        ethers.utils.parseEther("100000000"), // initial supply
        deployer.address, // owner
        { gasPrice: gasPrice }
    );

    console.log("MyToken address:", myToken.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
