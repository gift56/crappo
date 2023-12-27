<template>
  <section class="w-full">
    <div class="container">
      <div
        class="w-full py-12 flex flex-wrap lg:flex-nowrap items-center justify-between gap-8 md:gap-12"
      >
        <div
          v-for="rate in rateInfoData"
          class="w-fit flex flex-col md:flex-row items-start justify-start gap-3"
        >
          <img :key="rate.detail" :src="rate.icon" :alt="rate.detail" />
          <div class="flex flex-col items-start">
            <h3
              class="text-3xl font-bold text-white md:text-4xl lg:text-[40px] lg:leading-[150%]"
            >
              {{ rate.figure }}
            </h3>
            <p class="font-normal text-base text-textgray">{{ rate.detail }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { rateInfoData } from "@/constant";
</script>
