<template>
  <section class="w-full bg-secondary">
    <div class="container py-14">
      <div class="w-full flex items-center justify-center flex-col gap-10">
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
          class="text-2xl sm:text-3xl font-bold md:text-4xl md:leading-[150%] text-center"
        >
          Market sentiments, portfolio, and run <br class="hidden lg:block" />
          the infrastructure of your choice
        </h2>
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
              Invest Smart
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
              Get full statistic information about the behaviour of
              <br class="hidden lg:block" />
              buyers and sellers will help you to make the decision.
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
            class="w-full md:flex-1 relative flex items-center justify-center"
          >
            <div
              class="w-full md:w-[500px] h-[298px] rounded-2xl bg-chartBgColor flex flex-col items-start justify-start gap-4 p-6"
            >
              <div class="flex items-start justify-start gap-3">
                <img
                  src="/img/coin1.svg"
                  alt="btcimage"
                  class="w-12 h-12 object-contain rounded-full"
                />
                <div class="flex flex-col items-start justify-start gap-1">
                  <h4
                    class="flex items-start justify-center gap-2 text-2xl sm:text-3xl font-bold text-dark group-hover:text-white"
                  >
                    <span>{{ item.coinName }}</span>
                    <span
                      class="text-base font-medium text-[#BDBDBD] group-hover:text-white/70 md:text-lg"
                      >{{ item.abbrevate }}</span
                    >
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script></script>
