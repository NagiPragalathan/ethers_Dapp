const ether = require("ethers")

const provider = new ether.providers.JsonRpcProvider("https://polygon-mumbai.g.alchemy.com/v2/K59YdNGK95akCLJrA1m9nYPZ7JYNa8Me")

const address = '0x73BCEb1Cd57C711feaC4224D062b0F6ff338501e'


const get_bal = async () =>{
    const balance = await provider.getBalance(address)
    return balance
}