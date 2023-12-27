<template>
  <section class="w-full relative">
    <div class="container">
      <div class="w-full flex items-center justify-center flex-col gap-8 pt-12">
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
          Let&#35;s check your hash rate to see how much you will earn today,
          <br class="hidden lg:block" />
          Exercitation veniam consequat sunt nostrud amet.
        </p>
        <div
          class="w-full md:w-[924px] mx-auto bg-white flex flex-col items-start justify-start gap-6 h-fit md:min-h-[371px] round"
        ></div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
