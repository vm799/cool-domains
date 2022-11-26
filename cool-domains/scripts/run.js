const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const domainContractFactory = await hre.ethers.getContractFactory('Domains');
    const domainContract = await domainContractFactory.deploy();
    await domainContract.deployed();
    console.log("Contract deployed to:", domainContract.address); 
    console.log("Contract deployed by:", owner.address); 

    let txn = await domainContract.register("varity");
    await txn.wait();

const domainAddress = await domainContract.getAddress("varity");
console.log("Owner of domain:", domainAddress);

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