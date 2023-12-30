<script setup>
import { RouterView } from "vue-router";
import { init } from "@web3-onboard/vue";
import injectedModule, { ProviderLabel } from "@web3-onboard/injected-wallets";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";

const infuraKey = import.meta.env.VITE_INFURA_KEY;
const rpcUrl = `https://mainnet.infura.io/v3/${infuraKey}`;
const injected = injectedModule({
  filter: {
    // allow only on non android mobile
    [ProviderLabel.Detected]: ["Android", "desktop"],
  },
});
const coinbase = new CoinbaseWalletSDK({
  darkMode: false,
});

init({
  wallets: [injected, coinbase],
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
      token: "rETH",
      label: "Ethereum Ropsten",
      rpcUrl: `https://ropsten.infura.io/v3/${infuraKey}`,
    },
  ],
});
</script>

<template>
  <RouterView />
</template>
