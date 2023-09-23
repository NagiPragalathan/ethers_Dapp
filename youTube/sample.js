const ethers = require('ethers')

const provider = new ethers.providers.JsonRpcProvider(
    'https://polygon-mumbai.g.alchemy.com/v2/K59YdNGK95akCLJrA1m9nYPZ7JYNa8Me'
);

AccountAddress = "0x2D433BAb8Ae5c7829450085c136E711D30aE8E8C"
const walletAddress = "0x482c5E6AF1a42018f6E314f2599882dE9e0Ee1C0"
const walletAbi = [
	{
		"inputs": [],
		"name": "sendEthContract",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "sendEthUser",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_num",
				"type": "uint256"
			}
		],
		"name": "setValue",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "accountBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contractBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getValue",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const Intraction=async()=>{
    const wallet = new ethers.Contract(walletAddress,walletAbi,provider)
    const contract_name = await wallet.name()
    console.log(contract_name)

    const num = await wallet.getValue();
    console.log(num)

    const contract_balance = await wallet.contractBalance();
    console.log(contract_balance)

    console.log(ethers.utils.formatEther(contract_balance))

    const user_bal = await wallet.accountBalance(AccountAddress);
    console.log(user_bal)
    console.log(ethers.utils.formatEther(user_bal))
    console.log(ethers.utils.parseEther(ethers.utils.formatEther(user_bal)))
}
Intraction().then(()=>console.log("done"))

// const block= async()=>{
//     let block = await provider.getBlockNumber();
//     console.log(block);
// }
// block()