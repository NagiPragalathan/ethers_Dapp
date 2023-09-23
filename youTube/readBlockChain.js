const {ethers} = require('ethers')
const account = '0x2D433BAb8Ae5c7829450085c136E711D30aE8E8C'
const provider = new ethers.providers.JsonRpcProvider(
    'https://polygon-mumbai.g.alchemy.com/v2/K59YdNGK95akCLJrA1m9nYPZ7JYNa8Me'
);
const querruBlockchain = async()=>{
    const block = await provider.getBlockNumber();
    console.log(`Current Block Number : ${block}`)
    const balance = await provider.getBalance(account)
    const balanceEther = ethers.utils.formatEther(balance)
    const balanceEther1 = ethers.utils.parseEther(balanceEther)
    
    console.log(`Account Balance  is: ${balanceEther}   ${balanceEther1}`)
}
querruBlockchain();
