<template>
  <section class="w-full relative">
    <div class="container">
      <div class="w-full flex items-center justify-center flex-col pt-12">
        <div
          class="w-full flex flex-col items-center justify-center gap-8 lg:mt-20"
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
            class="text-3xl font-bold md:text-4xl md:leading-[150%] text-center"
          >
            Check how much you can earn
          </h2>
          <p
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible="{
              opacity: 1,
              y: 0,
              transition: {
                delay: 150,
              },
            }"
            class="font-normal text-base text-textgray text-center"
          >
            {{ `Let’s` }} check your hash rate to see how much you will earn
            today,
            <br class="hidden lg:block" />
            Exercitation veniam consequat sunt nostrud amet.
          </p>
        </div>
        <div
          v-motion
          :initial="{ opacity: 0, scale: 0.5 }"
          :visible="{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 100,
            },
          }"
          class="w-full lg:w-[924px] mx-auto flex flex-col items-start justify-between h-fit md:min-h-[371px] drop-shadow-earnDrop rounded-2xl !translate-y-20 lg:!translate-y-48"
        >
          <div
            class="w-full py-10 px-5 md:px-10 bg-[#FBFCFE] flex-1 rounded-tr-2xl rounded-tl-2xl flex flex-col md:flex-row items-center justify-center md:justify-start gap-5"
          >
            <input
              type="text"
              placeholder="Enter your hash rate"
              class="text-base font-normal text-dark placeholder:text-dark md:text-lg lg:text-xl w-full border-b border-textgray h-10 outline-none bg-transparent"
            />
            <select
              class="text-base font-normal text-dark placeholder:text-dark md:text-lg lg:text-xl w-full border-b border-textgray h-10 outline-none bg-transparent"
            >
              <option value="">TH/s</option>
              <option value="">EUR/USD</option>
              <option value="">BTC/USD</option>
              <option value="">ETH/BTC</option>
            </select>
            <button
              type="button"
              class="rounded-full w-fit px-8 py-4 outline-none flex items-center justify-center gap-4 border-2 border-primary text-white bg-primary text-sm sm:text-base font-medium capitalize hover:bg-primary/60 group transition-all duration-300"
            >
              Calculate
            </button>
          </div>
          <div
            class="w-full py-10 px-5 md:px-10 bg-white shadow-exchangeShad flex-1 flex flex-col items-start justify-end gap-5 rounded-br-2xl rounded-bl-2xl mix-blend-overlay"
          >
            <p class="font-medium text-base text-primary uppercase">
              ESTIMATED 24 HOUR REVENUE:
            </p>
            <h3 class="text-2xl text-dark md:text-3xl font-bold">
              0.055 130 59 ETH <span class="text-primary">($1275)</span>
            </h3>
            <span class="font-normal text-base text-textgray2"
              >Revenue will change based on mining difficulty and Ethereum
              price.</span
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
