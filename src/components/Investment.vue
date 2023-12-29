<template>
  <section class="w-full bg-secondary">
    <div class="container py-14">
      <div
        class="w-full flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12"
      >
        <div
          class="w-full lg:flex-1 flex flex-col items-start justify-start gap-6"
        >
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
            class="text-2xl font-bold md:text-3xl md:leading-[150%]"
          >
            Grow your profit and track <br class="hidden xl:block" />
            your investments
          </h2>
          <p
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible="{
              opacity: 1,
              y: 0,
              transition: {
                delay: 100,
              },
            }"
            class="font-normal text-base text-textgray"
          >
            Use advanced analytical tools. Clear TradingView
            <br class="hidden xl:block" />
            charts let you track current and historical profit
            <br class="hidden xl:block" />
            investments.
          </p>
          <button
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible="{
              opacity: 1,
              y: 0,
              transition: {
                delay: 50,
              },
            }"
            type="button"
            class="rounded-full w-fit px-8 py-4 outline-none flex items-center justify-center gap-4 border-2 border-primary text-white bg-primary text-sm sm:text-base font-medium capitalize hover:bg-primary/60 group transition-all duration-300"
          >
            Learn More
          </button>
        </div>
        <div
          v-motion
          :initial="{ opacity: 0, scale: 0.5 }"
          :visible="{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 150,
            },
          }"
          class="w-full lg:flex-1 flex flex-col items-center justify-start relative rounded-2xl bg-chartBgColor py-6 px-3"
        >
          <div
            class="flex items-center justify-end gap-6 md:gap-14 w-full mb-3"
          >
            <span class="text-sm font-semibold md:text-base">Price</span>
            <span class="text-sm font-semibold md:text-base">Change</span>
            <span class="text-sm font-semibold md:text-base">Volume (24h)</span>
          </div>
          <div
            v-for="item in currencyRateData"
            :key="item.coinName"
            class="w-full flex flex-wrap md:flex-nowrap items-center justify-between gap-5 py-2 hover:bg-[#4610AD] rounded-2xl px-4 hover:md:-translate-x-10 hover:scale-110 transition-all duration-300"
          >
            <div class="flex items-start justify-start gap-3">
              <img
                :src="item.coinIcon"
                :alt="item.coinName"
                class="w-10 h-10 object-contain rounded-full"
              />
              <div class="flex flex-col items-start justify-start gap-1">
                <h4 class="text-lg sm:text-xl font-bold text-white uppercase">
                  {{ item.abbrevate }}
                </h4>
                <p class="text-[#f2f2f2bd] text-sm sm:text-base font-normal">
                  {{ item.coinName }}
                </p>
              </div>
            </div>
            <p class="text-base font-normal "></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { currencyRateData } from "@/constant";
</script>
