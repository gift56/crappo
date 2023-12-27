<template>
  <section class="w-full">
    <div class="container">
      <div
        class="w-full py-12 flex flex-wrap lg:flex-nowrap items-center justify-center gap-8 md:gap-12"
      >
        <img
          :key="rate.detail"
          :src="rate.icon"
          :alt="rate.detail"
          v-for="rate in rateInfoData"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { rateInfoData } from "@/constant";
</script>
