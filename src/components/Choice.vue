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
      
      </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
