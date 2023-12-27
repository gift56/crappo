<template>
  <section id="how" class="w-full">
    <div class="container relative">
      <div
        class="w-full py-14 flex flex-col items-center justify-center gap-8 md:gap-12"
      >
        <div class="w-full flex flex-col items-start justify-start gap-4">
          <h1
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible="{
              opacity: 1,
              y: 0,
              transition: {
                delay: 100,
              },
            }"
            class="text-2xl font-bold text-center md:text-5xl lg:text-6xl"
          >
            Fastest & secure platform to invest in crypto
          </h1>
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
            class="text-lg font-normal text-center md:text-xl text-white/50 lg:text-2xl"
          >
            Tincidunt id nibh orci nibh just nulla elementum, sed vel.
          </p>
        </div>
        <div
          class="w-full flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <div class="w-full md:flex-1">
            <img
              v-motion
              :initial="{ opacity: 0, scale: 0.5 }"
              :enter="{
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 500,
                },
              }"
              src="/img/heroImage.svg"
              alt="heroImage"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
