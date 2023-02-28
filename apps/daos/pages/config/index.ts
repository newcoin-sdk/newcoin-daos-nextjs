import { NCO_BlockchainAPI } from "@newfound8ion/newcoin-sdk";

export const newcoin = new NCO_BlockchainAPI({
	debug: false,
	is_proxy: false,
	services: NCO_BlockchainAPI.defaults.devnet_services,
	urls: NCO_BlockchainAPI.defaults.devnet_urls,
});
