<template>
  <section class="w-full bg-white">
    <div class="container py-40">
      <div class="w-full flex items-center justify-center flex-col gap-10 pt-32">
        <h2
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{
            opacity: 1,
            y: 0,
            transition: {
              delay: 100,
            },
          }"
          class="text-3xl font-bold md:text-4xl md:leading-[150%] text-center text-dark"
        >
          Trade securely and market the high <br class="hidden lg:block" />
          growth cryptocurrencies.
        </h2>
        <div
          class="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 items-start justify-start"
        >
          <div
            v-for="(item, index) in currencyRateData"
            :key="index"
            v-motion
            :initial="{ opacity: 0, scale: 0, y: 80 }"
            :visible="{
              opacity: 1,
              scale: 1,
              y: 0,
              transition: {
                delay: 100 * index,
              },
            }"
            class="group w-full flex flex-col items-center justify-center gap-6 p-4 md:p-6 bg-white hover:bg-secondary transition-all duration-200 rounded-2xl shadow-exchangeShad mix-blend-overlay"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { currencyRateData } from "@/constant";
</script>
