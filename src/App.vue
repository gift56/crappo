<script setup>
import { RouterView } from "vue-router";
import { init } from "@web3-onboard/vue";
import injectedModule, { ProviderLabel } from "@web3-onboard/injected-wallets";
import coinbaseWalletModule from "@web3-onboard/coinbase";
import walletConnectModule from "@web3-onboard/walletconnect";

const infuraKey = import.meta.env.VITE_INFURA_KEY;

const rpcUrl = `https://mainnet.infura.io/v3/${infuraKey}`;

const injected = injectedModule({
  filter: {
    // allow only on non android mobile
    [ProviderLabel.Detected]: ["Android", "desktop"],
  },
});

const wcInitOptions = {
  /**
   * Project ID associated with [WalletConnect account](https://cloud.walletconnect.com)
   */

  projectId: import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID,
  /**
   * Chains required to be supported by all wallets connecting to your DApp
   */
  requiredChains: [1],
  /**
   * Chains required to be supported by all wallets connecting to your DApp
   */
  optionalChains: [42161, 8453, 10, 137, 56],
  /**
   * Defaults to `appMetadata.explore` that is supplied to the web3-onboard init
   * Strongly recommended to provide atleast one URL as it is required by some wallets (i.e. MetaMask)
   * To connect with WalletConnect
   */
  dappUrl: import.meta.env.VITE_WALLET_APP_URL,
};


const coinbaseWallet = coinbaseWalletModule();
const walletConnect = walletConnectModule(wcInitOptions);

init({
  wallets: [coinbaseWallet, walletConnect, injected],
  chains: [
    {
      id: "0x1",
      token: "ETH",
      label: "Ethereum Mainnet",
      rpcUrl,
    },
    {
      id: 42161,
      token: "ARB-ETH",
      label: "Arbitrum One",
      rpcUrl: "https://rpc.ankr.com/arbitrum",
    },
    {
      id: "0xa4ba",
      token: "ARB",
      label: "Arbitrum Nova",
      rpcUrl: "https://nova.arbitrum.io/rpc",
    },
    {
      id: "0x2105",
      token: "ETH",
      label: "Base",
      rpcUrl,
    },
    {
      id: "0x3",
      token: "tROP",
      namespace: "evm",
      label: "Ethereum Ropsten Testnet",
      rpcUrl: `https://ropsten.infura.io/v3/${infuraKey}`,
    },
    {
      id: "0x4",
      token: "rETH",
      namespace: "evm",
      label: "Ethereum Rinkeby Testnet",
      rpcUrl: `https://rinkeby.infura.io/v3/${infuraKey}`,
    },
  ],
});
</script>

<template>
  <RouterView />
</template>
