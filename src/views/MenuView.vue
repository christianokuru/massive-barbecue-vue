<script setup>
import { useMenuStore } from "@/stores/menu.js"; // Import the store
import { ref } from "vue"; // For modal state

const store = useMenuStore(); // Access the store

// Modal state
const selectedItem = ref(null);
const isModalOpen = ref(false);

// Function to open the modal
const openModal = (item) => {
  selectedItem.value = item;
  isModalOpen.value = true;
};

// Function to close the modal
const closeModal = () => {
  isModalOpen.value = false;
  selectedItem.value = null;
};

// Generate WhatsApp message link
const generateWhatsAppLink = (item) => {
  const message = `Hello! I would like to order "${item.name}". Can you please assist me?`;
  return `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
};
</script>

<template>
  <main class="p-4 space-y-6">
    <!-- Menu Header -->
    <div class="text-center">
      <h1 class="text-3xl font-bold text-gray-800">Our Menu</h1>
      <p class="text-gray-500 mt-2">
        Explore our delicious offerings, crafted to perfection!
      </p>
    </div>

    <!-- Menu Items -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="item in store.theMenuItems"
        :key="item.id"
        class="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden"
      >
        <!-- Image -->
        <div class="relative">
          <img
            :src="item.image"
            :alt="item.name"
            class="w-full h-48 object-cover"
          />
          <!-- Order Now Button on Mobile -->
          <a
            :href="generateWhatsAppLink(item)"
            target="_blank"
            class="sm:hidden absolute bottom-2 right-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Order Now
          </a>
        </div>

        <!-- Content -->
        <div class="p-4 flex flex-col justify-between flex-1">
          <!-- Title -->
          <h2 class="text-xl font-semibold text-gray-800">{{ item.name }}</h2>

          <!-- Description -->
          <p class="text-gray-600 text-sm mt-2 sm:hidden">
            {{ item.description }}
          </p>
          <p class="text-gray-600 text-sm mt-2 hidden sm:block">
            {{ item.description.substring(0, 50) }}...
            <button
              @click="openModal(item)"
              class="text-blue-500 hover:underline ml-2"
            >
              See more
            </button>
          </p>

          <!-- Prices -->
          <ul class="mt-4 space-y-2">
            <li
              v-for="price in item.prices"
              :key="price.name"
              class="flex justify-between text-gray-700"
            >
              <span>{{ price.name }}</span>
              <span class="font-semibold"
                >₦{{ price.price.toLocaleString() }}</span
              >
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      v-if="isModalOpen"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      @click.self="closeModal"
    >
      <div
        class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative"
      >
        <button
          @click="closeModal"
          class="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
        >
          &times;
        </button>
        <img
          :src="selectedItem.image"
          :alt="selectedItem.name"
          class="w-full h-48 object-cover rounded-lg"
        />
        <h2 class="text-2xl font-bold mt-4">{{ selectedItem.name }}</h2>
        <p class="text-gray-700 mt-2">{{ selectedItem.description }}</p>
        <ul class="mt-4 space-y-2">
          <li
            v-for="price in selectedItem.prices"
            :key="price.name"
            class="flex justify-between text-gray-700"
          >
            <span>{{ price.name }}</span>
            <span class="font-semibold"
              >₦{{ price.price.toLocaleString() }}</span
            >
          </li>
        </ul>
        <div class="mt-4 flex justify-between items-center">
          <button
            @click="closeModal"
            class="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
          >
            Close
          </button>
          <a
            :href="generateWhatsAppLink(selectedItem)"
            target="_blank"
            class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Order Now
          </a>
        </div>
      </div>
    </div>
  </main>
</template>
