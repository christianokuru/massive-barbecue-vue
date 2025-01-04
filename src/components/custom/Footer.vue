<script setup>
import { Button } from "@/components/ui/button";
import { useRouter } from "vue-router";
import { ref } from "vue";

// Scroll to top function
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

const officeAddress = "47 Ferguson Osagie Rd, Dangote, off Alaja Rd, Megida, Ayobo, Lagos";
const phoneNumber = "+234 810 25 698 91";
const email = "massivebarbeque@gmail.com";
const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/profile.php?id=100083405384043" },
  { name: "Instagram", href: "https://www.instagram.com/massivebarbeque?igsh=YzljYTk1ODg3Zg==" },
  { name: "Twitter", href: "https://twitter.com" },
];
</script>

<template>
  <footer class="bg-gray-800 text-white py-8">
    <div class="max-w-7xl mx-auto px-4">
      <!-- Footer Top Section -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <!-- Office Address -->
        <div>
          <h1 class="text-xl font-semibold mb-4">Office Address</h1>
          <p>{{ officeAddress }}</p>
        </div>

        <!-- Navigation Links -->
        <div>
          <h1 class="text-xl font-semibold mb-4">Quick Links</h1>
          <ul>
            <li v-for="(link, index) in navLinks" :key="index" class="mb-2">
              <router-link
                :to="link.href"
                class="hover:text-yellow-400 transition-colors duration-200"
              >
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Contact Information -->
        <div>
          <h1 class="text-xl font-semibold mb-4">Contact Us</h1>
          <p>
            Phone:
            <a :href="'tel:' + phoneNumber" class="hover:text-yellow-400">{{
              phoneNumber
            }}</a>
          </p>
          <p>
            Email:
            <a :href="'mailto:' + email" class="hover:text-yellow-400">{{
              email
            }}</a>
          </p>
        </div>

        <!-- Social Links -->
        <div>
          <h1 class="text-xl font-semibold mb-4">Follow Us</h1>
          <ul>
            <li
              v-for="(social, index) in socialLinks"
              :key="index"
              class="mb-2"
            >
              <a
                :href="social.href"
                class="hover:text-yellow-400 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ social.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Scroll to Top Button -->
      <div class="flex justify-center mt-4">
        <v-icon
          @click="scrollToTop"
          name="bi-arrow-up-circle"
          scale="3.0"
          class="hover:text-[#FFD54F]"
        />
      </div>

      <!-- Footer Bottom Section (Copyright) -->
      <div class="text-center mt-8">
        <p class="text-sm">
          &copy; {{ new Date().getFullYear() }} Massive Barbeque. All rights
          reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Mobile-first design */
footer {
  background-color: #2d2d2d;
  color: white;
}

/* Responsive design for larger screens */
@media (min-width: 640px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
