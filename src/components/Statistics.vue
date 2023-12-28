<template>
  <section class="w-full bg-secondary">
    <div class="container py-40">
      <div
        class="w-full flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12"
      >
        <div
          class="w-full md:flex-1 xl:flex-[2] relative flex flex-col gap-6 items-start justify-start"
        >
          <div
            class="w-full flex flex-wrap xl:flex-nowrap gap-4 md:gap-6 bg-chartBgColor rounded-2xl items-center justify-center py-5"
          >
            <div class="w-fit flex items-start justify-start gap-3">
              <span
                class="w-6 h-6 bg-primary/50 text-[#42FFFF] rounded-full flex items-center justify-center"
                ><i class="fa-solid fa-caret-up"></i
              ></span>
              <div class="flex flex-col items-start justify-start gap-1">
                <p class="text-sm md:text-base lg:text-lg font-normal">
                  <span class="font-medium text-[#42FFFF]">+7.3%</span>
                  (+$146)
                </p>
                <span class="text-base font-normal text-textgray2">Trends</span>
              </div>
            </div>

            <div class="flex flex-col items-start justify-start gap-1">
              <p class="text-sm md:text-base lg:text-lg font-medium">
                $8256.00
              </p>
              <span class="text-base font-normal text-textgray2"
                >Total amount</span
              >
            </div>
            <div class="flex flex-col items-start justify-start gap-1">
              <p class="text-sm md:text-base lg:text-lg font-medium">
                $51234.31
              </p>
              <span class="text-base font-normal text-textgray2">High</span>
            </div>
            <div class="flex flex-col items-start justify-start gap-1">
              <p class="text-sm md:text-base lg:text-lg font-medium">
                $1531.80
              </p>
              <span class="text-base font-normal text-textgray2">Low</span>
            </div>
            <div class="w-fit flex items-start justify-start gap-3">
              <img
                src="https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2hpdGUlMjBtYW58ZW58MHx8MHx8fDA%3D"
                alt="trader"
                class="w-10 h-10 md:w-20 md:h-20 rounded-full border object-cover"
              />
              <div class="flex flex-col items-start justify-start gap-1">
                <p class="text-sm md:text-base lg:text-lg font-medium">
                  Andriy Lenin
                </p>
                <span class="text-base font-medium text-[#42FFFF]"
                  >VERIFIED</span
                >
              </div>
            </div>
          </div>
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
