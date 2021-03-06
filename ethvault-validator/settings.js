module.exports = {
    // operating chain list
    chainList: [
        'eth',
        'klaytn',
    ],

    // Bridge Addresses
    BridgeAddress: {
        OrbitHubContract: "0x0000000000000000000000000000000000000000",
        OrbitBridgeHubContract: "0x0000000000000000000000000000000000000000",
        EthBridgeContract: "0x0000000000000000000000000000000000000000",
        KlaytnBridgeContract: "0x0000000000000000000000000000000000000000",
        MessageMultiSigWallet: {
            Hub: "0x0000000000000000000000000000000000000000",
            Eth: "0x0000000000000000000000000000000000000000",
            Klaytn: "0x0000000000000000000000000000000000000000",
        },
        Eth: {
            EthVaultContract: "0x0000000000000000000000000000000000000000",
        },
        Klay: {
            KlaytnMinterContract: "0x0000000000000000000000000000000000000000",
            MessageMultiSigWallet: "0x0000000000000000000000000000000000000000",
        },
        Governance: {
            Chain: "ETH",
            Address: "0x0000000000000000000000000000000000000000",
            Bytes: "0x0000000000000000000000000000000000000000",
            Id: "0x0000000000000000000000000000000000000000000000000000000000000000",
        },
    },

    // Node Endpoints
    Endpoints : {
        Orbit: {
            rpc : "http://orbitchain",
            socket: "ws://orbitchain",
        },
        Eth : {
            rpc : "http://infura",
            socket : "ws://infura",
        },
        Klaytn: {
            rpc: "https://api.cypress.klaytn.net:8651",
            socket: "wss://api.cypress.klaytn.net:8652",
        },
    },

    DEBUG: true,
    LOGLEVEL: 'debug',

    // WIP: validator things.
    VALIDATOR_ACCOUNT: {
        TYPE: "PK",
        DATA: "0000000000000000000000000000000000000000000000000000000000000000",
    },
}