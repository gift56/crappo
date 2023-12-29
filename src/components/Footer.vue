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
          <div
            class="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          ></div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup></script>
