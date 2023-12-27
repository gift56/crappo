<template>
  <section id="products" class="w-full">
    <div class="container relative">
      <div
        class="w-full py-12 flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12"
      >
        <div
          class="w-full lg:flex-1 flex flex-col items-start justify-start gap-6"
        >
          <div
            class="w-full sm:w-[365px] h-10 flex items-center justify-start bg-gray1 rounded-full gap-3 text-base font-normal"
          >
            <span
              class="w-fit h-full font-medium text-dark bg-white px-4 flex items-center justify-center rounded-full"
              >75% SAVE</span
            >
            <span>For the Black Friday weekend</span>
          </div>
          <h1
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :enter="{
              opacity: 1,
              y: 0,
              transition: {
                delay: 100,
              },
            }"
            class="text-3xl font-bold md:text-5xl lg:text-6xl"
          >
            Fastest & secure platform to invest in crypto
          </h1>
          <p
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :enter="{
              opacity: 1,
              y: 0,
              transition: {
                delay: 100,
              },
            }"
            class="font-normal text-base text-textgray"
          >
            Buy and sell cryptocurrencies, trusted by 10M wallets
            <br class="hidden lg:block" />
            with over $30 billion in transactions.
          </p>
          <button
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :enter="{
              opacity: 1,
              y: 0,
              transition: {
                delay: 50,
              },
            }"
            type="button"
            class="rounded-full w-fit px-3 md:px-6 py-4 outline-none flex items-center justify-center gap-4 border-2 border-primary text-white bg-primary text-sm sm:text-base font-medium uppercase hover:bg-primary/60 group transition-all duration-300"
          >
            Try for FREE
            <span
              class="w-6 h-6 bg-white rounded-full flex items-center justify-center group-hover:ml-3 transition-all duration-200"
            >
              <img src="/icon/rightArrowIcon.svg" alt="right arrow" />
            </span>
          </button>
        </div>
        <div class="w-full lg:flex-1 flex items-center justify-center gap-6">
          <div class="w-full md:flex-1">
            <img
              v-motion
              :initial="{ opacity: 0, scale: 0.5 }"
              :enter="{
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 200,
                },
              }"
              src="/img/heroImage.svg"
              alt="heroImage"
              class=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
