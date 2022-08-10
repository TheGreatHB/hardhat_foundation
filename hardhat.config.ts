import "dotenv/config";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";
import "@nomicfoundation/hardhat-chai-matchers";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-solhint";
import "solidity-coverage";
import "hardhat-gas-reporter";
import "hardhat-tracer";

import { HardhatUserConfig } from "hardhat/types";

let accounts;
if (process.env.PRIVATE_KEY) {
    accounts = [process.env.PRIVATE_KEY || "0x0000000000000000000000000000000000000000000000000000000000000000"];
} else {
    accounts = {
        mnemonic: process.env.MNEMONIC || "test test test test test test test test test test test junk",
    };
}

const config: HardhatUserConfig = {
    solidity: {
        compilers: [
            {
                version: "0.8.15",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            },
        ],
    },
    networks: {
        mainnet: {
            url: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}` || "",
            accounts,
            chainId: 1,
        },
        popcateum: {
            url: "https://dataseed.popcateum.org",
            accounts,
            chainId: 1213,
        },
    },
    etherscan: {
        apiKey: process.env.ETHERSCAN_API_KEY,
    },
};

export default config;
