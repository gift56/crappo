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
            Let&#35;s check your hash rate to see how much you will earn today,
            <br class="hidden lg:block" />
            Exercitation veniam consequat sunt nostrud amet.
          </p>
        </div>
        <div
          class="w-full md:w-[924px] mx-auto flex flex-col items-start justify-between h-fit md:min-h-[371px] drop-shadow-earnDrop rounded-2xl lg:translate-y-48"
        >
          <div
            class="w-full py-10 px-2 bg-[#FBFCFE] flex-1 rounded-tr-2xl rounded-tl-2xl flex flex-col md:flex-row items-center justify-center gap-2"
          >
        
        </div>
          <div
            class="w-full py-10 px-2 bg-white shadow-exchangeShad flex-1 rounded-br-2xl rounded-bl-2xl mix-blend-overlay"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
