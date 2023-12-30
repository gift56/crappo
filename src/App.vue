<script setup>
import { RouterView } from "vue-router";
import { init } from "@web3-onboard/vue";
import injectedModule from "@web3-onboard/injected-wallets";

const injected = injectedModule();
const infuraKey = import.meta.env.VITE_INFURA_KEY;
const rpcUrl = `https://mainnet.infura.io/v3/${infuraKey}`;

init({
  wallets: [injected],
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
      rpcUrl,
    },
    {
      id: "0xa4ba",
      token: "ARB",
      label: "Arbitrum Nova",
      rpcUrl,
    },
    {
      id: "0x2105",
      token: "ETH",
      label: "Base",
      rpcUrl,
    },
  ],
});
</script>

<template>
  <RouterView />
</template>
