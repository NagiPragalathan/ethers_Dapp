const { ethers } = require("ethers");

const INFURA_ID = ''
const provider = new ethers.providers.JsonRpcProvider(`https://polygon-mumbai.g.alchemy.com/v2/K59YdNGK95akCLJrA1m9nYPZ7JYNa8Me`)

const address = '0x73BCEb1Cd57C711feaC4224D062b0F6ff338501e'

const main = async () => {
    const balance = await provider.getBalance(address)
    console.log(`\nETH Balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH\n`)
}

main()

