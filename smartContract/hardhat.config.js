// https://eth-sepolia.g.alchemy.com/v2/v1j8gfiyjxL_pTrln-153E1gYkvEiFWE

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/v1j8gfiyjxL_pTrln-153E1gYkvEiFWE',
      accounts: ['5b724f7a986e16ef7e830a42681f760c1b90e98e89a5363ad1f266e5b0bcdca4'],
    },
  },
};