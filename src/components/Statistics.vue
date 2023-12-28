<template>
  <section class="w-full bg-secondary">
    <div class="container py-40">
      <div
        class="w-full flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12"
      >
        <div
          class="w-full md:flex-1 relative flex flex-col items-start justify-start"
        >
          <div></div>
          <div class="w-full bg-chartBgColor h-[450px] rounded-2xl">
            <Chart
              :options="{
                theme: 'dark',
              }"
            />
          </div>
        </div>
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
            Detailed Statistics
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
            View all mining related information in realtime, at any
            <br class="hidden lg:block" />
            point at any location and decide which polls you want
            <br class="hidden lg:block" />
            to mine in.
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
      </div>
    </div>
  </section>
</template>

<script setup>
import { Chart } from "vue-tradingview-widgets";
</script>
