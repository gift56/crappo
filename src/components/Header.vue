<template>
  <header class="w-full bg-dark sticky top-0 z-50">
    <div class="container relative">
      <nav class="w-full flex items-center justify-between gap-6 py-6">
        <RouterLink to="/">
          <img src="/img/Logo.svg" alt="logo" />
        </RouterLink>
        <nav class="hidden lg:flex items-center justify-start gap-8">
          <RouterLink
            v-for="link in navLinks"
            :key="link.text"
            :to="link.href"
            class="text-base font-normal hover:text-primary transition-all duration-300"
            >{{ link.text }}</RouterLink
          >
          <button
            type="button"
            class="flex items-center justify-center gap-6 w-fit h-10 border border-primary px-5 rounded-full outline-none bg-primary text-white"
          >
            Register
          </button>
        </nav>
        <span @click="toggleMenu" v-if="!isMenuOpen" class="lg:hidden text-2xl">
          <i class="fa-solid fa-bars"></i>
        </span>
      </nav>
    </div>
    <div
      class="lg:hidden flex flex-col h-screen bg-black/20 gap-7 absolute top-0 w-full z-40 transition-all duration-300"
      :class="{ 'left-[0]': isMenuOpen, '-left-[150%]': !isMenuOpen }"
    >
      <nav
        ref="menuRef"
        className="flex flex-col h-full bg-dark gap-5 p-4 w-[250px]"
      >
        <div className="w-full flex items-center justify-end">
          <span @click="toggleMenu" className="text-2xl">
            <i class="fa-solid fa-xmark"></i>
          </span>
        </div>
        <RouterLink
          v-for="link in navLinks"
          :key="link.text"
          :to="link.href"
          @click="toggleMenu"
          class="text-base font-normal uppercase"
          >{{ link.text }}</RouterLink
        >
        <button
          type="button"
          class="flex items-center justify-center gap-6 w-fit h-10 border border-primary px-5 rounded-full outline-none bg-primary text-white"
        >
          Register
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isMenuOpen = ref(false);
const menuRef = ref(null);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenuOnClickOutside = (event) => {
  if (
    isMenuOpen.value &&
    menuRef.value &&
    !menuRef.value.contains(event.target)
  ) {
    isMenuOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("mousedown", closeMenuOnClickOutside);
});

// Clean up the event listener when the component is unmounted
onUnmounted(() => {
  document.removeEventListener("mousedown", closeMenuOnClickOutside);
});

const navLinks = [
  {
    href: "#products",
    text: "Products",
  },
  {
    href: "#features",
    text: "Features",
  },
  {
    href: "#about",
    text: "About",
  },
  {
    href: "#contact",
    text: "Contact",
  },
  {
    href: "/",
    text: "Login",
  },
];
</script>
