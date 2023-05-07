https://eth-goerli.g.alchemy.com/v2/blX3GEjdM-MM0B-SDPJUOOb4SKJaYxvb

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    Goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/blX3GEjdM-MM0B-SDPJUOOb4SKJaYxvb',
      accounts: ['ea2653be6f3e277e8804c25f61c77559dec6058412db6edd9ccd196f0441623d'],
    },
  },
};