const main = async () => {
    // const [owner, randomPerson] = await hre.ethers.getSigners();
    const domainContractFactory = await hre.ethers.getContractFactory('Domains');
    const domainContract = await domainContractFactory.deploy("souls");
    await domainContract.deployed();

    console.log("Contract deployed to:", domainContract.address); 
    // console.log("Contract deployed by:",address); 

    let txn = await domainContract.register("sinetic", {value: hre.ethers.utils.parseEther('0.1')});
    await txn.wait();

const address = await domainContract.getAddress("varity");
console.log("Owner of domain varity:", address);

const balance = await hre.ethers.provider.getBalance(domainContract.address);
console.log("Contract balance:", hre.ethers.utils.formatEther(balance));
// txn = await domainContract.connect(randomPerson).setRecord("varity", "My domain now! All mine");
// await txn.wait();
}

const runMain = async ()  => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();