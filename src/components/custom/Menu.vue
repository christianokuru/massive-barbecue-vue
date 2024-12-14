<script setup>
import { ref } from 'vue';
import menuItems from "@/components/custom/menuItems";

// State to control modal visibility
const isModalOpen = ref(false);
const selectedItem = ref(null);

// Function to open the modal with the selected item
const openModal = (item) => {
  selectedItem.value = item;
  isModalOpen.value = true;
};

// Function to close the modal
const closeModal = () => {
  isModalOpen.value = false;
  selectedItem.value = null;
};

// Function to close modal if user clicks outside
const closeOnOutsideClick = (event) => {
  if (event.target === event.currentTarget) {
    closeModal();
  }
};
</script>

<template>
  <div class="p-4">
    <div class="pb-7">
      <h2 class="text-2xl font-semibold text-center md:text-4xl md:pt-7">
        Our Menu
      </h2>
      <p class="text-center">Check out our delicious menu below</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div
        v-for="item in menuItems.slice(0, 4)"   
        :key="item.id"
        class="bg-white shadow-lg rounded-lg overflow-hidden border cursor-pointer"
        @click="openModal(item)"
      >
        <img :src="item.image" :alt="item.name" class="w-full h-48 object-cover" />
        <div class="p-4">
          <h3 class="text-lg font-bold text-gray-800">{{ item.name }}</h3>
        </div>
      </div>
    </div>

    <!-- See More Button -->
    <div class="mt-6 text-center">
      <router-link
        to="/menu"
        class="inline-block text-primary font-medium bg-gray-100 px-6 py-2 rounded-lg shadow-md hover:bg-gray-200 transition"
      >
        See More
      </router-link>
    </div>

    <!-- Modal -->
    <div 
      v-if="isModalOpen"
      class="fixed inset-0 bg-gray-800 bg-opacity-50 z-50 flex justify-center items-center"
      @click="closeOnOutsideClick"
    >
      <div class="bg-white rounded-lg p-6 max-w-md w-full" @click.stop>
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-semibold">{{ selectedItem.name }}</h2>
          <button
            @click="closeModal"
            class="text-gray-500 hover:text-gray-700"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <img :src="selectedItem.image" :alt="selectedItem.name" class="w-full h-48 object-cover mb-4"/>
        <div class="space-y-2">
          <p><strong>Description:</strong> More details about the food go here.</p>
          <p><strong>Available Sizes:</strong></p>
          <ul>
            <li v-for="(price, index) in selectedItem.prices" :key="index">
              <span>{{ price.size }}: ₦{{ price.price }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-primary {
  color: #e63946; 
}

.modal-content {
  max-width: 600px;
  width: 100%;
}
</style>
