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
  return `https://wa.me/2348102569891?text=${encodeURIComponent(message)}`;
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
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:px-20"
    >
      <div
        v-for="item in store.theMenuItems"
        :key="item.id"
        class="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden border border-border cursor-pointer hover:shadow-2xl"
        @click="openModal(item)"
      >
        <!-- Image -->
        <div class="relative">
          <img
            :src="item.image"
            :alt="item.name"
            class="w-full h-36 object-cover rounded-t-lg"
          />
          <!-- Order Now Button on Mobile -->
          <a
            :href="generateWhatsAppLink(item)"
            target="_blank"
            class="sm:hidden absolute bottom-2 right-2 bg-[#D84315] text-white font-semibold px-4 py-2 rounded hover:bg-[#ff6f43]"
          >
            Order Now
          </a>
        </div>

        <!-- Content -->
        <div class="p-4 flex flex-col flex-1">
          <!-- Title -->
          <h2 class="text-lg font-semibold text-gray-800 mb-1">
            {{ item.name }}
          </h2>

          <!-- Description -->
          <p class="text-gray-600 text-sm flex-1">
            {{ item.description.substring(0, 50) }}...
          </p>

          <!-- Prices -->
          <ul class="mt-4">
            <li
              v-for="price in item.prices"
              :key="price.name"
              class="flex justify-between text-gray-700 text-sm space-y-1"
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
      class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
      @click.self="closeModal"
    >
      <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
        <button
          @click="closeModal"
          class="absolute top-4 right-4 text-gray-600 hover:text-gray-800 font-semibold text-2xl"
        >
          x
        </button>
        <img
          :src="selectedItem.image"
          :alt="selectedItem.name"
          class="w-full h-48 object-cover rounded-lg mt-7"
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
            class="bg-white border text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
          >
            Close
          </button>
          <a
            :href="generateWhatsAppLink(selectedItem)"
            target="_blank"
            class="bg-[#D84315] text-white font-semibold px-4 py-2 rounded hover:bg-[#cb5937]"
          >
            Order Now
          </a>
        </div>
      </div>
    </div>
  </main>
</template>
