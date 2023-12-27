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
        
        </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
