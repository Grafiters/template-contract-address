require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: {
    compilers: [
          {version: "0.8.4"},
      ]
  },
  networks: {
    bnb: {
      url: "https://data-seed-prebsc-1-s1.bnbchain.org:8545",
      chainId: 97,
      accounts: ['371d8f22b9a617c04eef587602c3ddb268e1fbfebe7601e79665d7e5011cf117']
    },
    ftm: {
      url: "https://rpc.testnet.fantom.network/",
      chainId: 4002,
      accounts: ['371d8f22b9a617c04eef587602c3ddb268e1fbfebe7601e79665d7e5011cf117']
    },
    tron: {
      url: "https://api.nileex.io",
      chainId: TRON,
      accounts: ['231cd59441c7ce7c7159ac301f6f60ccae842d3199d091ec7abcbea566179bb1']
    }
  }
};
