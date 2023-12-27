<template>
  <section class="w-full relative">
    <div class="container">
      <div
        class="w-full py-12 flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12"
      >
        <div class="w-full lg:flex-1 flex items-center justify-center gap-6">
          <div class="w-full md:flex-1">
            <img
              v-motion
              :initial="{ opacity: 0, scale: 0.5 }"
              :visible="{
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 100,
                },
              }"
              src="/img/contentImage.svg"
              alt="whyImage"
            />
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
              class="text-3xl font-bold md:text-4xl"
            >
              Why you should choose CRAPPO
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
              Experience the next generation cryptocurrency platform. No
              financial borders, extra fees, and fake reviews.
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
              class="rounded-full w-fit px-3 md:px-6 py-4 outline-none flex items-center justify-center gap-4 border-2 border-primary text-white bg-primary text-sm sm:text-base font-medium capitalize hover:bg-primary/60 group transition-all duration-300"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
