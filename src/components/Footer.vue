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
          <div class="w-full grid grid-cols-2 md:grid-cols-3 gap-6">
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
            <div class="w-full flex flex-col items-start justify-start gap-8">
              <h3 class="text-2xl font-bold md:text-3xl md:leading-[150%]">
                We accept following payment systems
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup>
import { footerLinks } from "@/constant";
</script>
