<script setup>
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ref } from "vue";
import logo from "@/assets/images/logo.png";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "About Us", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact" },
];

const isSheetOpen = ref(false);
</script>

<template>
  <header class="w-full border-b">
    <nav
      class="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-16 py-3 lg:px-3"
    >
      <!-- Logo -->
      <router-link to="/" class="flex items-center">
        <img :src="logo" alt="massive-barbecue-logo" class="w-16" />
      </router-link>

      <!-- Desktop and Tablet Links -->
      <ul class="hidden md:flex space-x-8 font-medium items-center">
        <li
          v-for="(link, index) in navLinks.slice(0, navLinks.length - 1)"
          :key="index"
        >
          <router-link
            :to="link.href"
            class="hover:text-[#D84315] font-semibold transition-colors duration-200 cursor-pointer"
            :class="{
              'text-[#D84315] font-bold': $route.path === link.href,
            }"
          >
            {{ link.name }}
          </router-link>
        </li>
      </ul>

      <!-- Contact Us Button (Desktop and Tablet) -->
      <div class="hidden md:block">
        <router-link
          to="/contact"
          class="bg-yellow-400 text-red-800 px-4 py-2 rounded-lg hover:bg-red-700 hover:text-white duration-200"
          :class="{
            'bg-[#FFD54F] text-[#D84315]': $route.path === '/contact',
          }"
        >
          Contact Us
        </router-link>
      </div>

      <!-- Hamburger Menu (Mobile View) -->
      <div class="md:hidden">
        <Sheet v-model:open="isSheetOpen">
          <SheetTrigger as-child>
            <button class="text-2xl focus:outline-none">☰</button>
          </SheetTrigger>
          <SheetContent class="w-64 bg-white text-red-600">
            <SheetHeader>
              <SheetTitle class="text-lg font-bold">Menu</SheetTitle>
            </SheetHeader>
            <div class="mt-4">
              <ul class="space-y-6">
                <li v-for="(link, index) in navLinks" :key="index" class="text-lg">
                  <router-link
                    :to="link.href"
                    class="block hover:text-yellow-400 transition-colors duration-200"
                    :class="{
                      'text-[#D84315] font-bold': $route.path === link.href,
                    }"
                  >
                    {{ link.name }}
                  </router-link>
                </li>
              </ul>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  </header>
</template>



<!--
Bold Red: #D84315
Golden Yellow: #FFD54F
Smoky Brown: #5D4037 
Charcoal Black: #212121
 -->