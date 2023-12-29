<template>
  <footer class="bg-dark">
    <div class="container py-10">
      <div class="w-full flex flex-col items-start justify-start gap-10">
        <div
          class="w-full flex flex-col md:flex-row gap-6 items-start justify-between"
        >
          <div
            class="flex flex-col items-start justify-start w-full sm:w-[50%]"
          >
            <RouterLink to="/" class="select-none">
              <img src="/img/Logo.svg" alt="logo" />
            </RouterLink>
          </div>
          <div class="w-full grid grid-cols-2 gap-6">
            <div
              v-for="footerLink in footerLinks"
              :key="footerLink.title"
              class="w-full flex flex-col items-start justify-start gap-8"
            >
              <h4 class="text-base font-medium text-white md:text-lg">
                {{ footerLink.title }}
              </h4>
              <nav class="w-full flex flex-col items-start justify-start gap-4">
                <RouterLink
                  :to="link.href"
                  v-for="link in footerLink.footerLinks"
                  class="text-sm font-medium md:text-base text-textgray hover:text-primary transition-all duration-300"
                  >{{ link.text }}</RouterLink
                >
              </nav>
            </div>
          </div>
          <div
            class="w-full md:w-[50%] flex flex-col items-start justify-start gap-8"
          >
            <h3 class="text-2xl font-bold md:text-2xl md:leading-[150%]">
              We accept following payment systems
            </h3>
            <div
              class="w-full flex flex-wrap md:flex-nowrap items-center justify-start gap-6"
            >
              <RouterLink
                v-for="(item, index) in footerPayment"
                :key="index"
                :to="item.to"
              >
                <img :src="item.icon" alt="payment" />
              </RouterLink>
            </div>
          </div>
        </div>

        <div
          class="w-full flex flex-wrap items-center justify-between gap-5 pt-2 mt-8"
        >
          <p class="text-sm md:text-base font-normal text-white">
            © 2021 CRAPPO. All rights reserved
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup>
import { footerLinks, footerPayment } from "@/constant";
</script>
