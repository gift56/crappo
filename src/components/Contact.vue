<template>
  <section id="contact" class="w-full bg-contactLinear">
    <div class="container py-14">
      <div class="w-full flex items-center justify-center">
        <div
          class="w-full flex flex-col lg:flex-row lg:items-center lg:justify-between lg:h-[216px] rounded-2xl bg-contactBg bg-no-repeat bg-cover items-start justify-start gap-6 p-6"
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
              Start mining now
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
              Join now with CRAPPO to get the latest news
              <br class="hidden lg:block" />
              and start mining now
            </p>
          </div>
          <div
            class="w-full lg:flex-1 flex flex-col lg:flex-row items-center justify-start gap-6"
          >
            <input
              type="text"
              placeholder="Enter your email"
              class="text-base font-normal text-white placeholder:text-white md:text-lg lg:text-xl w-full border-b border-textgray h-10 outline-none bg-transparent"
            />
            <button
              type="button"
              class="rounded-full w-fit px-8 py-4 outline-none flex items-center justify-center gap-4 border-2 border-white text-dark bg-white text-sm sm:text-base font-medium capitalize hover:bg-white/60 group transition-all duration-300"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
