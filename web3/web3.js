import Web3 from "web3";

const provider = new Web3.providers.HttpProvider(
  'https://mainnet.infura.io/v3/a4f1407dc85d47329d64aec36d5a5553'
);

let web3;

if (window.ethereum) {
  if (
    parseInt(window.ethereum.chainId) ===
    parseInt(process.env.REACT_APP_CHAIN_ID)
  ) {
    web3 = new Web3(window.ethereum);
    web3.fromInfura = false;
  } else {
    web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545/');
    web3.fromInfura = true;
  }
} else {
  web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545/');
  web3.fromInfura = true;
}

let web3Object = {
  web3: web3,
};

export default web3Object;