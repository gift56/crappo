<script setup>
import { useOnboard } from "@web3-onboard/vue";

import { ethers } from "ethers";

const { connectedWallet, connectingWallet, connectWallet, disconnectWallet } =
  useOnboard();

if (connectedWallet?.provider) {
  const ethersProvider = new ethers.providers.Web3Provider(
    connectedWallet.provider,
    "any"
  );
  console.log(ethersProvider);
}

const onClickConnect = () => {
  const { provider, label } = connectedWallet.value || {};
  if (provider && label) {
    disconnectWallet({ label });
  } else {
    connectWallet();
  }
};
</script>

<template>
  <button
    type="button"
    @click="onClickConnect"
    class="flex items-center justify-center gap-2 w-fit h-10 border border-primary px-5 rounded-full outline-none bg-primary text-white"
  >
    <div
      v-html="connectedWallet ? connectedWallet.icon : ''"
      class="w-10 h-10"
      :class="{ 'hidden': !connectedWallet }"
    ></div>
    {{
      connectingWallet
        ? "Connecting..."
        : connectedWallet
        ? `Disconnect ${connectedWallet?.label}`
        : "Connect Wallet"
    }}
  </button>
</template>
