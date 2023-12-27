<template>
  <section class="w-full">
    <div class="container">
      <div
        class="w-full py-12 flex flex-wrap lg:flex-nowrap items-center justify-start gap-8 md:gap-12"
      >
        <div
          v-for="rate in rateInfoData"
          class="w-fit flex flex-col md:flex-row items-start justify-start gap-3"
        >
          <img :key="rate.detail" :src="rate.icon" :alt="rate.detail" />
          <div class="flex flex-col items-start">
            <h3></h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { rateInfoData } from "@/constant";
</script>
