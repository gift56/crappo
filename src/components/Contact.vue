<template>
  <section class="w-full bg-contactLinear">
    <div class="container py-14">
      <div class="w-full flex items-center justify-center">
        <div
          class="w-full flex flex-col lg:flex-row lg:items-center lg:justify-between lg:h-[216px] rounded-2xl bg-contactBg bg-no-repeat items-start justify-start gap-6 p-6"
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
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
