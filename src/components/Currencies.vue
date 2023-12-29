<template>
  <section id="products" class="w-full bg-white">
    <div class="container py-40">
      <div
        class="w-full flex items-center justify-center flex-col gap-10 pt-32"
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
          class="text-2xl sm:text-3xl font-bold md:text-4xl md:leading-[150%] text-center text-dark"
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
            class="group w-full flex flex-col items-center justify-center gap-6 px-4 py-8 md:py-12 md:px-6 bg-white hover:bg-secondary transition-all duration-200 rounded-2xl shadow-cardShad cursor-pointer group-hover:backdrop-blur-[125px]"
          >
            <img
              :src="item.coinIcon"
              :alt="item.coinName"
              class="w-12 h-12 md:w-20 md:h-20 object-contain rounded-full"
            />
            <h4
              class="flex items-start justify-center gap-2 text-2xl sm:text-3xl font-bold text-dark group-hover:text-white"
            >
              <span>{{ item.coinName }}</span>
              <span
                class="text-base font-medium text-[#BDBDBD] group-hover:text-white/70 md:text-lg"
                >{{ item.abbrevate }}</span
              >
            </h4>
            <p
              class="w-full sm:max-w-[322px] font-normal text-base text-textgray2 group-hover:text-white text-center"
            >
              {{ item.desc }}
            </p>
            <div
              class="w-16 h-16 border border-secondary/40 rounded-full flex items-center justify-center group-hover:gap-3 group-hover:w-fit group-hover:bg-primary group-hover:text-white transition-all duration-300 px-4 relative text-base font-medium md:text-lg overflow-hidden"
            >
              <span
                class="absolute opacity-0 left-0 group-hover:relative group-hover:opacity-100 transition-all duration-300"
                >Start mining</span
              >
              <span
                class="group-hover:w-6 group-hover:h-6 md:w-10 md:h-10 group-hover:md:w-10 group-hover:md:h-10 bg-white rounded-full flex items-center justify-center transition-all duration-200"
              >
                <img
                  src="/icon/rightArrowIcon.svg"
                  alt="right arrow"
                  class="w-full h-full object-cover"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { currencyRateData } from "@/constant";
</script>
