require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: {
    compilers: [
          {version: "0.8.4"},
      ]
  },
  networks: {
    dev: {
      url: "https://data-seed-prebsc-1-s3.binance.org:8545",
      chainId: 97,
      accounts: ['b891c28c6d0634e8a654846ed7c00ef7acb161b0d463f57d80fe82e4a5024afb']
    }
  }
};
