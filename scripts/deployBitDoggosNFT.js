const hre = require("hardhat");
const fs = require("fs");

async function main() {

  const BitDoggosNFT = await hre.ethers.getContractFactory("BitDoggosNFT");
  const bitDoggosNFT = await BitDoggosNFT.deploy();

  await bitDoggosNFT.deployed();

  console.log("BitDoggosNFT deployed to:", bitDoggosNFT.address);

  
  

  const data = {
    address: bitDoggosNFT.address,
    abi: JSON.parse(bitDoggosNFT.interface.format('json'))
  }

  //This writes the ABI and address to the mktplace.json
  fs.writeFileSync('./src/BitDoggosNFT.json', JSON.stringify(data))
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
